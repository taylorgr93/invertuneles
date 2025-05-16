/* components/common/DualImages.tsx */
import Image from "next/image";

type Img = { src: string; alt: string };

interface DualImagesProps {
  left: Img; // imagen 1
  right: Img; // imagen 2
}

export default function DualImages({ left, right }: DualImagesProps) {
  return (
    <section className="mx-auto my-16 grid max-w-6xl gap-8 px-4 md:grid-cols-2">
      {[left, right].map((img) => (
        <figure
          key={img.src}
          className="group relative overflow-hidden rounded-md shadow-lg"
        >
          {/* Imagen */}
          <Image
            src={img.src}
            alt={img.alt}
            width={1400}
            height={1600}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 50vw"
            placeholder="blur"
            priority
          />

          {/* Overlay de degradado opcional */}
          <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </figure>
      ))}
    </section>
  );
}
