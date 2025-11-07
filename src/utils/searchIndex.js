import navigation from "@/data/navigation"

/**
 * Flattens the navigation structure into a searchable array
 */
function flattenNavigation(nav, parentTitle = "") {
  const items = []

  for (const section of nav) {
    const sectionTitle = section.title || ""

    if (section.links) {
      for (const link of section.links) {
        // Add the main link
        items.push({
          title: link.title,
          href: link.href,
          section: sectionTitle,
          category: parentTitle || sectionTitle,
          content: `${link.title} ${sectionTitle}`.toLowerCase(),
        })

        // Add nested children if they exist
        if (link.children) {
          for (const child of link.children) {
            items.push({
              title: child.title,
              href: child.href,
              section: sectionTitle,
              category: link.title,
              content: `${child.title} ${link.title} ${sectionTitle}`.toLowerCase(),
            })
          }
        }
      }
    }
  }

  return items
}

/**
 * Builds the search index from navigation
 */
export function buildSearchIndex() {
  return flattenNavigation(navigation)
}


