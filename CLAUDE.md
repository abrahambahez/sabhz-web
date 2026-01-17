# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## Architecture

This is an Astro-based blog with Spanish content focused on anthropology, philosophy, and technology.

### Content System

Content lives in `src/content/blog/` as Markdown files with frontmatter:
- `title`: Post title
- `createdAt`: Creation date (ISO string)
- `updatedAt`: Last update date (ISO string)
- `tags`: Either "Publicacion" or "Coleccion"
- `lang`: "es" or "en"

Content schema defined in `src/content/config.ts` using Zod validation.

### Routing

- `/` - Homepage showing most recent post
- `/archivo` - Archive listing all posts, split into "Publicaciones" and "Colecciones"
- `/[slug]` - Individual blog post pages (dynamic routes from content collection)
- `/rss.xml` - RSS feed with full content

### Layouts

Two main layouts:
- `Blog.astro` - Individual post layout with header, footer, toggle references button, and citation support
- `Archivo.astro` - Archive layout with two-column display

Both layouts use `src/styles/global.css` which includes ET Book font family (Tufte-style typography).

### Markdown Processing Pipeline

Configured in `astro.config.mjs`:

**Remark plugins** (operate on markdown AST):
- `remark-code-titles` - Add titles to code blocks
- `remark-sidenotes` - Convert footnotes to Tufte-style sidenotes
- `remark-toc` - Generate table of contents with "Contenido" heading

**Rehype plugins** (operate on HTML AST):
- `rehype-slug` - Add IDs to headings
- `add-classes.mjs` - Custom plugin that adds CSS classes to selected elements
- `rehype-citation` - Academic citations using Chicago style, references in `public/references.json`, Spanish locale in `public/locales-es-MX.xml`

### Citation System

The site includes academic citation support:
- Citations use Chicago style
- Bibliography source: `public/references.json`
- Locale configuration: `public/locales-es-MX.xml`
- Citations have `.citation` class
- References section toggleable via button in `Blog.astro` (only appears if citations exist)

### Custom Rehype Plugin

`add-classes.mjs` is a utility that adds CSS classes to elements matching a selector. Example usage: `[addClasses, { "h1,h2,h3": "title" }]` adds `title` class to all h1, h2, h3 elements.

### Page Behavior

- Homepage (`index.astro`) queries all blog posts, sorts by `createdAt` descending, renders the most recent
- Archive page sorts posts chronologically (newest first), displays formatted dates
- Individual posts use dynamic routing via `[...slug].astro` with `getStaticPaths()`

### Styling

Uses Tufte CSS-inspired design with ET Book font family loaded via `@font-face` declarations in `global.css`. Typography optimized for readability with old-style figures and responsive layout.
