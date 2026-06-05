// app/[locale]/products/[category]/page.tsx
import { use } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Hero from "@/components/common/Hero";
import Divider from "@/components/common/Divider";
import Products from "@/components/products/Products";
import heroProducts from "@/public/images/products/products_hero.webp";
import { makeT } from "@/lib/makeT";
import { getTranslations, Dict } from "@/lib/getTranslations";
import type { ProductDTO } from "@/types/ProductDTO";
import { useProducts } from "@/hooks/useProducts";
import ProductIntro from "@/components/products/ProductIntro";
import CaseStudies from "@/components/products/CaseStudies";
import { CaseStudy } from "@/components/products/CaseStudies";
import InquiryForm from "@/components/products/InquiryForm";
import ValueCropsBar from "@/components/products/ValueCropsBar";

type Category = ProductDTO["category"];
type Locale = "es" | "en";
type CategoryMeta = Record<Locale, { title: string; description: string }>;

const CATEGORY_META: Record<string, CategoryMeta> = {
  greenhouses: {
    es: {
      title: "Invernaderos y Macrotúneles para Agricultura Protegida",
      description:
        "Invernaderos y macrotúneles de alta tecnología para cultivo de berries, hortalizas y floricultura en México. Mayor producción, menor costo. Solicita asesoría.",
    },
    en: {
      title: "Greenhouses and Macro Tunnels for Protected Agriculture",
      description:
        "High-tech greenhouses and macro tunnels for berry, vegetable and floriculture growing in Mexico. Higher yields, lower costs. Request a consultation.",
    },
  },
  "plastic-films": {
    es: {
      title: "Plásticos Agrícolas y Acolchados con Tecnología Israelí",
      description:
        "Plásticos agrícolas, acolchados y películas con tecnología israelí. Protege tus cultivos y aumenta tu rendimiento. Los mejores plásticos agrícolas en México.",
    },
    en: {
      title: "Agricultural Plastics and Mulch Films with Israeli Technology",
      description:
        "Agricultural plastics, mulch films and covers with Israeli technology. Protect your crops and boost your yields. The best agricultural plastics in Mexico.",
    },
  },
  tights: {
    es: {
      title: "Mallas Agrícolas para Cultivos Protegidos",
      description:
        "Mallas agrícolas de alta resistencia para proteger tus cultivos del viento, insectos y granizo. Soluciones especializadas para agricultura protegida en México.",
    },
    en: {
      title: "Agricultural Shade Nets for Protected Crops",
      description:
        "High-resistance agricultural nets to protect your crops from wind, insects and hail. Specialized protected agriculture solutions in Mexico.",
    },
  },
  accessories: {
    es: {
      title: "Accesorios para Túneles y Sistemas Agrícolas",
      description:
        "Accesorios y componentes para sistemas de túneles agrícolas y macrotúneles. Todo lo necesario para instalar y mantener tu sistema de agricultura protegida.",
    },
    en: {
      title: "Accessories for Agricultural Tunnels and Systems",
      description:
        "Accessories and components for agricultural tunnel systems and macro tunnels. Everything you need to install and maintain your protected agriculture system.",
    },
  },
  substrates: {
    es: {
      title: "Sustratos para Cultivos en Invernaderos y Macrotúneles",
      description:
        "Sustratos de alta calidad para cultivos en macrotúneles e invernaderos. Optimiza el crecimiento de berries y hortalizas con los mejores sustratos agrícolas.",
    },
    en: {
      title: "Substrates for Greenhouse and Macro Tunnel Crops",
      description:
        "High-quality substrates for crops in macro tunnels and greenhouses. Optimize the growth of berries and vegetables with the best agricultural substrates.",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  const l = (locale as Locale) in { es: 1, en: 1 } ? (locale as Locale) : "es";
  const meta = CATEGORY_META[category]?.[l] ?? CATEGORY_META.greenhouses[l];

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://invertuneles.com/${locale}/products/${category}`,
      languages: {
        "es-MX": `https://invertuneles.com/es/products/${category}`,
        "en-US": `https://invertuneles.com/en/products/${category}`,
      },
    },
  };
}

const ALLOWED: readonly Category[] = [
  "greenhouses",
  "plastic-films",
  "tights",
  "accessories",
  "substrates",
];

export default function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = use(params);

  // validar slug
  if (!ALLOWED.includes(category as Category)) notFound();

  // traducciones y productos
  const translations: Dict = use(getTranslations(locale));
  const t = makeT(translations);
  const all = useProducts(locale);
  const products = all.filter((p) => p.category === category);

  const studies = (translations.caseStudies ?? []) as CaseStudy[];

  return (
    <div className="bg-black">
      <Hero
        src={heroProducts}
        alt={t(`categories.${category}`)}
        priority
        sizes="(max-width:768px) 100vw, (max-width:1280px) 75vw, 1920px"
        placeholder="blur"
      />
      <Divider />
      <ProductIntro translations={translations} category={category} />
      <ValueCropsBar translations={translations} category={category} />
      <Divider />
      <Products items={products} />
      <Divider />
      {category === "greenhouses" && (
        <>
          <CaseStudies
            heading={t("caseStudiesHeading")}
            studies={studies}
            locale={locale}
          />
          <Divider />
          <InquiryForm translations={translations} /> <Divider />
        </>
      )}
    </div>
  );
}
