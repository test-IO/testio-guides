const withMarkdoc = require("@markdoc/next.js")

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md"],
  experimental: {
    scrollRestoration: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "akamai",
    path: "/",
  },
}

module.exports = withMarkdoc()(nextConfig)
