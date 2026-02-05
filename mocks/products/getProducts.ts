// src/mocks/getProducts.ts
import type { ProductDTO } from "@/types/ProductDTO";

export async function getProducts(locale: string): Promise<ProductDTO[]> {
  // Simula latencia real
  await new Promise((r) => setTimeout(r, 300));

  const data: Record<string, ProductDTO[]> = {
    en: [
      // ---------------------- Greenhouses -------------------------
      {
        id: 51,
        title: "Traditional Macrotunnel",
        image: "/images/products/greenhouses/MacrotunelTradicional.webp",
        category: "greenhouses",
        bulletPoints: [
          "Tunnel-shaped steel structure with a plastic or mesh cover, capable of creating a semi-controlled microclimate.",
          "Economical, mobile and quick-assembly system.",
        ],
      },
      {
        id: 52,
        title: "Reinforced Macrotunnel",
        image: "/images/products/greenhouses/MacrotunelReforzado.webp",
        category: "greenhouses",
        bulletPoints: [
          "Reinforced structure with steel crossbars, designed to provide greater resistance against wind forces.",
        ],
      },
      {
        id: 53,
        title: "Macrotunnel with Opening",
        image: "/images/products/greenhouses/Macrotunel_Apertura.webp",
        category: "greenhouses",
        bulletPoints: [
          "Designed for greater ventilation control, this structure offers the option of opening from the side, front, or top.",
        ],
      },
      // {
      //   id: 54,
      //   title: "Macrotunnel OV-M",
      //   image: "/images/products/greenhouses/MACROTUNEL OV-M.webp",
      //   category: "greenhouses",
      //   bulletPoints: [
      //     "Structure made with 40 x 30 mm oval tubes, tension-resistant, with a wider cross-section, generating a 30% stronger and more robust system.",
      //   ],
      // },
      // ------------------- plastic-films ----------------------
      {
        id: 41,
        title: "Translucent",
        image: "/images/products/plastic-films/MACROTUNEL TRASLUCIDO.webp",
        category: "plastic-films",
        bulletPoints: [
          "High transparency that allows optimal passage of sunlight, promoting photosynthesis.",
          "Ideal for low-light areas.",
        ],
      },
      {
        id: 42,
        title: "Milky plastic covers",
        image: "/images/products/plastic-films/PLASTICO BLANCO LECHOSO.webp",
        category: "plastic-films",
        bulletPoints: [
          "Films with special additives (anti-drip, anti-UV, thermal, etc.) that optimize the growing environment, improve yield, and extend the life of the plastic.",
        ],
      },
      {
        id: 43,
        title: "High technology",
        image: "/images/products/plastic-films/PLASTICO ALTA TECNOLOGIA.webp",
        category: "plastic-films",
        bulletPoints: [
          "Films with special additives (anti-drip, anti-UV, thermal, etc.) that optimize the growing environment, improve yield, and extend the life of the plastic.",
        ],
      },
      {
        id: 44,
        title: "Padded",
        image: "/images/products/plastic-films/ACOLCHADO.webp",
        category: "plastic-films",
        bulletPoints: [
          "Placed on the soil, they conserve moisture, control weeds and regulate the temperature of the substrate.",
          "Available in different colors depending on the cultivation objective (black, silver, two-tone, etc.)",
        ],
      },
      // ------------------- Tights -----------------------
      {
        id: 31,
        title: "Shade Net",
        image: "/images/products/tights/MALLA SOMBRA.webp",
        category: "tights",
        bulletPoints: [
          "Protects from excessive solar radiation and light, reducing thermal stress.",
        ],
      },
      {
        id: 32,
        title: "Hail Net",
        image: "/images/products/tights/MALLA ANTIAFIDO.webp",
        category: "tights",
        bulletPoints: [
          "Designed to prevent the entry of aphids and other small pests.",
          "Reduces the need for agrochemicals.",
        ],
      },
      {
        id: 33,
        title: "Anti-hail Net",
        image: "/images/products/tights/MALLA ANTI GRANIZO.webp",
        category: "tights",
        bulletPoints: [
          "Resistant, it protects crops from damage caused by hail, without impeding the passage of air and light.",
        ],
      },
      {
        id: 34,
        title: "Bee Net",
        image: "/images/products/tights/MALLA-ANTI-INSECTO.webp",
        category: "tights",
        bulletPoints: [
          "Prevents the entry of unwanted insects without affecting ventilation.",
          "Useful for protecting crops from specific pests and vector-borne diseases.",
        ],
      },
      {
        id: 35,
        title: "Bird Net",
        image: "/images/products/tights/MALLA ANTI PAJARO.webp",
        category: "tights",
        bulletPoints: [
          "Prevents birds from damaging crops without affecting growth.",
          "Lightweight, durable and easy to install.",
        ],
      },
      {
        id: 36,
        title: "Ground Cover",
        image: "/images/products/tights/MALLA GROUND COVER.webp",
        category: "tights",
        bulletPoints: [
          "Soil use, used for weed control, drainage and road maintenance.",
          "In black and white colors.",
        ],
      },
      {
        id: 37,
        title: "Raschel mesh",
        image: "/images/products/tights/MALLA-RASCHEL.webp",
        category: "tights",
        bulletPoints: [
          "Raschel fabric system, resistant, flexible and light, with ventilation capacity",
        ],
      },
      // ---------------- substrates -------------------
      {
        id: 81,
        title: "National coconut substrate",
        image: "/images/products/substrates/SustratoDeCoco.webp",
        category: "substrates",
        bulletPoints: [
          "100% natural and organic, made from coconut fiber.",
          "It offers water retention, good aeration and an ideal pH for root development.",
          "Perfect for hydroponic crops, seedbeds and nurseries.",
        ],
      },
      {
        id: 82,
        title: "Base for Hydroponic Bag",
        image: "/images/products/substrates/BolsasHidroponia.webp",
        category: "substrates",
        bulletPoints: [
          "Sturdy, reusable stand designed to keep grow bags in a stable, elevated position.",
          "It facilitates drainage, improves root aeration and optimizes the management of the hydroponic system.",
        ],
      },
      {
        id: 83,
        title: "Flowerpot",
        image: "/images/products/substrates/BaseParaMaceta.webp",
        category: "substrates",
        bulletPoints: [
          "Rigid container, its perforated structure facilitates the flow of water and nutrients, preventing waterlogging and improving root oxygenation.",
        ],
      },
      {
        id: 84,
        title: "Gutter",
        image: "/images/products/substrates/CANALETA.webp",
        category: "substrates",
        bulletPoints: [
          "System designed to collect and conduct drainage of nutrient solutions in hydroponic crops.",
        ],
      },
      // ----------------- Accesories----------------------
      // {
      //   id: 1,
      //   title: "Small Clamp",
      //   image: "/images/products/accesories/abrazadera-chica.webp",
      //   category: "accessories",
      //   bulletPoints: ["Small Clamp"],
      // },
      // {
      //   id: 2,
      //   title: "Large Clamp",
      //   image: "/images/products/accesories/abrazadera-grande.webp",
      //   category: "accessories",
      //   bulletPoints: ["Large Clamp"],
      // },
      {
        id: 3,
        title: "Galvanized Wire",
        image: "/images/products/accesories/alambre-galvanizado.webp",
        category: "accessories",
        bulletPoints: ["Galvanized Wire"],
      },
      // {
      //   id: 4,
      //   title: "Galvanized Steel Cable",
      //   image: "/images/products/accesories/cable-de-acero-galvanizado.webp",
      //   category: "accessories",
      //   bulletPoints: ["Galvanized Steel Cable"],
      // },
      {
        id: 4,
        title: "Microwire",
        image: "/images/products/accesories/cable-de-acero-galvanizado.webp",
        category: "accessories",
        bulletPoints: ["Microwire"],
      },
      {
        id: 5,
        title: "Navitek Gray Tape",
        image: "/images/products/accesories/cinta-gris-naviteck.webp",
        category: "accessories",
        bulletPoints: ["Navitek Gray Tape"],
      },
      {
        id: 6,
        title: "Ribbon",
        image: "/images/products/accesories/cintilla.webp",
        category: "accessories",
        bulletPoints: ["Ribbon"],
      },
      {
        id: 7,
        title: "Retaining clip",
        image: "/images/products/accesories/Clip-para-sujetar-plástico.webp",
        category: "accessories",
        bulletPoints: [""],
      },
      {
        id: 8,
        title: "Gripple",
        image: "/images/products/accesories/gripple.webp",
        category: "accessories",
        bulletPoints: ["Gripple"],
      },
      // {
      //   id: 9,
      //   title: "Gripple 2",
      //   // range: "GAMA ADVANTAGE",
      //   image: "/images/products/accesories/gripple2.webp",
      //   category: "accessories",
      //   bulletPoints: ["Gripple 2"],
      // },
      {
        id: 10,
        title: "Posh",
        image: "/images/products/accesories/pijas.webp",
        category: "accessories",
        bulletPoints: [""],
      },
      {
        id: 11,
        title: "Black Pipeline",
        image: "/images/products/accesories/poliducto negro.webp",
        category: "accessories",
        bulletPoints: ["Black Pipeline"],
      },
      {
        id: 12,
        title: "Raffia (Tomato, Toyo, C3)",
        image: "/images/products/accesories/RAFIA TOMATERA.webp",
        category: "accessories",
        bulletPoints: ["Raffia"],
      },
      {
        id: 13,
        title: "Agricultural Rope",
        image: "/images/products/accesories/SOGA AGRICOLA.webp",
        category: "accessories",
        bulletPoints: ["Agricultural Rope"],
      },
      {
        id: 14,
        title: "Spanish Cut Rope",
        image: "/images/products/accesories/soga cortada carrete española.webp",
        category: "accessories",
        bulletPoints: ["Spanish Cut Rope"],
      },
      {
        id: 15,
        title: "Cut Rope",
        image: "/images/products/accesories/soga cortada.webp",
        category: "accessories",
        bulletPoints: ["Cut Rope"],
      },
      {
        id: 16,
        title: "Rope on a Reel",
        image: "/images/products/accesories/soga en carrete.webp",
        category: "accessories",
        bulletPoints: ["Rope on a Reel"],
      },
      // {
      //   id: 17,
      //   title: "Gripple Pliers",
      //   image: "/images/products/accesories/tenaza gripple.webp",
      //   category: "accessories",
      //   bulletPoints: ["Gripple Pliers"],
      // },
      {
        id: 18,
        title: "Galvanized Pipes",
        image: "/images/products/accesories/Tubos galvanizado.webp",
        category: "accessories",
        bulletPoints: [""],
      },
    ],
    es: [
      // ----------------------- Greenhouses -----------------
      {
        id: 51,
        title: "Macrotunel Tradicional",
        image: "/images/products/greenhouses/MacrotunelTradicional.webp",
        category: "greenhouses",
        bulletPoints: [
          "Estructura de acero en forma de túnel con cubierta plástica o malla, capaz de crear un microclima semicontrolado.",
          "Sistema económico, móvil y de armado rápido.",
        ],
      },
      {
        id: 52,
        title: "Macrotunel Reforzado",
        image: "/images/products/greenhouses/MacrotunelReforzado.webp",
        category: "greenhouses",
        bulletPoints: [
          "Estructura reforzada con crucetas de acero, diseñada para brindar mayor resistencia contra la fuerza del viento.",
        ],
      },
      {
        id: 53,
        title: "Macrotunel con Apertura",
        image: "/images/products/greenhouses/Macrotunel_Apertura.webp",
        category: "greenhouses",
        bulletPoints: [
          "Solución diseñada para mayor control de ventilación, es una estructura con opción de apertura latera, frontal o superior.",
        ],
      },
      // {
      //   id: 54,
      //   title: "Macrotunel OV-M",
      //   image: "/images/products/greenhouses/MACROTUNEL OV-M.webp",
      //   category: "greenhouses",
      //   bulletPoints: [
      //     "Estructura fabricada con tubos oval de 40 x 30 mm, resistente a la tensión, con sección transversal más ancha, generando un sistema 30% más fuerte y robusto.",
      //   ],
      // },
      // -------------------- plastic-films ----------------------
      {
        id: 41,
        title: "Traslucidas",
        image: "/images/products/plastic-films/MACROTUNEL TRASLUCIDO.webp",
        category: "plastic-films",
        bulletPoints: [
          "Alta transparencia que permiten un óptimo paso de luz solar, favoreciendo la fotosíntesis.",
          "Ideales para zonas de baja luminosidad.",
        ],
      },
      {
        id: 42,
        title: "Lechosas",
        image: "/images/products/plastic-films/PLASTICO BLANCO LECHOSO.webp",
        category: "plastic-films",
        bulletPoints: [
          "Con efecto difusor que distribuyen la luz de forma uniforme, reduciendo sombras y quemaduras solares.",
          "Mantienen una temperatura más estable.",
        ],
      },
      {
        id: 43,
        title: "Alta tecnología",
        image: "/images/products/plastic-films/PLASTICO ALTA TECNOLOGIA.webp",
        category: "plastic-films",
        bulletPoints: [
          "Películas con aditivos especiales (antigoteo, anti UV, térmicos, etc.) que optimizan el ambiente de cultivo, mejoran el rendimiento y prolongan la vida útil del plástico.",
        ],
      },
      {
        id: 44,
        title: "Acolchado",
        image: "/images/products/plastic-films/ACOLCHADO.webp",
        category: "plastic-films",
        bulletPoints: [
          "Colocadas sobre el suelo, conservan la humedad, controlan malezas y regulan la temperatura del sustrato.",
          "Disponible en diferentes colores según el objetivo del cultivo (negro, plata, bicolor, etc.)",
        ],
      },
      // ------------------------- Mallas -------------------------
      {
        id: 31,
        title: "Malla Sombra",
        image: "/images/products/tights/MALLA SOMBRA.webp",
        category: "tights",
        bulletPoints: [
          "Protege de la radiación solar excesiva y la luz, reduciendo el estrés térmico.",
        ],
      },
      {
        id: 32,
        title: "Malla Antiafido",
        image: "/images/products/tights/MALLA ANTIAFIDO.webp",
        category: "tights",
        bulletPoints: [
          "Diseñada para evitar la entrada de áfidos y otras plagas pequeñas.",
          "Reduce la necesidad de agroquímicos.",
        ],
      },
      {
        id: 33,
        title: "Malla Antigranizo",
        image: "/images/products/tights/MALLA ANTI GRANIZO.webp",
        category: "tights",
        bulletPoints: [
          "Resistente que protege los cultivos del daño causado por la caída de granizo, sin impedir el paso del aire y la luz.",
        ],
      },
      {
        id: 34,
        title: "Malla Anti-Insectos",
        image: "/images/products/tights/MALLA-ANTI-INSECTO.webp",
        category: "tights",
        bulletPoints: [
          "Impide el ingreso de insectos no deseados sin afectar la ventilación.",
          "Útil para proteger cultivos de plagas específicas y enfermedades transmitidas por vectores.",
        ],
      },
      {
        id: 35,
        title: "Malla Antipájaro",
        image: "/images/products/tights/MALLA ANTI PAJARO.webp",
        category: "tights",
        bulletPoints: [
          "Evita que aves dañen los cultivos, sin afectar el crecimiento.",
          "Liviana, duradera y de fácil instalación.",
        ],
      },
      {
        id: 36,
        title: "Malla Ground Cover",
        image: "/images/products/tights/MALLA GROUND COVER.webp",
        category: "tights",
        bulletPoints: [
          "Uso en suelo, utilizado para control de maleza, drenaje y mantenimiento de caminos.",
          "En colores blanco y negro.",
        ],
      },
      {
        id: 37,
        title: "Malla Raschel",
        image: "/images/products/tights/MALLA-RASCHEL.webp",
        category: "tights",
        bulletPoints: [
          "Sistema de tejido Raschel, resistente, flexible y ligera, con capacidad de ventilación",
        ],
      },
      // ---------------- substrates -------------------
      {
        id: 81,
        title: "Sustrato de coco nacional",
        image: "/images/products/substrates/SustratoDeCoco.webp",
        category: "substrates",
        bulletPoints: [
          "100% natural y ecológico, elaborado a partir de la fibra del coco.",
          "Ofrece retención de agua, buena aireación y un pH ideal para el desarrollo de raíces.",
          "Perfecto para cultivos hidropónicos, semilleros y viveros.",
        ],
      },
      {
        id: 82,
        title: "Base para Bolsa de Hidroponia",
        image: "/images/products/substrates/BolsasHidroponia.webp",
        category: "substrates",
        bulletPoints: [
          "Soporte resistente y reutilizable diseñado para mantener las bolsas de cultivo en posición estable y elevada.",
          "Facilita el drenaje, mejora la aireación de las raíces y optimiza el manejo del sistema hidropónico.",
        ],
      },
      {
        id: 83,
        title: "Maceta",
        image: "/images/products/substrates/BaseParaMaceta.webp",
        category: "substrates",
        bulletPoints: [
          "Contenedor rígido, su estructura perforada facilita el flujo de agua y nutrientes, evitando el encharcamiento y mejorando la oxigenación radicular.",
        ],
      },
      {
        id: 84,
        title: "Canaleta",
        image: "/images/products/substrates/CANALETA.webp",
        category: "substrates",
        bulletPoints: [
          "Sistema diseñado para recolectar y conducir el drenaje de soluciones nutritivas en cultivos hidropónicos.",
        ],
      },
      // ----------------- Accesorios----------------------
      // {
      //   id: 1,
      //   title: "Abrazadera Chica",
      //   image: "/images/products/accesories/abrazadera-chica.webp",
      //   category: "accessories",
      //   bulletPoints: ["Abrazadera Chica"],
      // },
      // {
      //   id: 2,
      //   title: "Abrazadera Grande",
      //   image: "/images/products/accesories/abrazadera-grande.webp",
      //   category: "accessories",
      //   bulletPoints: ["Abrazadera Grande"],
      // },
      {
        id: 3,
        title: "Alambre Galvanizado",
        image: "/images/products/accesories/alambre-galvanizado.webp",
        category: "accessories",
        bulletPoints: ["Alambre Galvanizado"],
      },
      // {
      //   id: 4,
      //   title: "Cable de Acero Galvanizado",
      //   image: "/images/products/accesories/cable-de-acero-galvanizado.webp",
      //   category: "accessories",
      //   bulletPoints: ["Cable de Acero Galvanizado"],
      // },
      {
        id: 4,
        title: "Microalambre",
        image: "/images/products/accesories/cable-de-acero-galvanizado.webp",
        category: "accessories",
        bulletPoints: ["Microalambre"],
      },
      {
        id: 5,
        title: "Cinta Gris Naviteck",
        image: "/images/products/accesories/cinta-gris-naviteck.webp",
        category: "accessories",
        bulletPoints: ["Cinta Gris Naviteck"],
      },
      {
        id: 6,
        title: "Cintilla",
        image: "/images/products/accesories/cintilla.webp",
        category: "accessories",
        bulletPoints: ["Cintilla"],
      },
      {
        id: 7,
        title: "Clip de sujeción",
        image: "/images/products/accesories/Clip-para-sujetar-plástico.webp",
        category: "accessories",
        bulletPoints: ["Clip para Sujetar Plastico"],
      },
      {
        id: 8,
        title: "Gripple",
        image: "/images/products/accesories/gripple.webp",
        category: "accessories",
        bulletPoints: ["Gripple"],
      },
      // {
      //   id: 9,
      //   title: "Gripple 2",
      //   image: "/images/products/accesories/gripple2.webp",
      //   category: "accessories",
      //   bulletPoints: ["Gripple 2"],
      // },
      {
        id: 10,
        title: "Pijas",
        image: "/images/products/accesories/pijas.webp",
        category: "accessories",
        bulletPoints: ["Pijas"],
      },
      {
        id: 11,
        title: "Poliducto Negro",
        image: "/images/products/accesories/poliducto negro.webp",
        category: "accessories",
        bulletPoints: ["Poliducto Negro"],
      },
      {
        id: 12,
        title: "Rafia (Tomatera, Toyo, C3)",
        image: "/images/products/accesories/RAFIA TOMATERA.webp",
        category: "accessories",
        bulletPoints: [""],
      },
      {
        id: 13,
        title: "Soga Agricola",
        image: "/images/products/accesories/SOGA AGRICOLA.webp",
        category: "accessories",
        bulletPoints: [""],
      },
      {
        id: 14,
        title: "Soga Cortada Española",
        image: "/images/products/accesories/soga cortada carrete española.webp",
        category: "accessories",
        bulletPoints: [""],
      },
      {
        id: 15,
        title: "Soga Cortada",
        image: "/images/products/accesories/soga cortada.webp",
        category: "accessories",
        bulletPoints: [""],
      },
      {
        id: 16,
        title: "Soga en Carrete",
        image: "/images/products/accesories/soga en carrete.webp",
        category: "accessories",
        bulletPoints: [""],
      },
      // {
      //   id: 17,
      //   title: "Tenaza Gripple",
      //   image: "/images/products/accesories/tenaza gripple.webp",
      //   category: "accessories",
      //   bulletPoints: [""],
      // },
      {
        id: 18,
        title: "Tubos Galvanizados",
        image: "/images/products/accesories/Tubos galvanizado.webp",
        category: "accessories",
        bulletPoints: [""],
      },
    ],
  };

  return data[locale] ?? data.en;
}
