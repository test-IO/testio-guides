import { Layout } from "@/components/Layout"
import "@/styles/tailwind.css"
import "@/styles/mcp-blur.css"
import { slugifyWithCounter } from "@sindresorhus/slugify"
import "focus-visible"
import Head from "next/head"

function getNodeText(node) {
  let text = ""
  for (let child of node.children ?? []) {
    if (typeof child === "string") {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (node.name === "h2" || node.name === "h3") {
      let title = getNodeText(node)
      if (title) {
        // Use existing ID if present, otherwise generate one
        let id = node.attributes?.id || slugify(title)
        node.attributes = node.attributes || {}
        node.attributes.id = id
        if (node.name === "h3") {
          if (!sections[sections.length - 1]) {
            throw new Error("Cannot add `h3` to table of contents without a preceding `h2`")
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export default function App({ Component, pageProps }) {
  let title = pageProps.markdoc?.frontmatter.title
  let showTableOfContent = !pageProps.markdoc?.frontmatter.hideTableOfContents

  let pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle || `${pageProps.markdoc?.frontmatter.title} - Docs`

  let description = pageProps.markdoc?.frontmatter.description

  let tableOfContents = []
  if (showTableOfContent && pageProps.markdoc?.content) {
    tableOfContents = collectHeadings(pageProps.markdoc.content)
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Layout title={title} tableOfContents={tableOfContents}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
