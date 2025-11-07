import Fuse from "fuse.js"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { buildSearchIndex } from "@/utils/searchIndex"

// Initialize Fuse only on client side
let fuse = null
if (typeof window !== "undefined") {
  try {
    const searchIndex = buildSearchIndex()
    const fuseOptions = {
      keys: [
        { name: "title", weight: 0.7 },
        { name: "content", weight: 0.3 },
        { name: "section", weight: 0.2 },
      ],
      threshold: 0.3,
      includeScore: true,
      minMatchCharLength: 2,
    }
    fuse = new Fuse(searchIndex, fuseOptions)
  } catch (error) {
    console.error("Failed to initialize search index:", error)
  }
}

function SearchModal({ isOpen, onClose }) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const resultsRef = useRef(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!fuse || query.trim().length === 0) {
      setResults([])
      setSelectedIndex(0)
      return
    }

    const searchResults = fuse.search(query)
    setResults(searchResults.slice(0, 20)) // Limit to 20 results
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (!isOpen) {
      setQuery("")
      setResults([])
      setSelectedIndex(0)
    }
  }, [isOpen])

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose()
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === "Enter" && results.length > 0) {
      e.preventDefault()
      const selected = results[selectedIndex]
      if (selected) {
        router.push(selected.item.href)
        onClose()
      }
    }
  }

  useEffect(() => {
    if (resultsRef.current && selectedIndex >= 0) {
      const selectedElement = resultsRef.current.children[selectedIndex]
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest", behavior: "smooth" })
      }
    }
  }, [selectedIndex])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      <div
        className="relative mx-auto mt-12 max-w-2xl rounded-lg bg-white shadow-xl dark:bg-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center border-b border-slate-200 dark:border-slate-700">
          <svg
            className="ml-4 h-5 w-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search guides..."
            className="w-full border-0 bg-transparent py-4 pl-3 pr-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 dark:text-slate-100 dark:placeholder-slate-500"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="mr-4 rounded p-1 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto" ref={resultsRef}>
          {query.trim().length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
              Start typing to search...
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
              No results found for "{query}"
            </div>
          ) : (
            <ul className="py-2">
              {results.map((result, index) => {
                const item = result.item
                const isSelected = index === selectedIndex
                return (
                  <li key={`${item.href}-${index}`}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 ${
                        isSelected
                          ? "bg-sky-50 dark:bg-slate-700"
                          : "hover:bg-slate-50 dark:hover:bg-slate-700"
                      }`}
                      onClick={onClose}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-medium text-slate-900 dark:text-slate-100">
                            {item.title}
                          </div>
                          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            {item.category}
                            {item.section && item.section !== item.category && ` • ${item.section}`}
                          </div>
                        </div>
                        <div className="ml-4 text-xs text-slate-400 dark:text-slate-500">
                          {item.href}
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-200 px-4 py-2 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-slate-300 bg-slate-100 px-1.5 py-0.5 dark:border-slate-600 dark:bg-slate-700">
                ↑↓
              </kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-slate-300 bg-slate-100 px-1.5 py-0.5 dark:border-slate-600 dark:bg-slate-700">
                Enter
              </kbd>
              <span>Select</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-slate-300 bg-slate-100 px-1.5 py-0.5 dark:border-slate-600 dark:bg-slate-700">
                Esc
              </kbd>
              <span>Close</span>
            </span>
          </div>
          {results.length > 0 && (
            <div className="text-slate-400 dark:text-slate-500">
              {results.length} {results.length === 1 ? "result" : "results"}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchModal

