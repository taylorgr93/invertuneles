// app/products/page.tsx
import { use } from "react";
import { makeT } from "@/lib/makeT";
import { getTranslations, Dict } from "@/lib/getTranslations";
import type { Metadata } from "next";
import Link from "next/link";
import VideoBackground from "@/components/home/VideoBackground";
import type { ProductDTO } from "@/types/ProductDTO";
import Divider from "@/components/common/Divider";

type Category = ProductDTO["category"]; // "accessories" | "greenhouse" | ...

/** Derivamos las categorías permitidas del tipo */
const categoryKeys: readonly Category[] = [
  "greenhouses",
  "plastic-films",
  "tights",
  "accessories",
  "substrates",
];

export const metadata: Metadata = {
  title: "Invertuneles – Productos",
  description: "Catálogo de productos por categoría…",
};

export default function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const translations: Dict = use(getTranslations(locale));
  const t = makeT(translations);

  return (
    <>
      <section className="relative h-screen w-full isolate overflow-hidden">
        <VideoBackground
          src="/videos/IMG_8788.mov"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* barra */}
        <nav
          className="
            /* --- móviles (< 640 px) --- */
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            flex flex-col gap-4 z-20
        
            /* --- >= sm (≥ 640 px)  se alinea a la izquierda --- */
            sm:left-6 sm:translate-x-0         /* pegado 24 px al borde  */
            md:left-10                        /* más margen en md       */
            lg:left-16                        /* aún más en lg          */
          "
        >
          {categoryKeys.map((key) => (
            <Link
              key={key}
              href={`/${locale}/products/${key}`}
              className="
              flex items-center justify-center
              rounded-lg
              bg-transparent
              border-4 border-[#194440]           /* ⬅️ contorno verde oscuro  */
              bg-white
              text-[#194440]                           /* ⬅️ texto blanco           */
              shadow-lg transition
              hover:bg-[#194440] hover:text-white /* ⬅️ relleno al hover        */
              hover:shadow-xl hover:scale-105
          
              min-w-[8rem] px-5 py-2.5 text-sm
              sm:min-w-[8rem] sm:px-5 sm:py-2.5 sm:text-base
              md:min-w-[9rem] md:px-6 md:py-3 md:text-lg
              lg:min-w-[10rem] lg:px-8 lg:py-4 lg:text-xl
            "
            >
              {t(`categories.${key}`)}
            </Link>
          ))}
        </nav>
      </section>
      <Divider />
    </>
  );
}
