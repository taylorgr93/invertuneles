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
    // <Link
    <a
      // href={`/products/${id}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-sm shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Imagen de fondo */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width:1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Banda de título (esquina sup‑izq) */}
      <div className="absolute top-0 left-0 bg-[#37b4bd] text-white px-4 py-2">
        <h3 className="text-xl font-bold leading-none">{title}</h3>
        {range ? (
          <span className="text-[11px] tracking-widest uppercase">{range}</span>
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
    // </Link>
  );
}
