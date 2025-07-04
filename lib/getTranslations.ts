// type NestedTranslations = {
//   [key: string]: string | { [key: string]: unknown };
// };

// export async function getTranslations(locale: string, namespace = "common") {
//   const translations = await import(
//     `../locales/${locale}/${namespace}.json`
//   ).then((mod) => mod.default as NestedTranslations);

//   const t = (key: string): string => {
//     const segments = key.split(".");

//     let value: unknown = translations;
//     for (const segment of segments) {
//       if (typeof value === "object" && value !== null && segment in value) {
//         value = (value as Record<string, unknown>)[segment];
//       } else {
//         return key; // fallback si la clave no existe
//       }
//     }

//     return typeof value === "string" ? value : key;
//   };

//   return { t };
// }

// lib/getTranslations.ts
export interface Dict {
  [key: string]: unknown;
  products?: Record<
    string,
    {
      title?: string;
      description?: string;
      benefitsHeading?: string;
      benefits?: { label: string; icon: string }[];
    }
  >;
}

// export type Dict = Record<string, unknown>;

export async function getTranslations(locale: string, ns = "common") {
  const json = await import(`../locales/${locale}/${ns}.json`);
  return json.default as Dict; // sigue siendo serializable
}
