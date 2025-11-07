import { getAllParentLinks } from "@/utils/helpers"
import { findCurrentSection } from "@/utils/navigation"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"

import MenuItem from "./MenuItem"

export function Navigation({ navigation, main, className }) {
  const router = useRouter()

  const allAncestors = []
  const { section, childSection } = findCurrentSection(navigation, router.pathname)

  if (!section && childSection) {
    getAllParentLinks(childSection, router.pathname, allAncestors)
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
