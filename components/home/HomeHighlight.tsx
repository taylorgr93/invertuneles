/* components/home/HomeHighlight.tsx */
"use client";

import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

type Props = {
  locale: string;
  /** Texto pequeño sobre el headline (“Te ofrecemos:”) */
  kicker: string;
  /** Titular grande (“Agricultura Protegida …”) — admite <br/> si quieres salto manual */
  headline: string;
  /** 3-4 beneficios cortos */
  benefits: string[];
  title: string;
  /** Imágenes (miniatura) para la fila inferior */
  productImages: { key: number; src: string; alt: string }[];
};

export default function HomeHighlight({
  locale,
  kicker,
  headline,
  benefits,
  title,
  productImages,
}: Props) {
  console.log(
    "imgs:",
    productImages.map((i) => i.key ?? i.src)
  );

  return (
    <section className="mx-auto my-20 max-w-7xl px-4 text-center">
      {/* Kicker */}
      <p className="mb-4 text-lg font-medium text-gray-300">{kicker}</p>

      {/* Headline con degradado verde */}
      <h2 className="mb-16 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
        {headline}
      </h2>

      {/* Beneficios */}
      <div className="mb-20 grid gap-y-12 md:grid-cols-3">
        {benefits.map((b) => (
          <div key={b} className="flex flex-col items-center gap-6">
            <Check size={48} strokeWidth={2.5} className="text-white" />
            <p className="max-w-xs text-lg font-medium text-white">{b}</p>
          </div>
        ))}
      </div>

      {/* Carrusel de miniaturas */}
      <h3 className="mb-8 text-xl font-extrabold tracking-widest text-white">
        {title}
      </h3>

      {/* Carrusel -> Grid sin scroll */}
      <div className="grid gap-6 p-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {productImages.map((img) => (
          <Link key={img.key} href={`/${locale}/products`} scroll={false}>
            <figure
              className="
        group relative h-36 w-56
        overflow-hidden rounded-2xl shadow-lg ring-4 ring-emerald-400/60
        transition-transform duration-500 hover:scale-105 cursor-pointer
      "
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="224px" /* coincide con w-56 */
                className="object-cover"
                priority
              />
              <figcaption
                className="
          pointer-events-none absolute inset-0
          bg-gradient-to-t from-black/40 to-transparent
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
              />
            </figure>
          </Link>
        ))}
      </div>
    </section>
  );
}
