import { ChevronRightIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function MenuItem({ item, parents }) {
  const [open, setOpen] = useState(false)
  let router = useRouter()

  useEffect(() => {
    if (parents.includes(item.href)) {
      setOpen(true)
    }
  }, [])

  useEffect(() => {
    if (item.href === router.pathname) {
      setOpen(true)
    }
  }, [router.pathname])

  const handlerClick = (event) => {
    const chevron = event.target.closest("svg")
    if (chevron) {
      event.preventDefault()
      setOpen(!open)
    } else if (item.children && !open) {
      setOpen(!open)
    }
  }

  return (
    <li key={item.href}>
      <Link
        href={item.href}
        onClick={handlerClick}
        className={clsx(
          "relative flex w-full items-center justify-between pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
          item.href === router.pathname
            ? "font-semibold text-sky-500 before:bg-sky-500"
            : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
        )}
        aria-selected={item.href === router.pathname}
      >
        {item.title}
        {item.children && (
          <ChevronRightIcon
            className={clsx("inline-block h-4 w-4 shrink-0", open ? "rotate-90" : "rotate-0")}
          />
        )}
      </Link>
      {item.children && (
        <ul
          role="list"
          className={clsx(
            "ml-3.5 mt-1 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:border-slate-200",
            open ? "h-auto overflow-visible" : "h-0 overflow-hidden"
          )}
        >
          {item.children.map((child, index) => (
            <MenuItem key={index} item={child} parents={parents} />
          ))}
        </ul>
      )}
    </li>
  )
}
