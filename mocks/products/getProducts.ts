// src/mocks/getProducts.ts
import type { ProductDTO } from "@/types/ProductDTO";

export async function getProducts(locale: string): Promise<ProductDTO[]> {
  // Simula latencia real
  await new Promise((r) => setTimeout(r, 300));

  const data: Record<string, ProductDTO[]> = {
    en: [
      {
        id: 1,
        slug: "hilo",
        title: "HILO",
        // range: "ADVANTAGE RANGE",
        image: "/images/recurso-1-8.webp",
        category: "accessories",
        bulletPoints: [
          "Mechanised solution for venting",
          "Option to have 1 or 2 apex vents combined...",
          "High leg, low apex",
        ],
      },
    ],
    es: [
      {
        id: 1,
        slug: "hilo",
        title: "HILO",
        // range: "GAMA ADVANTAGE",
        image: "/images/recurso-1-8.webp",
        category: "accessories",
        bulletPoints: [
          "Solución mecanizada para ventilación",
          "Opción de 1 o 2 respiraderos en el ápice...",
          "Pierna alta, ápice bajo",
        ],
      },
      {
        id: 2,
        slug: "hilo",
        title: "Abrazadera para estaca",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/accesories/abrazadera-estaca.png",
        category: "accessories",
        bulletPoints: ["Abrazadera para estaca"],
      },
    ],
  };

  return data[locale] ?? data.en;
}
