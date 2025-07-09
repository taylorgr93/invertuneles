/* components/common/ImageWithColumns.tsx */
import Image from "next/image";

interface ImageWithColumnsProps {
  src: string;
  alt: string;
  /** Encabezado del bloque (ej. “WHO WE ARE”) */
  title: string;
  subtitleLeft?: string;
  subtitleRight?: string;
  /** Párrafos de texto (se renderizan en orden) */
  paragraphsLeft: string[];
  paragraphsRight: string[];
}

export default function ImageWithColumns({
  src,
  alt,
  title,
  subtitleLeft,
  subtitleRight,
  paragraphsLeft,
  paragraphsRight,
}: ImageWithColumnsProps) {
  return (
    <section className="mx-auto my-16 max-w-6xl rounded-md bg-gray-100 shadow-lg">
      {/* Imagen arriba */}
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={800}
        priority
        className="w-full rounded-t-md object-cover"
        sizes="(max-width:768px) 100vw, 75vw"
      />

      <h2 className="px-8 py-6 text-3xl md:text-4xl font-extrabold text-gray-800">
        {title}
      </h2>

      {/* Cuerpo en 2 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 pb-6">
        {/* Columna izquierda */}
        <div className="space-y-4 text-lg leading-relaxed text-gray-800 text-justify">
          {subtitleLeft && (
            <h3 className="text-xl font-semibold text-green-700">
              {subtitleLeft}
            </h3>
          )}
          {paragraphsLeft.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {/* Columna derecha */}
        <div className="space-y-5 text-lg leading-relaxed text-gray-800 text-justify">
          {subtitleRight && (
            <h3 className="mb-2 text-xl font-semibold text-green-700">
              {subtitleRight}
            </h3>
          )}
          {paragraphsRight.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
