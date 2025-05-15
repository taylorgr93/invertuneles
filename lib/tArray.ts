// src/lib/tArray.ts
type Translations = Record<string, unknown>;

/**
 * Extrae un array traducido desde un objeto de traducciones anidado.
 *
 * @param translations - Diccionario cargado (p.ej. resultado de getTranslations)
 * @param path         - Clave anidada estilo "about.who.paragraphs"
 * @returns            - Siempre string[]; [] si la ruta no existe
 */
export function tArray(translations: Translations, path: string): string[] {
  // Navegamos por el objeto sin asumir su estructura exacta
  const value = path.split(".").reduce<unknown>((obj, key) => {
    if (obj && typeof obj === "object" && key in obj) {
      return (obj as Record<string, unknown>)[key];
    }
    return undefined;
  }, translations);

  if (Array.isArray(value)) {
    // Nos aseguramos de que cada entrada sea string
    return value.filter((v): v is string => typeof v === "string");
  }

  if (typeof value === "string") return [value];

  return [];
}
