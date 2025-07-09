/* components/case-studies/CaseStudies.tsx */
import Image from "next/image";
// import Link from "next/link";

export interface CaseStudy {
  slug: string;
  title: string;
  image?: string; // ← opcional
  file?: string;
}

interface Props {
  heading?: string;
  studies: CaseStudy[];
  locale: string;
}

export default function CaseStudies({
  heading = "CASE STUDIES",
  // locale,
  studies,
}: Props) {
  if (studies.length === 0) return null;

  const PLACEHOLDER = "/images/placeholder.webp"; /* pon uno en /public */

  const safeStudies = studies.map((s, i) => ({
    key: s.slug?.trim() ? s.slug : `study-${i}`, // clave segura
    slug: s.slug ?? `study-${i}`,
    title: s.title ?? "Case study",
    image: s.image?.trim() ? s.image : PLACEHOLDER,
  }));

  return (
    <section className="mx-auto my-24 max-w-7xl px-4">
      <h2 className="mb-12 text-3xl font-extrabold tracking-wide text-brand-teal">
        {heading}
      </h2>

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {safeStudies.map(({ slug, title, image }) => (
          <li key={slug}>
            <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 shadow">
              <Image
                src={image} // nunca vacío
                alt={title} // nunca vacío
                fill
                sizes="(max-width:1024px) 50vw, 33vw"
                className="object-contain transition-transform duration-300 hover:scale-105"
                priority
              />
            </figure>

            <figcaption className="p-4 text-xl font-medium text-green-600">
              {title}
            </figcaption>
          </li>
        ))}
      </ul>
    </section>
  );
}
