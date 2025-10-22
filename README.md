# Analetta Ehler — Personal Website

A personal website built with **SvelteKit** to serve as my **curriculum vitae**, **blog**, and **portfolio**.  
This project is both a home for my professional work and an ongoing experiment in web architecture, accessibility, and design.

---

## Overview

This site has three core purposes:

1. **CV / Professional Profile** — A structured and easily navigable résumé outlining my academic background, professional experience, and technical skills.
2. **Blog** — A place for essays, technical write-ups, and reflections on topics like software engineering, distributed systems, embedded Rust, and open source.
3. **Portfolio** — Showcases selected projects, talks, and open-source contributions, with links to repositories and demos when available.

---

## Tech Stack

| Layer              | Technology                                                           | Description                                                     |
| ------------------ | -------------------------------------------------------------------- | --------------------------------------------------------------- |
| Frontend Framework | [SvelteKit](https://kit.svelte.dev/)                                 | Application framework with file-based routing and built-in SSR. |
| Styling            | [TailwindCSS](https://tailwindcss.com/)                              | Utility-first CSS framework for responsive, accessible design.  |
| Markdown / Content | [MDsveX](https://mdsvex.pngwn.io/)                                   | Markdown-based blog and documentation engine for Svelte.        |
| Deployment         | [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) | Seamless CI/CD for static and hybrid-rendered apps.             |

Optional integrations:

- **RSS feed** for blog posts
- **JSON Resume export** for machine-readable CVs
- **Open Graph / SEO metadata** for social sharing
- **Analytics** (Plausible, Fathom, or self-hosted)

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- pnpm or npm

### Installation

```bash
git clone https://github.com/annie444/personal-website.git
cd personal-website
pnpm install
pnpm dev
```

Visit http://localhost:5173 to view the site locally.

### Build for Production

```bash
pnpm build
pnpm preview
```

## Project Structure

```bash
src/
├── routes/           # SvelteKit routes (pages, API endpoints)
├── lib/              # Reusable components and utilities
├── content/
│   ├── blog/         # Markdown or MDsveX blog posts
│   └── projects/     # Portfolio item metadata
├── styles/           # Tailwind and global CSS
└── data/             # Structured CV data (JSON or YAML)
```

## Philosophy

The site is designed to be minimal, fast, and honest—a single source of truth for my work and ideas.
It avoids unnecessary dependencies and focuses on clarity, accessibility, and long-term maintainability.

## Links

- Website: https://annieehler.com
- GitHub: https://github.com/annie444
- LinkedIn: https://linkedin.com/in/annie444

## License

All original code is released under the MIT License.
All written content (blog posts, essays, etc.) is © Analetta Ehler, unless otherwise noted.

> Built with SvelteKit, Tailwind, and a bit of curiosity.
