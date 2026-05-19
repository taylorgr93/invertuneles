---
name: code-standard
description: Enforces project coding standards when creating or modifying code. Use when the user asks to build features, fix bugs, refactor, or review code quality in this Next.js project.
user-invocable: true
disable-model-invocation: false
---

# Code Standard — Invertuneles

Follow these standards strictly when creating or modifying code in this project.

## Language rules

- **All code in English**: identifiers, comments, log messages, error keys, type names, file names.
- **User-facing strings in translation files** (`locales/{en,es}/common.json`), never hardcoded in components. Reference by dot-notation key: `t("categories.greenhouses")`.

## TypeScript (strict mode)

- Never use `any`. Use `unknown` + type narrowing when the type is truly dynamic.
- Prefer `type` over `interface` for props and simple shapes. Use `interface` only when declaration merging or `extends` is needed.
- Export types from where they're defined; import via `@/types/...` or co-located path.
- Use the path alias `@/*` for imports from repo root. Relative imports for siblings in the same feature folder.
- Reuse page types from `types/page.ts` (`PageProps`, `PagePropsWithId`, `PagePropsWithSearchParams`) — never redefine `params: Promise<{ locale: string }>`.
- No `@ts-ignore` or `@ts-expect-error` without a linked issue.
- No unused imports or dead code.

## React & Next.js 15

- **Server components by default.** Only add `"use client"` when the component needs browser APIs, hooks, or event handlers.
- **Client component pattern**: suffix with `*Client.tsx`, pair with a server wrapper that loads translations and passes them as props:

  ```
  components/feature/MyFeature.tsx        <- server wrapper
  components/feature/MyFeatureClient.tsx   <- "use client"
  ```

- **Params are Promises** in Next.js 15. Unwrap with `use(params)` in sync components or `await params` in async ones.
- **Translations in server components**:

  ```tsx
  const translations: Dict = use(getTranslations(locale));
  const t = makeT(translations);
  ```

- **Translations in client components**: receive `translations: Dict` as prop from server wrapper. Never call `getTranslations` from a client component.
- For string arrays in translations, use `tArray(dict, path)` from `lib/tArray.ts`.
- All internal links must include the locale prefix: `/${locale}/path`.

## Component organization

- Group by page/feature: `components/{home,about,products,contact,navbar,footer,common}/`.
- Don't add exports to `components/index.ts` — import from specific file paths.
- One component = one responsibility. Extract sub-components into the same folder when a file exceeds ~150 lines.

## Styling (Tailwind CSS v4)

- Use Tailwind utility classes. No inline `style` unless truly necessary for dynamic values.
- Brand color tokens: `brand-carrot`, `brand-lime`, `brand-forest`, `brand-parchment`, `brand-olive`, `brand-noir`, `brand-cocoa`, `brand-earth`, `brand-mist`, `brand-teal`.
- Mobile-first responsive: base → `sm:` → `md:` → `lg:` → `xl:`.
- `next/image`: always provide `alt`, `sizes`, and use `fill` with a sized container or explicit `width`/`height`.

## Data layer

- Products come from `mocks/products/getProducts.ts`. Access via `useProducts(locale)` (server-component only).
- Category type is a closed union in `types/ProductDTO.ts`. Adding a category requires updating: the union, `ALLOWED`/`categoryKeys` arrays in both product pages, `categories.*` translations, and mock data.

## API routes

- Handlers in `app/api/`. Use `NextRequest`/`NextResponse`.
- Validate all input at the boundary. Return proper HTTP status codes + JSON error bodies.
- Secrets in env vars — never commit `.env`.

## SEO

- New pages must have `generateMetadata` with `es`/`en` title+description maps.
- Add new routes to `app/sitemap.ts`.
- Metadata base URL: `https://invertuneles.com`.

## Quality checklist

Before delivering code, verify:

1. `npm run lint` passes with no errors.
2. `npm run build` succeeds — no TypeScript or build errors.
3. No hardcoded user-facing strings — all text uses translation keys.
4. No `any` types.
5. No unused imports or dead code.
6. Images use `next/image` with `alt` and `sizes`.
7. Links include `/${locale}/` prefix.
8. New pages have `generateMetadata` and are in `sitemap.ts`.
9. No security issues: no `dangerouslySetInnerHTML` with user data, no exposed secrets.
10. No comments explaining WHAT — only WHY when non-obvious.
