# Search Implementation Options

## Current Status
The site currently uses **Algolia DocSearch** which requires:
- `NEXT_PUBLIC_DOCSEARCH_APP_ID`
- `NEXT_PUBLIC_DOCSEARCH_API_KEY`
- `NEXT_PUBLIC_DOCSEARCH_INDEX_NAME`

If these are not set, the search button is hidden.

## Option 1: Set Up Algolia DocSearch (Recommended for Production)

### Steps:
1. **Apply for DocSearch** (Free for open-source/public docs):
   - Go to: https://docsearch.algolia.com/apply/
   - Submit your site URL: `https://guides.test.io` (or your domain)
   - Wait for approval (usually 1-2 weeks)

2. **Once approved**, you'll receive:
   - App ID
   - API Key
   - Index Name

3. **Set environment variables**:
   ```bash
   NEXT_PUBLIC_DOCSEARCH_APP_ID=your_app_id
   NEXT_PUBLIC_DOCSEARCH_API_KEY=your_api_key
   NEXT_PUBLIC_DOCSEARCH_INDEX_NAME=your_index_name
   ```

### Pros:
- ✅ Fast, hosted search
- ✅ Great UX with autocomplete
- ✅ Free for public documentation
- ✅ Automatic indexing
- ✅ Handles large documentation sets well

### Cons:
- ❌ Requires approval process
- ❌ Not available immediately
- ❌ Requires external service

## Option 2: Client-Side Search (Alternative)

### Implementation Options:

#### A. Fuse.js (Simple, Fast)
- Lightweight fuzzy search
- No external dependencies
- Works entirely client-side
- Good for up to ~1000 documents

#### B. Lunr.js (More Features)
- Full-text search with stemming
- Similar to Elasticsearch
- Client-side only
- Better for larger documentation

#### C. FlexSearch (Fastest)
- Very fast client-side search
- Supports multiple languages
- Good performance even with large datasets

### Implementation Approach:
1. Build search index at build time from:
   - Navigation structure (`src/data/navigation.js`)
   - Page titles and descriptions (from frontmatter)
   - Headings (from table of contents)

2. Create a simple search component that:
   - Searches through the index
   - Shows results with titles, descriptions, and paths
   - Navigates to selected results

### Pros:
- ✅ Works immediately, no setup needed
- ✅ No external dependencies
- ✅ Privacy-friendly (all client-side)
- ✅ Works offline

### Cons:
- ❌ Requires building search index
- ❌ May be slower for very large docs
- ❌ More implementation work

## Recommendation

**For immediate use**: Implement client-side search with Fuse.js
**For production**: Set up Algolia DocSearch for better performance and UX

Would you like me to implement the client-side search alternative?


