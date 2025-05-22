// src/mocks/getProducts.ts
import type { ProductDTO } from "@/types/ProductDTO";

export async function getProducts(locale: string): Promise<ProductDTO[]> {
  // Simula latencia real
  await new Promise((r) => setTimeout(r, 300));

  const data: Record<string, ProductDTO[]> = {
    en: [
      // {
      //   id: 1,
      //   title: "HILO",
      //   // range: "ADVANTAGE RANGE",
      //   image: "/images/recurso-1-8.webp",
      //   category: "accessories",
      //   bulletPoints: [
      //     "Mechanised solution for venting",
      //     "Option to have 1 or 2 apex vents combined...",
      //     "High leg, low apex",
      //   ],
      // },
      {
        id: 2,
        title: "Stake clamp",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/accesories/abrazadera-estaca.png",
        category: "accessories",
        bulletPoints: ["Stake clamp"],
      },
      {
        id: 3,
        title: "Bow clamp",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/accesories/abrazadera-arco.png",
        category: "accessories",
        bulletPoints: ["Bow clamp"],
      },
    ],
    es: [
      // Accesorios
      // {
      //   id: 1,
      //   title: "HILO",
      //   // range: "GAMA ADVANTAGE",
      //   image: "/images/recurso-1-8.webp",
      //   category: "accessories",
      //   bulletPoints: [
      //     "Solución mecanizada para ventilación",
      //     "Opción de 1 o 2 respiraderos en el ápice...",
      //     "Pierna alta, ápice bajo",
      //   ],
      // },
      {
        id: 2,
        title: "Abrazadera para estaca",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/accesories/abrazadera-estaca.png",
        category: "accessories",
        bulletPoints: ["Abrazadera para estaca"],
      },
      {
        id: 3,
        title: "Abrazadera para arco",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/accesories/abrazadera-arco.png",
        category: "accessories",
        bulletPoints: ["Abrazadera para arco"],
      },
      {
        id: 4,
        title: "Pijas con punta de broca",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/accesories/pija-punta-broca.png",
        category: "accessories",
        bulletPoints: ["Pijas con punta de broca"],
      },
      {
        id: 5,
        title: "Tuerca",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/accesories/tuerca.png",
        category: "accessories",
        bulletPoints: ["Tuerca"],
      },
      {
        id: 6,
        title: "Esfera para amarres",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/accesories/esfera-amarres.png",
        category: "accessories",
        bulletPoints: ["Esfera para amarres"],
      },
      // Mallas
      {
        id: 7,
        title: "Malla Sombra",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/tights/MALLA SOMBRA.webp",
        category: "tights",
        bulletPoints: ["Malla Sombra"],
      },
      {
        id: 8,
        title: "Malla Antipájaro",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/tights/MALLA ANTIPAJARO.webp",
        category: "tights",
        bulletPoints: ["Malla Antipájaro"],
      },
      {
        id: 9,
        title: "Malla Antigranizo",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/tights/MALLA ANTIGRANIZO.webp",
        category: "tights",
        bulletPoints: ["Malla Antigranizo"],
      },
      {
        id: 10,
        title: "Malla Raschel",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/tights/raschel.webp",
        category: "tights",
        bulletPoints: ["Malla Raschel"],
      },
      {
        id: 11,
        title: "Malla Ground Cover",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/tights/GROUND COVER.webp",
        category: "tights",
        bulletPoints: ["Malla Ground Cover"],
      },
      {
        id: 12,
        title: "Malla Antiafido",
        // range: "GAMA ADVANTAGE",
        image: "/images/products/tights/ANTIAFIDO.webp",
        category: "tights",
        bulletPoints: ["Malla Antiafido"],
      },
    ],
  };

  return data[locale] ?? data.en;
}
