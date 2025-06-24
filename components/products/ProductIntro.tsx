/* components/products/ProductIntro.tsx
   (Server Component) */
import { Dict } from "@/lib/getTranslations";
import { makeT } from "@/lib/makeT";
import { tArray } from "@/lib/tArray";

interface Props {
  translations: Dict;
  /** slug de la categoría, p.ej. "greenhouses" */
  category: string;
}

export default function ProductIntro({ translations, category }: Props) {
  const t = makeT(translations);

  // claves esperadas en locales/*.json
  const title = t(`products.${category}.title`);
  const description = t(`products.${category}.description`);
  const benefits = tArray(translations, `products.${category}.benefits`);

  // si todo está vacío, no renderizamos nada
  if (!title && !description && benefits.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl p-6 text-white">
      {title && (
        <h2 className="mb-6 text-6xl text-center font-extrabold text-green-500">
          {title}
        </h2>
      )}

      {description && (
        <p className="mb-6 text-2xl leading-relaxed">{description}</p>
      )}

      {benefits.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-xl leading-relaxed">
          {benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
