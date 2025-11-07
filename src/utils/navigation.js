import { isLinkInChildren } from "./helpers"

/**
 * Scrolls to an anchor element on the page
 * Handles both same-page scrolling and navigation from other pages
 * @param {string} anchor - The anchor ID to scroll to (without #)
 * @param {object} router - Next.js router object
 * @param {function} onComplete - Optional callback after scrolling
 */
export function scrollToAnchor(anchor, router, onComplete) {
  if (!anchor) {
    window.scrollTo({ top: 0, behavior: "smooth" })
    window.history.pushState(null, "", "/")
    if (onComplete) onComplete()
    return
  }

  if (router.pathname === "/") {
    // Already on homepage, just scroll
    const element = document.getElementById(anchor)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.pushState(null, "", `/#${anchor}`)
      if (onComplete) onComplete()
    }
  } else {
    // Navigate to homepage with anchor
    const targetUrl = `/#${anchor}`
    router.push(targetUrl).then(() => {
      setTimeout(() => {
        const element = document.getElementById(anchor)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        if (onComplete) onComplete()
      }, 200)
    })
  }
}

/**
 * Finds the current navigation section and child section for a given pathname
 * @param {Array} navigation - The navigation structure
 * @param {string} pathname - The current pathname
 * @returns {object} Object with section and childSection properties
 */
export function findCurrentSection(navigation, pathname) {
  let section = null
  let childSection = null

  for (const navSection of navigation) {
    for (const link of navSection.links) {
      if (link.href === pathname) {
        return { section: navSection, childSection: null }
      }
      if (link.children && isLinkInChildren(link.children, pathname)) {
        childSection = link
        // Don't break - continue to check if there's a direct match elsewhere
      }
    }
  }

  return { section, childSection }
}

