import { getAllParentLinks, isLinkInChildren } from "@/utils/helpers"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"

import MenuItem from "./MenuItem"

export function Navigation({ navigation, main, className }) {
  const router = useRouter()

  const allAncestors = []
  let ancestor
  let section = navigation.find((section) =>
    section.links.find((link) => {
      if (link.href === router.pathname) {
        return true
      } else if (link.children && isLinkInChildren(link.children, router.pathname)) {
        ancestor = link
      }
      return false
    })
  )

  if (!section && ancestor) {
    getAllParentLinks(ancestor, router.pathname, allAncestors)
  }

  return (
    <nav className={clsx("text-base lg:text-sm", className)}>
      <ul role="list" className="pb-6">
        {main.map((section) => (
          <li key={section.title}>
            <Link
              href={section.href}
              className={clsx(
                "group mb-4 flex items-center font-medium lg:text-sm lg:leading-6",
                section.href === "/"
                  ? "font-semibold text-sky-500 before:bg-sky-500"
                  : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
              )}
            >
              <section.icon className="mr-4 h-6 w-6" />
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:border-slate-200"
            >
              {section.links.map((link, index) => (
                <MenuItem key={index} item={link} parents={allAncestors} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
