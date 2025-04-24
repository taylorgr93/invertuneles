// lib/useTranslation.ts

export async function getTranslations(locale: string, namespace = "common") {
  const translations = await import(
    `../locales/${locale}/${namespace}.json`
  ).then((mod) => mod.default);

  // Soporte para claves anidadas: "pages.contact" => translations.pages.contact
  const t = (key: string): string => {
    return (
      key.split(".").reduce((obj, segment) => {
        return obj?.[segment];
      }, translations as any) || key
    );
  };

  return { t };
}
