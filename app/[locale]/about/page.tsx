// app/about/page.tsx
import { use } from "react";
import type { Metadata } from "next";
import { makeT } from "@/lib/makeT";
import { getTranslations, Dict } from "@/lib/getTranslations";
import { tArray } from "@/lib/tArray";
import Hero from "@/components/common/Hero";
import Divider from "@/components/common/Divider";
// import DualImages from "@/components/about/DualImages";
import InfoBlocks, { InfoItem } from "@/components/about/InfoBlocks";
import heroAbout from "@/public/images/about/hero_about.webp";
import ImageWithColumns from "@/components/about/ImageWithColumns";
import ValuesSection from "@/components/about/ValuesSection";
import CtaChip from "@/components/about/CtaChip";

export const metadata: Metadata = {
  title: "Página Acerca de",
  description:
    "Nuestra empresa ofrece una agenda de asesores disponibles para atender cualquier necesidad que pueda tener. Nos especializamos en proporcionar servicios personalizados para asegurar que cada cliente reciba la atención que necesita. ¡No se pierda nuestros próximos eventos! Para mantenerse al día, síganos en Instagram o dé un like a nuestra página. Para más información y cotizaciones, no dude en ponerse en contacto con nosotros. Estamos aquí para ayudarle a encontrar soluciones efectivas y personalizadas. Su satisfacción es nuestra prioridad. ¡Esperamos poder servirle pronto!",
  keywords: ["acerca de", "acerca de nosotros", "..."],
};

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
      {/* <span className="text-7xl">{t("pages.about")}</span> */}
      <Hero
        src={heroAbout}
        alt={t("pages.about_hero_alt")}
        priority
        // sizes="100vw"
        sizes="(max-width:768px) 100vw, (max-width:1280px) 75vw, 1920px"
        placeholder="blur"
      />
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
