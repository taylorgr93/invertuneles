/* components/products/ProductCard.tsx */
"use client";

import { useState } from "react";
import Image from "next/image";
import ProductModal from "./ProductModal";
import type { ProductDTO } from "@/types/ProductDTO";

export type Product = ProductDTO;

export default function ProductCard({
  title,
  range,
  image,
  category,
  bulletPoints,
}: Product) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* --------- Card --------- */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block aspect-[4/3] sm:aspect-[5/4] lg:aspect-square
                   overflow-hidden rounded-md shadow-lg cursor-pointer
                   transition-shadow duration-300 hover:shadow-2xl"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw,
                 (max-width:1024px) 50vw,
                 33vw"
          className="object-cover bg-black
                     transition-transform duration-300 group-hover:scale-105"
        />

        {/* etiqueta */}
        <figcaption
          className="absolute bottom-0 left-0 w-full bg-[#194440]/95
                             px-4 py-2 text-center font-bold text-white tracking-wide
                             text-sm sm:text-base md:text-lg lg:text-xl"
        >
          {title}
          {range && (
            <span className="text-[10px] tracking-widest uppercase">
              {range}
            </span>
          )}
        </figcaption>
        {/* <div className="absolute top-0 left-0 rounded-br-md bg-[#194440] px-3 py-1.5 sm:px-4 text-white">
          <h3 className="text-base sm:text-lg font-semibold leading-tight">
            {title}
          </h3>
          {range && (
            <span className="text-[10px] tracking-widest uppercase">
              {range}
            </span>
          )}
        </div> */}

        {/* overlay hover */}
        <div
          className="absolute inset-0 flex flex-col justify-end
                        bg-black/70 p-4 opacity-0 translate-y-4
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300"
        >
          <ul className="mb-6 list-disc space-y-1 pl-5 text-md text-white font-bold">
            {bulletPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </button>

      {/* --------- Modal --------- */}
      {open && (
        <ProductModal
          src={image}
          alt={title}
          category={category}
          bulletPoints={bulletPoints}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
