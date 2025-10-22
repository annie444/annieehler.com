# Analetta Ehler — Personal Website

A personal website built with **SvelteKit** and tailored for Cloudflare Workers. This scaffold doubles as a
résumé, portfolio, and writing lab. Most sections ship as informative placeholders so you can drop in your
voice, data pipelines, and visuals when ready.

---

## Project Vision

- **Story-first**: Highlight ongoing experiments, generous documentation, and edge-first engineering practices.
- **Composable**: Routes lean on reusable components under `src/lib` so you can slot in MDsveX, CMS feeds, or API data.
- **Edge-aware**: Adapter, server helpers, and API stubs assume Cloudflare Workers deployment.
- **Continuously evolving**: README, tests, and TODO callouts act as a roadmap for future automation and content.

---

## Architecture Blueprint

- **Framework**: SvelteKit 2 + Svelte 5 runes.
- **Styling**: Tailwind CSS via the v4 preview (`@tailwindcss/vite`). Utility order is auto-managed by Prettier.
- **Content source**: `src/lib/content/site.ts` centralises navigation, hero copy, CV data, blog metadata, Cloudflare bindings, and contact details.
- **Components**: The `src/lib/components` tree houses layout shells, section patterns, project cards, and now/contact primitives.
- **Routing**:
  - `/` — landing page with hero, highlight stats, featured projects, and writing feed.
  - `/cv` — CV layout with positioning statement, experience, education, and skills.
  - `/projects` — grid of projects with placeholders for future case studies.
  - `/blog` — blog index; `/blog/[slug]` renders individual posts driven by the `findPostBySlug` helper.
  - `/now` — living changelog that surfaces current experiments and focus areas.
  - `/contact` — intake overview with prepared channels and TODOs for future automation.
  - `/api/edge-preview` — Cloudflare-focused JSON stub illustrating how to surface binding metadata.

### Directory Map

```
src/
├─ routes/
│  ├─ +layout.svelte / +layout.ts      # Global chrome, SEO, Cloudflare analytics hook
│  ├─ +page.svelte                     # Landing page blueprint
│  ├─ cv/ +page.svelte                 # Curriculum vitae scaffold
│  ├─ projects/ +page.svelte           # Projects overview
│  ├─ blog/ +page.svelte               # Blog index
│  │         └─ [slug]/                # Blog detail pair (+page.ts / +page.svelte)
│  ├─ now/ +page.svelte                # Now / changelog page
│  ├─ contact/ +page.svelte            # Contact and intake
│  └─ api/edge-preview/+server.ts      # Workers-ready preview endpoint stub
├─ lib/
│  ├─ components/                      # Layout + section primitives
│  └─ content/site.ts                  # Central content + Cloudflare binding metadata
└─ lib/server/cloudflare.ts            # Strongly-typed bindings + helper utilities
```

---

## Content Blueprint

- **`siteMeta`**: Name, tagline, descriptions, and social handles. Update email, social, and SEO copy in one place.
- **`hero` & `highlightStats`**: Landing page data for hero copy and metric cards.
- **`experience`, `education`, `skills`, `cvHighlights`**: Feeds CV page and can later be hydrated from KV/D1.
- **`projects`**: Card metadata, status badges, and CTA links that power the `/projects` grid.
- **`blogPosts`**: Interim store until MDsveX content lands. Each entry is HTML-rich for quick prototyping.
- **`contactChannels`**: Configures the contact grid and can be synced with Cloudflare Queues later.
- **`nowUpdate`**: Supplies the `/now` changelog layout.
- **`cloudflareBindings`**: Documents Workers resources you intend to provision—KV, D1, Queues, and R2—with TODO hints for `wrangler.toml`.

---

## Cloudflare Deployment Notes

1. **Adapter**: `@sveltejs/adapter-cloudflare` is preconfigured in `svelte.config.js`.
2. **Wrangler config**: Create `wrangler.toml` with bindings matching `cloudflareBindings`:

   ```toml
   name = "annieehler-site"
   pages_build_output_dir = "build"

   [[kv_namespaces]]
   binding = "KV_SITE_CACHE"
   id = "<replace-with-namespace-id>"

   [[d1_databases]]
   binding = "D1_CONTENT"
   database_name = "annieehler-content"
   database_id = "<replace-with-d1-id>"

   [[queues.producers]]
   binding = "QUEUE_WEBHOOKS"
   queue = "annieehler-contact"

   [[r2_buckets]]
   binding = "R2_ARCHIVE"
   bucket_name = "annieehler-assets"
   ```

3. **Analytics**: Provide `VITE_CF_WEB_ANALYTICS_TOKEN` to embed the Cloudflare beacon from `+layout.svelte`.
4. **Preview API**: `/api/edge-preview` returns binding state so you can surface environment metadata in dashboards.
5. **Durable Objects / AI**: Extend `CloudflareBindings` and `createEdgePreviewPayload` when new services come online.

---

## CI/CD Outline (Optional)

- **Lint & format**: `pnpm lint` (Prettier check + ESLint).
- **Type safety**: `pnpm check` (SvelteKit sync + `svelte-check`).
- **Unit/UI tests**: `pnpm test` (Vitest browser runner).
- **Build**: `pnpm build` (Cloudflare adapter output).
- Integrate with GitHub Actions (see `.github/workflows/opencode.yml`) or Cloudflare Pages CI.
- Publish Wrangler deploy logs + analytics snapshots to `/now` or `/api/edge-preview`.

---

## Local Development

```bash
pnpm install
pnpm dev
```

Visit <http://localhost:5173> and iterate. Tailwind classes auto-sort via Prettier.

To build locally:

```bash
pnpm build
pnpm preview
```

---

## Testing & Quality Gates

- `pnpm test` — Runs the Vitest browser suite hitting all scaffolded pages and the preview API.
- `pnpm lint` — Ensures consistent formatting and lint rules.
- `pnpm check` — Type-checks Svelte components and Kit endpoints.

Add Playwright or Worker integration tests once the contact form, KV caching, or queue processing ships.

---

## Next Steps

- Replace placeholder copy with real content and visuals.
- Introduce MDsveX posts under `src/routes/blog` or sync from a headless CMS.
- Wire Cloudflare queues to the contact form and persist CMS data in KV or D1.
- Publish wrangler workflows for staged deploys, analytics archiving, and preview URLs surfaced in the `/now` page.
- Embed project case studies and dynamic résumé exports fed by edge storage.

> Built with SvelteKit, Tailwind, and curiosity for edge-native storytelling.
