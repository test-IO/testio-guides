![Logo](/.github/testio-guides-banner.png)

# Test IO Guides

[![GitHub Workflow Deploy Status](https://img.shields.io/github/actions/workflow/status/test-IO/testio-guides/deploy.yml?label=Deploy&logo=github&style=flat-square)](https://github.com/test-IO/testio-guides/actions/workflows/deploy.yml)
[![GitHub Workflow Build Status](https://img.shields.io/github/actions/workflow/status/test-IO/testio-guides/build.yml?label=Build&logo=github&style=flat-square)](https://github.com/test-IO/testio-guides/actions/workflows/build.yml)
[![GitHub Workflow Lint Status](https://img.shields.io/github/actions/workflow/status/test-IO/testio-guides/lints.yml?label=Lints&logo=github&style=flat-square)](https://github.com/test-IO/testio-guides/actions/workflows/lints.yml)

> Test IO Guides for anyone - business or developer - to learn about Test IO and how to use it.
> This is a [Next.js](https://nextjs.org/) project using [Tailwind CSS](https://tailwindcss.com/) and [Markdoc](https://markdoc.dev/).

## Contributing

### Writing Content

To write content for the Test IO Guides, you need to have a basic understanding of Markdown (more precisely Markdoc) and Git. If you are not familiar with these, please read the following guides:

- [Markdown Guide](https://www.markdownguide.org/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Git Handbook - Pull Requests](https://guides.github.com/activities/forking/#making-a-pull-request)
- [Markdoc](https://markdoc.dev/)

You will find all the content in the `src` folder. The content is written in Markdown and is organized in folders and files. The folder structure is as follows:

```bash
├── src
│   ├── pages   # Markdown files for the pages
│   ├── images  # Images for the pages
│   ├── data    # Sidebar navigation links
```

---

If you want to embed **code snippets**, you can use the following syntax:

````Markdown
{% code language="ruby" showLineNumbers=true %}
```
x = 7.days.ago
```
{% /code %}
````

---

All pages by default show a **table of contents** on the right. You can disable this by adding `hideTableOfContents: true` to the frontmatter of the page:

```Markdown
---
title: "Page Title"
hideTableOfContents: true
---
```

This will expand the content to the full width of the page.

---

### Writing Code

To contribute to the Test IO Guides application (this repository), you need to have a basic understanding of JavaScript (Next.js), Markdoc, TailwindCSS, and Yarn. Git(Hub) proficiency is presumed. If you are not familiar with these, please read the following guides:

- [Next.js](https://nextjs.org/docs/getting-started)
- [Yarn](https://yarnpkg.com/getting-started)
- [Markdoc](https://markdoc.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)

To get started, first run `bin/setup`. This will install all dependencies and set up the project. Then run `yarn dev` to start the development server. You can now access the application at [http://localhost:3000](http://localhost:3000).  
To run the linter, run `bin/lint`. This requires markdownlint to be installed. To install it via Homebrew, run `brew install markdownlint-cli`.

### Search

The search is powered by [Algolia](https://www.algolia.com/). The search index is updated by running a crawler on the deployed site. This crawler is Python based and lives in its own (private) [repository](https://github.com/test-IO/cirro-guides-scraper). All instructions on how to run the crawler can be found in that repository's [README](https://github.com/test-IO/cirro-guides-scraper#readme).

The search bar reads `NEXT_PUBLIC_DOCSEARCH_APP_ID`, `NEXT_PUBLIC_DOCSEARCH_API_KEY` and `NEXT_PUBLIC_DOCSEARCH_INDEX_NAME`. They are repository variables, injected at build time by the deploy workflow, and must point to the same Algolia app and index (`testio_guides`) the scraper writes to. Anything prefixed `NEXT_PUBLIC_` is compiled into the browser JavaScript, so only ever use a search-only key there.

This reindex normally runs automatically: the `algolia_reindex` job in the [deploy workflow](.github/workflows/deploy.yml) re-runs the scraper after every deploy to `main`, using the `ALGOLIA_WRITE_API_KEY` secret and the `SCRAPER_REPO_CLONE_KEY` deploy key — no manual step needed in the common case.

To trigger a reindex manually (e.g. to test a scraper config change before it reaches `main`), clone [cirro-guides-scraper](https://github.com/test-IO/cirro-guides-scraper) and run:

```sh
./docsearch run configs/testio_guides.json
```

To try search locally, put the three variables above in a `.env.local` file (git-ignored) and run `yarn dev`.

### JavaScript

<p>
  <img src="https://img.shields.io/badge/node-20.x.x-blue.svg" alt="node 20.x.x" />
  <img src="https://img.shields.io/badge/yarn-1.22.x-blue.svg" alt="yarn 1.22.x" />
</p>

## Authors

👤 **Aleksei Okatiev**
