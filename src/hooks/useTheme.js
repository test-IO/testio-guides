import { useEffect, useState } from "react"

/**
 * Shared hook for theme state management
 * Provides consistent theme state across components
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "system"
    return window.localStorage?.theme ?? "system"
  })

  useEffect(() => {
    const handler = () => {
      const newTheme = window.localStorage?.theme ?? "system"
      setTheme(newTheme)
    }
    window.addEventListener("storage", handler)
    return () => window.removeEventListener("storage", handler)
  }, [])

  return theme
}


