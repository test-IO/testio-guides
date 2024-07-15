import { Callout } from "@/components/Callout"
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
  link: {
    ...link,
    render: "a",
    attributes: {
      ...link.attributes,
      rel: {
        type: String,
      },
      target: {
        type: String,
      },
    },
  },
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
      type: {
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
  callout: {
    render: Callout,
    children: ["paragraph", "tag", "list"],
    attributes: {
      type: {
        type: String,
        default: "warning",
        matches: ["warning"],
        errorLevel: "critical",
      },
    },
  },
  list: {
    attributes: {
      type: { type: String },
    },
    transform(node, config) {
      const children = node.transformChildren(config);
      if (children.length && children[0].name === 'ul')
        children[0].attributes.type = node.attributes.type;
      return children;
    },
  },
}

export default tags
