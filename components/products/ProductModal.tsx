/* components/products/ProductModal.tsx */
"use client";

import { useEffect } from "react";
import Image from "next/image";

type Props = { src: string; alt: string; onClose: () => void };

export default function ProductModal({ src, alt, onClose }: Props) {
  /* cerrar con Esc */
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/70 backdrop-blur-sm"
    >
      <figure
        onClick={(e) => e.stopPropagation()}
        className="relative w-[70vw] h-[70vh] max-w-5xl"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain rounded-2xl shadow-2xl"
          sizes="70vw"
          priority
        />

        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 rounded-full bg-white/90 p-2
                     text-black shadow-lg transition hover:bg-green-600 hover:text-white cursor-pointer"
        >
          ✕
        </button>
      </figure>
    </div>
  );
}
