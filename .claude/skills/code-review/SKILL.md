---
name: code-review
description: Reviews recently generated or modified code against project standards. Use when the user asks to review code, check quality, or validate changes before committing.
user-invocable: true
disable-model-invocation: false
---

# Code Review — Invertuneles

You are a strict code reviewer for this project. Analyze the recent changes and produce a structured review against the project standards.

## What to review

!`git diff HEAD`
!`git diff --cached`
!`git status`

If there are no uncommitted changes, review the last commit instead:

!`git diff HEAD~1`

## Review categories

Evaluate every changed file against these categories. Only report findings — skip categories with no issues.

### 1. TypeScript & type safety

- [ ] No `any` types — must use proper types or `unknown` + narrowing
- [ ] No `@ts-ignore` or `@ts-expect-error` without justification
- [ ] Types imported from their source (`@/types/...`), not redefined
- [ ] Page components reuse types from `types/page.ts` (`PageProps`, `PagePropsWithId`, `PagePropsWithSearchParams`)
- [ ] No unused imports or dead code
- [ ] `interface` only when `extends` or declaration merging is needed; `type` otherwise

### 2. React & Next.js 15 patterns

- [ ] Server components by default — `"use client"` only when necessary
- [ ] Client components follow `*Client.tsx` naming + server wrapper pattern
- [ ] `params` unwrapped correctly: `use(params)` in sync, `await params` in async
- [ ] Server translations: `use(getTranslations(locale))` + `makeT(translations)`
- [ ] Client translations: received as `translations: Dict` prop, never calling `getTranslations`
- [ ] All links include `/${locale}/` prefix

### 3. i18n & localization

- [ ] No hardcoded user-facing strings in components
- [ ] All UI text uses translation keys via `t("key.path")`
- [ ] New keys added to both `locales/es/common.json` and `locales/en/common.json`
- [ ] Translation keys follow existing dot-notation conventions

### 4. Styling & UI

- [ ] Tailwind utility classes used — no inline `style` unless dynamic values require it
- [ ] Brand colors use `brand-*` tokens, not arbitrary hex values
- [ ] Responsive design is mobile-first: base → `sm:` → `md:` → `lg:`
- [ ] `next/image` used with `alt`, `sizes`, and proper `fill` or `width`/`height`

### 5. Security

- [ ] No `dangerouslySetInnerHTML` with user-supplied data
- [ ] No secrets or credentials in code (`.env` vars only)
- [ ] API routes validate all input at the boundary
- [ ] No XSS, injection, or OWASP top-10 vulnerabilities

### 6. SEO & metadata

- [ ] New pages have `generateMetadata` with `es`/`en` title+description
- [ ] New routes added to `app/sitemap.ts`

### 7. Code quality

- [ ] No comments explaining WHAT — only WHY when non-obvious
- [ ] Components follow single-responsibility principle
- [ ] Components grouped in correct feature folder under `components/`
- [ ] No exports added to `components/index.ts` barrel
- [ ] Imports use `@/*` alias from repo root; relative for siblings only

## Output format

Structure your review as follows:

```
## Review summary

**Files reviewed:** <count>
**Severity:** 🟢 Clean | 🟡 Minor issues | 🔴 Needs fixes

## Findings

### [severity-emoji] <category> — <file:line>
<description of the issue>
**Suggested fix:** <concrete fix or code snippet>

...repeat for each finding...

## Passing checks
<list categories with no issues>
```

Severity levels:
- 🔴 **Must fix** — breaks standards, introduces bugs, or creates security risks
- 🟡 **Should fix** — deviates from conventions, reduces maintainability
- 🟢 **Suggestion** — minor improvement, not blocking

## Rules

- Be specific: reference file paths and line numbers.
- Provide concrete fixes, not vague advice.
- Don't nitpick formatting — `npm run lint` handles that.
- Don't flag things that are already correct just to pad the review.
- If the code is clean, say so briefly and stop.
- Run `npm run lint` and report any errors found.
