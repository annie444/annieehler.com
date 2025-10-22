# AGENTS

1. Environment: Node.js >=18 with `engine-strict`; prefer `pnpm install`.
2. Local dev server: `pnpm dev`.
3. Build artifacts: `pnpm build`; preview with `pnpm preview`.
4. Type-check: `pnpm check` (runs `svelte-check`).
5. Lint gate: `pnpm lint` (Prettier check + ESLint).
6. Format everything via `pnpm format`.
7. Run all unit tests: `pnpm test` (Vitest `--run`).
8. Focus a single suite: `pnpm test:unit -- src/routes/page.svelte.spec.ts`.
9. Watch tests while iterating: `pnpm test:unit -- --watch`.
10. Use `<script lang="ts">`; TS config is `strict`, `allowJs`, and `checkJs`.
11. Imports: group node/external before `$lib` and relative modules; rely on SvelteKit aliases.
12. Naming: PascalCase components, camelCase exports, kebab-case route files.
13. Styling: Tailwind-first (`@import 'tailwindcss'`); utility order auto-sorted by Prettier plugin.
14. Formatting: 2 space indents, single quotes, 100 char width, no trailing commas.
15. Svelte + MDsveX (`.svelte`, `.svx`) live under `src/routes` and `src/lib`.
16. Keep reusable code in `$lib`; surface exports through `src/lib/index.ts`.
17. Handle errors with SvelteKit helpers (`error`, `redirect`, `fail`) and typed `load`/actions.
18. Avoid re-enabling ESLint `no-undef`; globals are provided in config.
19. Prefer pure functions and stores; log sparingly and clean up debug utilities.
20. No Cursor or Copilot rule files exist—treat this document as the source of truth.
