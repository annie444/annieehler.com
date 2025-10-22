# Copilot Instructions

1. Target Node.js >=18 with `engine-strict`; prefer `pnpm install`.
2. Use `pnpm dev` for local development and `pnpm build` + `pnpm preview` for release checks.
3. Keep type safety via `pnpm check`, which runs `svelte-check` against `tsconfig.json`.
4. Enforce style with `pnpm lint`; apply formatting through `pnpm format` (Prettier + Svelte/Tailwind plugins).
5. Run Vitest suites with `pnpm test`; narrow scope using `pnpm test:unit -- <path>` or watch via `pnpm test:unit -- --watch`.
6. Prefer `<script lang="ts">` blocks; the project uses TypeScript `strict`, `allowJs`, and `checkJs` options.
7. Order imports as node/external modules, then `$lib`, then relative paths; rely on SvelteKit aliases.
8. Maintain naming: PascalCase components, camelCase exports/utilities, kebab-case route files.
9. Styling is Tailwind-first via `@import 'tailwindcss'`; let Prettier's Tailwind plugin sort utility classes.
10. Formatting defaults: tabs, single quotes, 100 character width, no trailing commas.
11. Share Svelte/MDsveX code between `src/routes` and `src/lib`; expose reusable pieces through `src/lib/index.ts`.
12. Handle errors with SvelteKit primitives (`error`, `redirect`, `fail`) and typed `load`/actions.
13. Avoid noisy logging; prefer pure helpers and writable stores when stateful logic is required.
14. Do not re-enable ESLint `no-undef`; globals are provided in the shared config.
15. Treat this file alongside `AGENTS.md` as the authoritative ruleset; no Cursor rules exist.
