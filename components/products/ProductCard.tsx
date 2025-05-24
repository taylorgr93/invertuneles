// components/products/OfferCard.tsx
"use client";

// import Link from "next/link";
import Image from "next/image";
import { ProductDTO } from "@/types/ProductDTO";

export type Product = ProductDTO;

export default function ProductCard({
  // id,
  title,
  range,
  image,
  bulletPoints,
}: Product) {
  return (
    <a
      // href={`/products/${id}`}
      className="group relative block aspect-[4/3]   /*  ➜ móvil  */
             sm:aspect-[5/4]                      /*  ➜ tablet */
             lg:aspect-square                     /*  ➜ desktop */
             overflow-hidden rounded-md shadow-lg
             transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
    >
      {/* Imagen de fondo */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width:1024px) 50vw, 33vw"
        className="object-contain bg-black transition-transform duration-300 group-hover:scale-105"
      />

      {/* Banda de título (esquina sup‑izq) */}
      <div className="absolute top-0 left-0 bg-[#37b4bd] text-white p-1.5 sm:px-4 rounded-br-md">
        <h3 className="text-base sm:text-lg font-semibold leading-tight">
          {title}
        </h3>
        {range ? (
          <span className="text-[10px] tracking-widest uppercase">{range}</span>
        ) : (
          <></>
        )}
      </div>

      {/* Overlay: aparece al hover */}
      <div className="absolute inset-0 flex flex-col justify-end bg-black/70 p-4 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-white">
          {bulletPoints.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        {/* <span className="self-end text-[11px] font-semibold text-[#37b4bd]">
          Click for more
        </span> */}
      </div>
    </a>
  );
}
