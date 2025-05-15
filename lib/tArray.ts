// src/lib/tArray.ts
/**
 * Extrae un array traducido desde un objeto de traducciones anidado.
 *
 * @param translations - El diccionario ya cargado (p.ej. resultado de getTranslations)
 * @param path         - Clave anidada style "about.who.paragraphs"
 * @returns            - Siempre un string[] (si la ruta no existe, devuelve [])
 */
export function tArray(translations: any, path: string): string[] {
  const value = path.split(".").reduce<any>((o, k) => o?.[k], translations);
  if (Array.isArray(value)) return value;
  if (typeof value === "string") return [value];
  return [];
}
