const withMarkdoc = require("@markdoc/next.js")

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md"],
  experimental: {
    scrollRestoration: true,
  },
  // @docsearch/react ships ESM with no "type": "module", and its UMD-only
  // @algolia/* deps break Next's server-external CJS/ESM interop (named
  // exports go missing) unless these packages are bundled instead.
  transpilePackages: ["@docsearch/react", "@algolia/autocomplete-core"],
  images: {
    loader: "akamai",
    path: "/",
  },
}

module.exports = withMarkdoc()(nextConfig)
