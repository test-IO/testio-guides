# Documentation Improvements and Updates

## Summary
This PR includes comprehensive improvements to the Test IO Guides documentation, including navigation restructuring, content updates, new features, and UI enhancements.

## Major Changes

### 1. Navigation Structure Improvements
- **Reorganized sidebar navigation**: Moved "API Reference" to the top, followed by "MCP Server", then "Jira Add-Ons", "Notion Integration", and "Zapier App"
- **Removed duplicate navigation items**: Removed top navigation items from left sidebar that were duplicated with the header navigation
- **Consistent capitalization**: Applied title case (capitalize first letter of each word) to all menu items throughout the navigation
- **Renamed sections**: Changed "Jira Server (Data Center) Add-On" to "Jira Data Center" for consistency across all documentation

### 2. Jira Documentation Updates
- **Renamed "Plugin" to "Add-On"**: Updated all references throughout Jira Cloud and Server documentation
- **Consolidated Jira sections**: Grouped all Jira-related content under "Jira Add-Ons" section
- **Updated Jira Cloud overview**: Restructured and updated the Jira Cloud Add-On overview page based on official documentation, making it more technical and concise
- **Consistent naming**: Updated all "Jira Server" references to "Jira Data Center" across all content pages

### 3. MCP Server Section
- **New section added**: Created MCP Server section in navigation with overview page
- **Coming Soon protection**: Implemented blur effect and overlay to protect "Coming Soon" content while keeping it somewhat visible
- **Custom Markdoc tag**: Created `mcp-blur` tag for proper markdown processing with blur effects

### 4. Hero Banner Enhancements
- **Interactive code snippet**: Added multi-language code sample component with tabs (JavaScript, Python, Ruby, Bash, PHP, Go)
- **Visual improvements**: 
  - Applied dark blue linear gradient background (slate-950 to slate-900)
  - Added blue glow, thin border, and top/bottom highlights
  - Improved window styling with traffic lights and tab design
- **Full width**: Made snippet element full width
- **Layout stability**: Fixed layout shifts when switching between language tabs

### 5. API Documentation
- **New API Reference section**: Added complete API documentation with 14 endpoints
- **Getting Started guide**: Created comprehensive getting started guide for API
- **Example requests**: Added example requests and responses to API endpoints
- **Cross-references**: Added prerequisite notes and cross-references between API resources

### 6. Search Functionality
- **Graceful degradation**: Added check for missing DocSearch environment variables
- **User feedback**: Search button is hidden when DocSearch is not configured, with console warning

### 7. Anchor Links and Navigation
- **Fixed anchor links**: Implemented proper anchor link navigation for homepage sections
- **Scroll behavior**: Added smooth scrolling with proper header offset using CSS `scroll-padding-top`
- **Markdoc heading IDs**: Enhanced Markdoc to support custom heading IDs with `{#id}` syntax

### 8. UI/UX Improvements
- **Custom scrollbars**: Applied consistent dark grey scrollbar styling to sidebars matching hero snippet
- **Homepage quick links**: Added navigation cards for major topics
- **Changelog updates**: Updated changelog with recent improvements

## Technical Changes

### New Files
- `src/components/McpBlur.jsx` - Component for MCP Server blur effect
- `src/styles/mcp-blur.css` - CSS for MCP Server content protection
- `src/pages/docs/api/*.md` - Complete API documentation (14 files)
- `src/pages/docs/mcp_server/overview.md` - MCP Server overview page

### Modified Files
- `src/data/navigation.js` - Complete navigation restructure
- `src/components/Hero.jsx` - Added interactive code snippet component
- `src/components/Layout.jsx` - Added top navigation, anchor link support
- `markdoc/tags.js` - Added `mcp-blur` custom tag
- `markdoc/nodes.js` - Enhanced heading node to support custom IDs
- Multiple Jira documentation files - Renamed "Plugin" to "Add-On", updated references

### Removed Files
- `src/pages/docs/integrations/jira_plugins.md` - Content merged into new structure

## Testing Notes
- All navigation links verified
- Anchor links tested on homepage
- Code snippet tabs tested for layout stability
- Search functionality tested with and without environment variables
- MCP Server blur effect verified

## Breaking Changes
None - all changes are backward compatible.

