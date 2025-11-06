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
