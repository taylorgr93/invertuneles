/* components/products/ProductModal.tsx */
"use client";
import { useEffect } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  category: string;
  bulletPoints: string[];
  onClose: () => void;
};

export default function ProductModal({
  src,
  alt,
  category,
  bulletPoints,
  onClose,
}: Props) {
  /* cerrar con Esc */
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      {/* ---------- CONTENEDOR principal (flex) ---------- */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative flex flex-col md:flex-row gap-6
          w-[80vw] max-w-5xl h-[80vh]
          p-4 md:p-6
          rounded-2xl shadow-2xl bg-transparent
        "
      >
        {/* Imagen (≈ 65 %) */}
        <div className="relative flex-[80]">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width:768px) 100vw, 65vw"
            // className="object-cover rounded-2xl"
            className={`
              rounded-2xl
              ${
                category.toLowerCase().includes("accessories")
                  ? "object-contain"
                  : "object-cover"
              }
            `}
          />
        </div>

        {/* Texto (≈ 35 %) */}
        <div
          className="
            flex-[35] flex items-center justify-center
            px-4 md:px-6 overflow-y-auto
          "
        >
          <ul className="list-disc list-inside space-y-3 text-lg font-bold leading-relaxed text-white">
            {bulletPoints.map((bp) => (
              <li key={bp}>{bp}</li>
            ))}
          </ul>
        </div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            rounded-full bg-white/90 p-3 text-black
            shadow-lg transition hover:bg-green-600 hover:text-white cursor-pointer
          "
        >
          ✕
        </button>
      </div>
    </div>
  );
}
