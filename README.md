# Writing Portfolio

A personal writing portfolio built with [Astro](https://astro.build). Clean layout, pastel color palette, Markdown-powered content.

## Getting Started

```bash
npm install
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production
npm run preview    # Preview production build
```

## Adding Content

### New writing

Create a Markdown file in `src/content/writings/`:

```markdown
---
title: "Your Title"
description: "A short description."
date: 2026-03-01
tags: ["tag1", "tag2"]
featured: false
---

Your content here...
```

### New links

Add entries to `src/content/links/links.json`:

```json
{
  "title": "Site Name",
  "url": "https://example.com",
  "description": "Why it's worth visiting.",
  "category": "reading"
}
```

Categories: `reading`, `tools`, `inspiration`, `general`

## Deploying

### Cloudflare Pages

1. Connect your GitHub repo in the Cloudflare dashboard
2. Set build command: `npm run build`
3. Set output directory: `dist`

### GitHub Pages

1. Uncomment the `site` and `base` options in `astro.config.mjs`
2. Add a GitHub Actions workflow or use the Astro GitHub Pages guide

## Customizing

- **Colors**: Edit CSS variables in `src/styles/global.css`
- **Site title**: Update the `<a>` in `src/layouts/BaseLayout.astro`
- **Navigation**: Edit the `navLinks` array in `BaseLayout.astro`
