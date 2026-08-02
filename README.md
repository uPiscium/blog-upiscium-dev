# blog-upiscium-dev

CLI/terminal-inspired portfolio site built with Astro.

## Night-sky portfolio prototype

This branch contains an interactive design-approval prototype for `upiscium.dev`.
Home, About, Works, Blog, Contact, work details, article layout, search, responsive
navigation, and reduced-motion behavior are represented with provisional content.

All project descriptions, article copy, dates, contact details, and image frames marked
as prototype content must be reviewed and replaced after design approval. Production
search indexing, analytics, feeds, generated OGP assets, CMS, and deployment
infrastructure are intentionally out of scope.

## Getting Started

```bash
pnpm install
pnpm dev --host 0.0.0.0
```

Open `http://localhost:4321` in your browser.

## Content

- Blog posts live in `src/content/blog/*.md`
- Blog routes are generated from Astro Content Collections
- Draft posts can be hidden with `draft: true`

## Markdown

Markdown posts support GitHub-flavored Markdown via `remark-gfm`.

Supported examples:

- headings
- lists and task lists
- blockquotes
- tables
- code blocks
- inline code
- links

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
```
