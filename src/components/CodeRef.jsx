import { Icon } from "@/components/Icon"
import copy from "copy-to-clipboard"
import { useEffect, useState } from "react"
import { Prism as ReactSyntaxHighlighter } from "react-syntax-highlighter"
import { useSyntaxHighlighterStyle } from "@/hooks/useSyntaxHighlighterStyle"

export function CodeRef({ children, language, showLineNumbers = true }) {
  const [copied, setCopied] = useState(false)
  const style = useSyntaxHighlighterStyle()

  // Turn React element children into string
  let code = ""
  if (children) {
    if (typeof children === "string") {
      code = children
    } else if (Array.isArray(children)) {
      code = children.map((child) => child.props.children).join("\n")
    } else {
      code = children.props.children
    }
  }

  // remove trailing newline
  code = code.replace(/\n$/, "")

  useEffect(() => {
    if (copied) {
      copy(code)
      const to = setTimeout(setCopied, 1000, false)
      return () => clearTimeout(to)
    }
  }, [copied, code])

  const lines = code.split("\n").filter(Boolean)

  return (
    <div className="code" aria-live="polite">
      <ReactSyntaxHighlighter language={language} style={style} showLineNumbers={showLineNumbers}>
        {code}
      </ReactSyntaxHighlighter>
      <button onClick={() => setCopied(true)}>
        <Icon icon={copied ? "copied" : "copy"} />
      </button>
      <style>
        {`
        .code {
          position: relative;
        }
        .code button {
          appearance: none;
          position: absolute;
          color: inherit;
          background: var(--code-background);
          top: ${lines.length === 1 ? "11px" : "12px"};
          right: 11px;
          border-radius: 4px;
          border: none;
          font-size: 15px;
          width: 1.5em;
          height: 1.5em;
        }
      `}
      </style>
    </div>
  )
}

export default CodeRef
