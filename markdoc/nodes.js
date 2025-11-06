import { nodes as defaultNodes } from "@markdoc/markdoc"

const nodes = {
  document: {
    render: undefined,
  },
  th: {
    ...defaultNodes.th,
    attributes: {
      ...defaultNodes.th.attributes,
      scope: {
        type: String,
        default: "col",
      },
    },
  },
  heading: {
    ...defaultNodes.heading,
    attributes: {
      ...defaultNodes.heading.attributes,
      id: {
        type: String,
      },
    },
    transform(node, config) {
      const base = defaultNodes.heading.transform(node, config)
      
      // Parse {#id} syntax from heading text
      if (base.children && typeof base.children === 'string') {
        const idMatch = base.children.match(/\s*\{#([^}]+)\}\s*$/)
        if (idMatch) {
          // Remove {#id} from text and set as attribute
          base.children = base.children.replace(/\s*\{#[^}]+\}\s*$/, '').trim()
          base.attributes = base.attributes || {}
          base.attributes.id = idMatch[1]
        }
      } else if (Array.isArray(base.children)) {
        // Handle array of children (mixed content)
        const lastChild = base.children[base.children.length - 1]
        if (typeof lastChild === 'string') {
          const idMatch = lastChild.match(/\s*\{#([^}]+)\}\s*$/)
          if (idMatch) {
            base.children[base.children.length - 1] = lastChild.replace(/\s*\{#[^}]+\}\s*$/, '').trim()
            base.attributes = base.attributes || {}
            base.attributes.id = idMatch[1]
          }
        }
      }
      
      return base
    },
  },
}

export default nodes
