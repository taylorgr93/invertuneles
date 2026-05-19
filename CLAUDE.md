# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Conventions

- **Communicate with the user in Spanish.** User-facing chat responses must be written in Spanish.
- **All code in English.** Comments, variable and function names, log messages, and error keys must be written in English regardless of UI locale.
- **User-facing error messages live in translation dictionaries, not in code.** Spanish copy goes in `share/es.json`; English copy goes in `share/en.json`. Code references these messages by key (e.g. `errors.invalidEmail`) — never hardcode Spanish or English strings at the call site.

## Commands

- `npm run dev` — Start dev server with Turbopack (`next dev --turbopack`)
- `npm run build` — Production build
- `npm start` — Run production server
- `npm run lint` — Run ESLint (`next/core-web-vitals` + `next/typescript`)

There is no test setup in this project. Don't fabricate test commands.

## Stack

Next.js 15 (App Router) + React 19 + TypeScript (strict) + Tailwind CSS v4. Path alias `@/*` → repo root (see `tsconfig.json`). Turbopack is used for dev.

## Architecture

### Locale-first routing

All user-facing pages live under `app/[locale]/`. `middleware.ts` redirects bare `/` to `/${locale}` using the `Accept-Language` header, defaulting to `es` (only `en` and `es` are supported). Links elsewhere in the app must include the locale prefix (e.g. `/${locale}/products/...`).

### Custom i18n (not next-intl)

Translations live as flat JSON files at `locales/{en,es}/common.json`. There is no i18n library — three small helpers in `lib/` implement the pattern:

- `getTranslations(locale, ns?)` — dynamic-imports the JSON dictionary. Returns a `Dict` (serializable).
- `makeT(dict)` — returns a `t(key)` function that resolves dot-notation keys (e.g. `"homeHighlight.kicker"`). Missing keys fall back to the key string itself.
- `tArray(dict, path)` — extracts a string array at a dotted path; returns `[]` if the path doesn't exist.

Server components consume these via React's `use()` hook:

```tsx
const translations: Dict = use(getTranslations(locale));
const t = makeT(translations);
```

Client components receive translations as props from a server wrapper (see `components/navbar/Navbar.tsx` → `NavbarClient.tsx` and `components/common/WelcomeGate.tsx` → `WelcomeGateClient.tsx` for the pattern). Don't call `getTranslations` from client components.

### Next.js 15 async params

Page/layout `params` are `Promise<...>`. Always unwrap with `use(params)` in sync components or `await params` in async functions. Reusable types are in `types/page.ts`: `PageProps`, `PagePropsWithId`, `PagePropsWithSearchParams`. Use them instead of redefining the shape.

### Metadata & SEO

- Root locale metadata is set in `app/[locale]/layout.tsx` (includes Organization JSON-LD, OG/Twitter, `hreflang` alternates for `es-MX`/`en-US`).
- Per-page metadata uses `generateMetadata({ params })` with hardcoded `es`/`en` title+description maps. Follow this same pattern when adding new pages, and add the route to `app/sitemap.ts`.
- Metadata base URL is hardcoded to `https://invertuneles.com`.

### Products

Products are currently served from a mock file, not a CMS or DB:

- Source of truth: `mocks/products/getProducts.ts` (async, simulates 300ms latency, returns localized `ProductDTO[]`).
- Access via the `useProducts(locale)` hook in `hooks/useProducts.ts` (uses React `use()` — server-component only despite the `use*` prefix).
- Shape: `types/ProductDTO.ts`. Allowed categories are a closed union: `"accessories" | "greenhouses" | "tights" | "substrates" | "plastic-films"`. The `[category]` page validates the slug against this union and calls `notFound()` on mismatch.
- If you add a category, update the union in `ProductDTO.ts`, the `ALLOWED`/`categoryKeys` arrays in `app/[locale]/products/page.tsx` and `app/[locale]/products/[category]/page.tsx`, the translations under `categories.*`, and the mock data.

### Contact forms

Two POST routes send mail via nodemailer:

- `app/api/contact/route.ts` — general contact form (name/email/message).
- `app/api/inquiry/route.ts` — custom-project inquiry (crop/location/name/phone/email).

Both read SMTP config from env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (and `MAIL_TO` is referenced but not currently used — the handlers send to the submitter's email, which is a confirmation-only flow rather than a lead-notification flow). The transport uses STARTTLS (`secure: false`, `requireTLS: true`) and `rejectUnauthorized: false`.

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. Brand colors live under `theme.extend.colors.brand` in `tailwind.config.js` (`carrot`, `lime`, `forest`, `parchment`, `olive`, `noir`, `cocoa`, `earth`, `mist`, `teal`). Note: the config also references a `plugin` symbol that isn't imported at the top of the file — the `.scrollbar-hide` utilities there will fail to load as-is; fix by importing `tailwindcss/plugin` if you touch that area.

### Component organization

`components/` is grouped by page/feature (`home/`, `about/`, `products/`, `contact/`, `navbar/`, `footer/`, `common/`). The `components/index.ts` barrel only re-exports `Navbar` — don't rely on it for other components; import from the specific path.

Client components are suffixed `*Client.tsx` and paired with a server wrapper that loads translations and forwards them as props. Preserve this split when adding interactive UI.
