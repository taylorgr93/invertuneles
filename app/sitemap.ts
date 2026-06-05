import { MetadataRoute } from "next";

const BASE_URL = "https://invertuneles.com";
const LOCALES = ["es", "en"];
const STATIC_ROUTES = ["", "about", "contact", "products"];
const PRODUCT_CATEGORIES = [
  "greenhouses",
  "plastic-films",
  "tights",
  "accessories",
  "substrates",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  LOCALES.forEach((locale) => {
    STATIC_ROUTES.forEach((route) => {
      const path = route ? `/${route}` : "";
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            es: `${BASE_URL}/es${path}`,
            en: `${BASE_URL}/en${path}`,
          },
        },
      });
    });
  });

  // Product category pages (high priority — main landing pages for each product line)
  LOCALES.forEach((locale) => {
    PRODUCT_CATEGORIES.forEach((category) => {
      entries.push({
        url: `${BASE_URL}/${locale}/products/${category}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: {
          languages: {
            es: `${BASE_URL}/es/products/${category}`,
            en: `${BASE_URL}/en/products/${category}`,
          },
        },
      });
    });
  });

  return entries;
}
