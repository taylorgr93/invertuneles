/* components/case-studies/CaseStudies.tsx */
import Image from "next/image";
import Link from "next/link";

export interface CaseStudy {
  slug: string;
  title: string;
  image: string; // ruta en /public
  doc?: string; // opcional: PDF u otro anexo
}

interface Props {
  heading?: string;
  studies: CaseStudy[];
  locale: string;
}

const PLACEHOLDER = "/images/placeholder.webp";

export default function CaseStudies({
  heading = "CASE STUDIES",
  studies,
  locale,
}: Props) {
  if (!studies.length) return null;

  return (
    <section className="mx-auto my-24 max-w-7xl px-4">
      <h2 className="mb-12 text-3xl font-extrabold tracking-wide text-brand-teal">
        {heading}
      </h2>

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {studies.map(({ slug, title, image, doc }) => {
          const src = image.trim() || PLACEHOLDER;

          /* —— tarjeta completa (imagen + banda + texto) —— */
          const card = (
            <article
              className="group block overflow-hidden rounded-lg bg-gray-100 shadow 
                         transition-shadow hover:shadow-lg"
            >
              {/* Imagen con banda superpuesta */}
              <figure className="relative aspect-[4/3] w-full">
                <Image
                  src={src}
                  alt={title}
                  fill
                  sizes="(max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />

                {/* Banda de título */}
                <figcaption
                  className="absolute bottom-0 left-0 w-full bg-[#194440]/95
                             px-4 py-2 text-center font-bold text-white tracking-wide
                             text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  {title}
                </figcaption>
              </figure>
            </article>
          );

          /* —— elegir Link interno o descarga —— */
          return (
            <li key={slug}>
              {doc ? (
                /* descarga / visor de PDF */
                <a
                  href={doc}
                  download /* quítalo si prefieres que se abra */
                  className="block"
                >
                  {card}
                </a>
              ) : (
                /* navegación interna */
                <Link
                  href={`/${locale}/case-studies/${slug}`}
                  className="block"
                >
                  {card}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
