import React from "react"

function computeGridClass(columns) {
  const colNum = Math.max(1, Math.min(parseInt(columns || 1, 10) || 1, 3))
  // Always 1 column on mobile, 2 on small screens, up to `colNum` on large
  const base = "grid grid-cols-1 gap-x-6 gap-y-1"
  const sm = "sm:grid-cols-2"
  const lg = colNum === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
  return `${base} ${sm} ${lg}`
}

export function GridList({ columns = 1, children }) {
  const className = computeGridClass(columns)
  const child = Array.isArray(children) ? children[0] : children
  if (!child) return null

  // If the child is a <ul>, add grid classes to it; otherwise wrap
  if (React.isValidElement(child) && child.type === "ul") {
    const existing = child.props.className ? `${child.props.className} ` : ""
    return React.cloneElement(child, { className: `${existing}${className} list-none m-0 p-0` })
  }
  return <ul className={`${className} list-none m-0 p-0`}>{children}</ul>
}

export default GridList


