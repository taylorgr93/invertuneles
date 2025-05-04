// src/data/offerItems.ts
import type { OfferItem } from "@/components/products/OfferCard";

export const offerItems: OfferItem[] = [
  {
    slug: "hilo",
    title: "HILO",
    range: "ADVANTAGE RANGE",
    image: "/images/hilo.webp",
    bulletPoints: [
      "Mechanised solution for venting",
      "Option to have 1 or 2 apex vents combined with a smaller roller vent",
      "High leg, low apex",
    ],
  },
  {
    slug: "fixed-top-vent",
    title: "FIXED TOP VENT",
    range: "ADVANTAGE RANGE",
    image: "/images/fixed-top-vent.webp",
    bulletPoints: [
      "Permanent apex vents for continuous airflow",
      "Ideal for warm climates",
    ],
  },
  // … añade tantos items como necesites
];
