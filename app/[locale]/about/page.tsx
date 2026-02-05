// app/about/page.tsx
import { use } from "react";
import type { Metadata } from "next";
import { makeT } from "@/lib/makeT";
import { getTranslations, Dict } from "@/lib/getTranslations";
import { tArray } from "@/lib/tArray";
import { PageProps } from "@/types/page";
// import Hero from "@/components/common/Hero";
import Divider from "@/components/common/Divider";
// import DualImages from "@/components/about/DualImages";
import InfoBlocks, { InfoItem } from "@/components/about/InfoBlocks";
// import heroAbout from "@/public/images/about/hero_about.webp";
import ImageWithColumns from "@/components/about/ImageWithColumns";
import ValuesSection from "@/components/about/ValuesSection";
import CtaChip from "@/components/about/CtaChip";
import VideoBackground from "@/components/home/VideoBackground";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    es: "Acerca de Nosotros - Invertuneles | Macrotuneles | Túneles Agrícolas y Berries",
    en: "About Us - Invertuneles | Agricultural Tunnels and Berries",
  };

  const descriptions = {
    es: "Somos una empresa centralizada en las personas, lo más importante son nuestros colaboradores agrícolas. Conoce nuestro equipo de expertos en agricultura protegida y túneles agrícolas.",
    en: "We are a people-centered company, our agricultural collaborators are the most important. Meet our team of experts in protected agriculture and agricultural tunnels.",
  };

  return {
    title: titles[locale as "es" | "en"],
    description: descriptions[locale as "es" | "en"],
    alternates: {
      canonical: `https://invertuneles.com/${locale}/about`,
      languages: {
        "es-MX": "https://invertuneles.com/es/about",
        "en-US": "https://invertuneles.com/en/about",
      },
    },
  };
}

export default function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const translations: Dict = use(getTranslations(locale));
  const t = makeT(translations);

  /* ---------- Construimos los bloques ---------- */
  const blocks: InfoItem[] = [
    {
      title: t("about.mission.title"),
      image: "/images/about/Mision.webp",
      paragraphs: tArray(translations, "about.mission.paragraphs"),
    },
    {
      title: t("about.vision.title"),
      image: "/images/about/vision.webp",
      paragraphs: tArray(translations, "about.vision.paragraphs"),
    },
    // {
    //   title: t("about.who.title"),
    //   image: "/images/about/Who_we_are.webp",
    //   paragraphs: tArray(translations, "about.who.paragraphs"),
    // },
  ];

  return (
    <div className="bg-black">
      <section className="relative h-screen w-full isolate overflow-hidden">
        {/* <span className="text-7xl">{t("pages.about")}</span> */}
        <VideoBackground
          src="/videos/AcercaDe.MP4"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>
      {/* <Hero
        src={heroAbout}
        alt={t("pages.about_hero_alt")}
        priority
        // sizes="100vw"
        sizes="(max-width:768px) 100vw, (max-width:1280px) 75vw, 1920px"
        placeholder="blur"
      /> */}
      <Divider />
      <InfoBlocks items={blocks} />;
      <Divider />
      <ImageWithColumns
        src="/images/about/who_we_are.webp"
        alt="Strategy diagram"
        title={t("about.who.title")}
        subtitleLeft={t("about.who.subtitle_left")} // ← columna izquierda
        subtitleRight={t("about.who.subtitle_right")}
        paragraphsLeft={tArray(translations, "about.who.paragraphsLeft")}
        paragraphsRight={tArray(translations, "about.who.paragraphsRight")}
      />
      <Divider />
      <ValuesSection
        title={t("about.values.title")}
        values={tArray(translations, "about.values.items")}
      >
        <CtaChip
          message={t("about.cta_chip.text")}
          emoji="🚀" /* o imgSrc="/icons/ccchip.png" */
        />
      </ValuesSection>
      {/* <DualImages
        left={{
          src: "/images/about/compromiso-y-experiencia.webp",
          alt: "Compromiso y experiencia",
        }}
        right={{
          src: "/images/about/valores-mesa-de-trabajo.webp",
          alt: "Nuestros valores",
        }}
      /> */}
      <Divider />
    </div>
  );
}
