---
name: upgrade-deps
description: Upgrade every dependency in testio-guides (npm packages, GitHub Actions, Node) to its latest version, majors included, except packages held back by the .github/dependabot.yml ignore rules. It verifies build, lint and formatting, reports what changed, and commits in the format GitHub uses to autofill the PR. Never pushes. Use when the user types /upgrade-deps or asks to "upgrade all dependencies", "clear dependabot", or "bump everything".
---

# upgrade-deps

Take every dependency to its latest published version in one pass. Don't stop at what Dependabot or the security alerts flag, and don't stop at the minimum patched version. Majors are included, so don't ask whether to skip them. **Never push** and never run `gh pr create`.

## 1. Record the starting state and back up files

```bash
mkdir -p /tmp/deps-backup && cp package.json yarn.lock /tmp/deps-backup/
gh pr list --author app/dependabot --json number,title --jq '.[]|"#\(.number) \(.title)"' | tee /tmp/deps-backup/dependabot-prs.txt
gh api repos/{owner}/{repo}/dependabot/alerts --paginate --jq '.[]|select(.state=="open")|[.dependency.package.name,.security_advisory.severity,.security_vulnerability.first_patched_version.identifier]|@tsv' | sort -u > /tmp/deps-backup/alerts.tsv
yarn build && rm -rf /tmp/out-before && cp -r out /tmp/out-before
```

## 2. Load the held-back list

The held-back list is the `ignore` rules in `.github/dependabot.yml`, and nothing else. As of this writing there are none — both the `github-actions` and `npm` ecosystems are unrestricted weekly updates, so everything is fair game. If a rule has been added since, read it now: each ignored package goes to the highest version below its ignored range, and isn't re-tested, because the comment explains why it's held.

## 3. Upgrade libraries

- Run `yarn add <pkg>@latest` for every entry in `dependencies`, and `yarn add -D <pkg>@latest` for every entry in `devDependencies`. For held-back packages, use `<pkg>@^<highest allowed major>` instead.
- `@markdoc/markdoc` and `@markdoc/next.js` are pinned to exact versions (`0.3.0` / `0.2.2`, no `^`) — that's a deliberate pin, not staleness. Still try bumping them to latest; only revert to the pinned version if the build breaks.
- Regenerate the lockfile from scratch so transitive dependencies refresh: `rm -rf yarn.lock node_modules && yarn install`.
- Fix every `unmet peer dependency` warning by adding the missing peer at its latest compatible version.

## 4. Majors

For each major bump, read the changelog or migration guide and use the official codemod or upgrade tool where one exists (e.g. `npx @tailwindcss/upgrade` for Tailwind 3→4, run while the old major is still installed). Then fix the code.

Watch for these, based on the same upgrade having already happened in the sibling repos cirro-guides/cirro-api-docs:

- **markdownlint → markdownlint-cli**: the `markdownlint` package (`devDependencies`) has no CLI. If `yarn lint:markdown` stops resolving, the fix is swapping to `markdownlint-cli` (same command).
- **Next 15 → 16 + Turbopack**: `@markdoc/next.js` may not resolve its schema under Turbopack, silently dropping frontmatter (titles, table of contents, homepage cards) while the build still succeeds. If pages lose their frontmatter after a Next major bump, add `--webpack` to the `dev`/`build` scripts and to `deploy.yml`'s `next build` step.
- **ESLint 8 → 9**: `.eslintrc.json` needs to become a flat `eslint.config.mjs`, and `next lint` may be removed from newer `eslint-config-next`/Next majors — switch `lint:next` to calling `eslint .` directly if so.
- **Prettier 2 → 3**: plugins in `prettier.config.js` must be listed as require() results already are, but confirm `@trivago/prettier-plugin-sort-imports` and `prettier-plugin-tailwindcss` still load under v3.

If something truly can't run at its latest version because the rest of the ecosystem isn't ready, keep it on the last version that works. Add a `.github/dependabot.yml` `ignore` rule whose comment gives the version to keep, the exact error, and the date.

## 5. Actions and runtime

- For every `uses:` in `.github/workflows/*.yml`, run `gh api repos/<owner>/<action>/releases/latest --jq .tag_name`. `build.yml` and `lints.yml` still use `actions/checkout@v3` and `actions/setup-node@v3`; `deploy.yml` is already on `@v4`. Move everything to the latest major tag, read the release notes for breaking inputs, and skip actions held by the ignore rules.
- `build.yml` and `lints.yml` hardcode `node-version: 20` instead of reading `.node-version`; bump that number too (or switch to reading the file, if asked). Move `.node-version`, `.nvmrc`, and every workflow `node-version:` to the current LTS: `curl -s https://nodejs.org/dist/index.json | node -e 'console.log(JSON.parse(require("fs").readFileSync(0)).find(x=>x.lts).version)'`.
- `main.yml` (the Cloud66 staging-deploy webhook) has no `uses:` or Node setup — leave it alone.

## 6. Verify

Loop until everything passes:

```bash
rm -rf node_modules .next out && yarn install --frozen-lockfile
yarn lint:next && yarn lint:markdown && yarn format:check && yarn build
yarn outdated   # only packages held by the ignore rules may remain
```

- `yarn lint` (`bin/lint`) silently runs `format:fix` when `yarn format` fails, so after running it, review `git diff`. Fix malformed content (such as broken Markdown tables) instead of accepting an ugly reformat.
- A broken Markdoc setup still builds green (see the Turbopack note above), so compare against the baseline. Every HTML file in `/tmp/out-before` must have the same `<title>` and the same `<h1-3>` count in `out/`.

## 7. Audit

Aim for 0 vulnerabilities:

- `yarn audit`. It must report a non-zero "Packages audited" count; 0 means it didn't actually run.
- Every package in `/tmp/deps-backup/alerts.tsv` must be at or above its patched version in `yarn.lock`, or be gone from the tree.

## 8. Report

Show:

- A `package | old | new` table covering every changed dependency, action, and runtime version (compare against `/tmp/deps-backup`).
- The code and config changes made for the migrations.
- What was held back and why (the ignore rules, plus any added this run).
- The Dependabot PRs and alerts this clears.

## 9. Commit

1. Ask for an optional Jira ticket (`EPMTIOOPS-NNNNN`).
2. Ask before creating the branch `deps/upgrade-YYYY-MM-DD` from `main`.
3. As the very last action before committing, run `yarn format:fix && yarn format:check`, so files edited late (this SKILL.md included) pass the CI formatter.
4. Ask before committing. Make it one commit so GitHub autofills the PR:
   - **Subject** (becomes the PR title): `Upgrade all dependencies to latest versions`, prefixed with `[EPMTIOOPS-NNNNN] ` if a ticket was given.
   - **Body** (becomes the PR description): flat `- ` bullets. Write one per major bump, one per code or config change, one per workflow or runtime change, and one grouped bullet for all minor and patch bumps. Each bullet starts with a capitalized imperative verb, is at most 64 characters, and has no trailing period.
   - No Co-Authored-By, no emoji, no AI attribution.
5. Don't suggest a PR title, description, or labels; the commit is the PR text. Never push.

## 10. Always last

Ask the user to run the app locally (`yarn dev`) and check it visually: the home page, a docs page, and the search pop-up.
