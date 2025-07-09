// app/[locale]/products/[category]/page.tsx
import { use } from "react";
import { notFound } from "next/navigation";
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
