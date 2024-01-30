import { CodeRef } from "@/components/CodeRef"
import { QuickLink, QuickLinks } from "@/components/QuickLinks"
import { Screenshot } from "@/components/Screenshot"
import { YouTube } from "@/components/YouTube"
import { comment, head, link, script } from "@markdoc/next.js/tags"

const tags = {
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = "", caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  "quick-links": {
    render: QuickLinks,
  },
  "quick-link": {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  link: link,
  screenshot: {
    render: Screenshot,
    attributes: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: false,
        default: "screenshot",
      },
      caption: {
        type: String,
        required: false,
      },
    },
  },
  code: {
    render: CodeRef,
    description: "Syntax highlighting for code blocks.",
    attributes: {
      language: {
        type: String,
        required: true,
        description: "A language must be specified for the ref block.",
      },
      showLineNumbers: {
        type: Boolean,
        default: true,
        description: "Show line numbers in the code block.",
      },
    },
  },
  youtube: {
    render: YouTube,
    attributes: {
      src: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      width: {
        type: String,
        default: "50%",
      },
    },
  },
}

export default tags
