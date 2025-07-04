/* components/products/ProductIntro.tsx  (Server Component) */
import Image from "next/image";
import { Dict } from "@/lib/getTranslations";
import { makeT } from "@/lib/makeT";

interface Benefit {
  label: string;
  icon: string; // ruta en /public (svg, png, webp…)
}

interface Props {
  translations: Dict;
  /** slug de categoría; p. ej. "greenhouses" */
  category: string;
}

export default function ProductIntro({ translations, category }: Props) {
  const t = makeT(translations);

  /* ── datos desde locales/*.json ────────────────────────────── */
  const title: string = translations.products?.[category]?.title ?? "";

  const description: string =
    translations.products?.[category]?.description ?? "";

  const benefits: Benefit[] = translations.products?.[category]?.benefits ?? [];

  const benefitsHeading =
    translations.products?.[category]?.benefitsHeading ||
    t("products.benefitsHeading");

  if (!title && !description && benefits.length === 0) return null;

  return (
    <section className="mx-auto max-w-none px-6 py-12 text-white">
      {/* — título — */}
      {title && (
        <h2 className="mb-8 text-center text-5xl font-extrabold text-green-500">
          {title}
        </h2>
      )}

      {/* — descripción — */}
      {description && (
        <p className="mx-auto mb-10 max-w-4xl text-center text-xl leading-relaxed">
          {description}
        </p>
      )}

      {/* — barra de beneficios — */}
      {benefits.length > 0 && (
        <div className="mx-auto w-full lg:w-[80%] rounded-2xl bg-white p-4 shadow-inner">
          {benefitsHeading && (
            <h3 className="p-4 text-center text-4xl text-green-500 font-extrabold text-brand-teal">
              {benefitsHeading}
            </h3>
          )}

          <ul
            className="
              flex flex-wrap justify-center gap-10
              sm:gap-12 lg:gap-16
            "
          >
            {benefits.map(({ label, icon }) => (
              <li
                key={label}
                className="flex w-auto flex-col items-center gap-6 text-center bg-white rounded-xl"
              >
                <Image
                  src={icon}
                  alt={label}
                  /* píxeles lógicos que Next optimiza — usa el mayor (256) */
                  width={256}
                  height={256}
                  /* sizes para que Next sirva la versión adecuada */
                  sizes="(max-width:768px) 144px, (max-width:1024px) 208px, 256px"
                  className="
                    h-40 w-40               /* 144 × 144 en móvil */
                    md:h-52 md:w-52         /* 208 × 208 en tablet/desktop medio */
                    object-contain rounded-xl"
                  priority
                />
                {/* <span className="text-sm text-gray-100 font-medium leading-snug">
                  {label}
                </span> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
