export function McpBlur({ children }) {
  return (
    <div style={{ position: "relative", minHeight: "600px" }}>
      <div data-mcp-content>
        {children}
      </div>
      <div data-mcp-overlay>
        <div style={{ fontSize: "2rem", fontWeight: 700, color: "rgb(56, 189, 248)", marginBottom: "0.5rem", textShadow: "0 0 20px rgba(56, 189, 248, 0.5)" }}>
          Coming Soon
        </div>
        <div style={{ fontSize: "1rem", color: "rgb(148, 163, 184)", marginTop: "0.5rem" }}>
          MCP Server documentation is currently under development
        </div>
      </div>
    </div>
  )
}

