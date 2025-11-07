import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react"
import Link from "next/link"
import Router from "next/router"
import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"

const docSearchConfig = {
  appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
  apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
  indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
}

const HITS_PER_PAGE = 20

function Hit({ hit, children }) {
  return <Link href={hit.url}>{children}</Link>
}

function SearchIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" {...props}>
      <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
    </svg>
  )
}

export function Search() {
  let [isOpen, setIsOpen] = useState(false)
  let [modifierKey, setModifierKey] = useState()

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  useDocSearchKeyboardEvents({ isOpen, onOpen, onClose })

  useEffect(() => {
    setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl ")
  }, [])

  return (
    <>
      <button
        type="button"
        className="group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-400 md:hover:ring-slate-500 dark:md:bg-slate-800/75 dark:md:ring-inset dark:md:ring-white/50 dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500 lg:w-[30rem]"
        onClick={onOpen}
      >
        <SearchIcon className="h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400" />
        <span className="sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400">
          Search guides
        </span>
        {modifierKey && (
          <div className="ml-auto hidden items-center font-medium text-[#777aaf] md:flex">
            <div className="mr-1">
              <kbd className="block w-6 rounded border-b-2 border-gray-300 bg-gradient-to-tl from-[#f5f5fA] to-[#d6d6e7]/60 shadow-[0_4px_11px_0_rgba(37,44,97,0.15),0_1px_3px_0_rgba(93,100,148,0.6)]">
                <span className="flex w-full items-center justify-center rounded border-l border-r border-t border-white py-0.5 leading-none">
                  <span className="block h-4">
                    <span className="text-[10px] tracking-[-1px]">{modifierKey}</span>
                  </span>
                </span>
              </kbd>
            </div>
            <kbd className="block w-6 rounded border-b-2 border-gray-300 bg-gradient-to-tl from-[#f5f5fA] to-[#d6d6e7]/60 shadow-[0_4px_11px_0_rgba(37,44,97,0.15),0_1px_3px_0_rgba(93,100,148,0.6)]">
              <span className="flex w-full items-center justify-center rounded border-l border-r border-t border-white py-0.5 leading-none">
                <span className="block h-4">
                  <span className="text-xs">K</span>
                </span>
              </span>
            </kbd>
          </div>
        )}
      </button>
      {isOpen &&
        createPortal(
          <DocSearchModal
            {...docSearchConfig}
            initialScrollY={window.scrollY}
            onClose={onClose}
            hitComponent={Hit}
            navigator={{
              navigate({ itemUrl }) {
                Router.push(itemUrl)
              },
            }}
            maxResultsPerGroup={HITS_PER_PAGE}
          />,
          document.body
        )}
    </>
  )
}
