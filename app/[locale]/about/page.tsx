// app/about/page.tsx
import { use } from "react";
import type { Metadata } from "next";
import { makeT } from "@/lib/makeT";
import { getTranslations, Dict } from "@/lib/getTranslations";
import { tArray } from "@/lib/tArray";
import Hero from "@/components/common/Hero";
import InfoBlocks, { InfoItem } from "@/components/about/InfoBlocks";
import DualImages from "@/components/about/DualImages";

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
      title: t("about.who.title"),
      image: "/images/about/who_we_are.jpg",
      paragraphs: tArray(translations, "about.who.paragraphs"),
    },
    {
      title: t("about.mission.title"),
      image: "/images/about/our_mission.jpg",
      paragraphs: tArray(translations, "about.mission.paragraphs"),
    },
    {
      title: t("about.vision.title"),
      image: "/images/about/vision.jpg",
      paragraphs: tArray(translations, "about.vision.paragraphs"),
    },
  ];

  return (
    <>
      {/* <span className="text-7xl">{t("pages.about")}</span> */}
      <Hero
        src="/images/about/hero_about.jpg"
        alt={t("pages.about_hero_alt") ?? "About us hero"}
        priority
        sizes="100vw"
      />
      <InfoBlocks items={blocks} />;
      <DualImages
        left={{
          src: "/images/about/compromiso-y-experiencia.jpg",
          alt: "Compromiso y experiencia",
        }}
        right={{
          src: "/images/about/valores-mesa-de-trabajo.jpg",
          alt: "Nuestros valores",
        }}
      />
    </>
  );
}
