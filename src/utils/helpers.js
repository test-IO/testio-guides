export function getAllLinks(array) {
  const output = []
  array.forEach((item) => {
    if (item.children) {
      const { children, ...rest } = item
      output.push(rest)
      const childOutput = getAllLinks(children)
      output.push(...childOutput)
    } else {
      output.push(item)
    }
  })
  return output
}

export function isLinkInChildren(array, link) {
  let result = false
  for (const item of array) {
    if (item.href === link) {
      return true
    }
    if (item.children) {
      result = isLinkInChildren(item.children, link)
      if (result) {
        return result
      }
    }
  }
  return result
}

export function getAllParentLinks(ancestor, target, output) {
  for (const node of ancestor.children) {
    if (node.href === target) {
      output.unshift(ancestor.href)
      return true
    } else if (node.children) {
      const isParent = getAllParentLinks(node, target, output)
      if (isParent) {
        output.unshift(ancestor.href)
        return true
      }
    }
  }
  return false
}
