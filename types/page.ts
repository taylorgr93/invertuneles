// types/page.ts

/**
 * Props for Next.js 15+ pages with dynamic locale routing
 */
export type PageProps = {
  params: Promise<{ locale: string }>;
};

/**
 * Props for pages with additional dynamic segments
 * Example: app/[locale]/products/[id]/page.tsx
 */
export type PagePropsWithId = {
  params: Promise<{
    locale: string;
    id: string;
  }>;
};

/**
 * Props for pages with search params
 * Example: app/[locale]/products/page.tsx?category=berries
 */
export type PagePropsWithSearchParams = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
