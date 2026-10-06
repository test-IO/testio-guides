module.exports = {
  // Prettier 3 loads plugins itself (supports ESM-only packages like
  // @trivago/prettier-plugin-sort-imports v6); pass package names, not
  // require() results.
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  semi: false,
  singleQuote: false,
  printWidth: 100,
  trailingComma: "es5",
  arrowParens: "always",
  tabWidth: 2,
  useTabs: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  bracketSpacing: true,
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
