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
          src="/videos/videoHome.mp4"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* barra */}
        <nav
          className="
          absolute bottom-6 left-1/2 -translate-x-1/2 z-20
          flex flex-wrap justify-center gap-4
        "
        >
          {categoryKeys.map((key) => (
            <Link
              key={key}
              href={`/${locale}/products/${key}`}
              className="
              flex items-center justify-center
              rounded-lg bg-gradient-to-br from-green-600 to-green-500
              shadow-lg transition hover:scale-105 hover:from-green-500 hover:to-green-400

              min-w-[6rem] text-sm px-4 py-2
              sm:min-w-[7rem] sm:text-base sm:px-5 sm:py-2.5
              md:min-w-[8rem] md:text-lg md:px-6 md:py-3
              lg:min-w-[9rem] lg:text-xl lg:px-8 lg:py-4
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
