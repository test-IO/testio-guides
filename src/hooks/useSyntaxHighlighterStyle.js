import { useEffect, useState } from "react"
import { useTheme } from "./useTheme"

/**
 * Hook for loading syntax highlighter styles based on theme
 * @param {boolean} forceDark - Force dark theme regardless of user preference
 * @returns {object} Style object for react-syntax-highlighter
 */
export function useSyntaxHighlighterStyle(forceDark = false) {
  const [style, setStyle] = useState({})
  const theme = useTheme()

  useEffect(() => {
    // Only load styles on client side
    if (typeof window === "undefined") return

    const isDark =
      forceDark ||
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)

    // Use static string literals for webpack to analyze
    if (isDark) {
      import("react-syntax-highlighter/dist/esm/styles/prism/synthwave84")
        .then((mod) => setStyle(mod.default))
        .catch((error) => {
          console.error("Failed to load synthwave84 style:", error)
        })
    } else {
      import("react-syntax-highlighter/dist/esm/styles/prism/night-owl")
        .then((mod) => setStyle(mod.default))
        .catch((error) => {
          console.error("Failed to load night-owl style:", error)
        })
    }
  }, [theme, forceDark])

  return style
}

