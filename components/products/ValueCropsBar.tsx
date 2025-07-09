/* components/products/ValueCropsBar.tsx  (Server Component) */
import Image from "next/image";
import { Dict } from "@/lib/getTranslations";

interface CropItem {
  label: string;
  icon: string; // ruta en /public
}

interface Props {
  translations: Dict;
  category: string; // p. ej. "greenhouses"
}

interface ProductContent {
  title?: string;
  description?: string;
  benefitsHeading?: string;
  benefits?: { label: string; icon: string }[];

  /* nuevas claves ↓ */
  valueCropsHeading?: string;
  valueCrops?: CropItem[];
}

export default function ValueCropsBar({ translations, category }: Props) {
  const product = translations.products?.[category] as
    | ProductContent
    | undefined;

  const crops = product?.valueCrops ?? [];
  const heading = product?.valueCropsHeading ?? "Cultivos de valor";

  if (!crops.length) return null; // nada que mostrar

  return (
    <section className="mx-auto w-full lg:w-[80%] my-12 rounded-2xl bg-white p-4 shadow-inner">
      <h3 className="p-4 text-center text-4xl font-extrabold text-[#194440]">
        {heading}
      </h3>

      {/* grid 2 / 3 / 5 columnas */}
      <ul
        className="
              flex flex-wrap justify-center-safe gap-10
              sm:gap-12 lg:gap-16
            "
      >
        {crops.map(({ label, icon }) => (
          <li key={label} className="flex flex-col items-center gap-6">
            <Image
              src={icon}
              alt={label}
              width={220}
              height={220}
              sizes="(max-width:768px) 104px, (max-width:1024px) 144px, 192px"
              className="h-24 w-24 md:h-36 md:w-36 object-contain rounded-xl"
              priority
            />
            <span className="max-w-[8rem] text-center text-lg font-bold leading-snug text-[#194440] whitespace-normal break-words">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
