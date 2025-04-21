// lib/useTranslation.ts
export async function useTranslation(locale: string, namespace = "common") {
  const translations = await import(
    `../locales/${locale}/${namespace}.json`
  ).then((mod) => mod.default);

  return {
    t: (key: string) => translations[key] || key,
  };
}
