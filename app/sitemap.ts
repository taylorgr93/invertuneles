import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://invertuneles.com";
  const locales = ["es", "en"];

  // Páginas estáticas de tu sitio
  const routes = ["", "about", "contact", "products"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generar entradas para cada locale y ruta
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route ? `/${route}` : ""}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            es: `${baseUrl}/es${route ? `/${route}` : ""}`,
            en: `${baseUrl}/en${route ? `/${route}` : ""}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
