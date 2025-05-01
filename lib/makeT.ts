// lib/makeT.ts -------------------------------------------------
import type { Dict } from "./getTranslations";

/**
 * Devuelve una función t(key) que resuelve claves anidadas
 *  ej: t("pages.about")  ->  "Acerca de"
 */
export function makeT(translations: Dict) {
  return (key: string): string => {
    let value: unknown = translations;

    for (const segment of key.split(".")) {
      if (
        typeof value === "object" &&
        value !== null &&
        segment in (value as Record<string, unknown>)
      ) {
        value = (value as Record<string, unknown>)[segment];
      } else {
        return key; // fallback
      }
    }

    return typeof value === "string" ? value : key;
  };
}
