/* app/[locale]/page.tsx */
import { use } from "react";
import { makeT } from "@/lib/makeT";
import { tArray } from "@/lib/tArray";
import { getTranslations, Dict } from "@/lib/getTranslations";
import VideoBackground from "@/components/home/VideoBackground";
import HomeHighlight from "@/components/home/HomeHighlight";
import Divider from "@/components/common/Divider";

export default function Home(props: { params: Promise<{ locale: string }> }) {
  const { locale } = use(props.params);
  const translations: Dict = use(getTranslations(locale));
  const t = makeT(translations);

  /* -------- datos para el componente -------- */
  const kicker = t("homeHighlight.kicker");
  const headline = t("homeHighlight.headline");
  const benefits = tArray(translations, "homeHighlight.benefits");
  const title = t("homeHighlight.title");

  return (
    <div
      // className="relative min-h-screen"
      className="relative "
    >
      {/* video de fondo */}
      <VideoBackground
        src="/videos/videoHome.mp4"
        className="absolute inset-0 -z-10"
      />

      {/* texto centrado */}
      <div
        // className="flex items-center justify-center px-4 sm:px-10"
        className="flex items-center justify-center p-10"
      >
        <h1
          className="
            w-full max-w-6xl
            text-center text-xl sm:text-3xl lg:text-5xl
            font-bold leading-snug tracking-tight
            text-white drop-shadow-lg
          "
        >
          {t("home.were")}
        </h1>
      </div>
      <Divider />

      {/* HomeHighlight */}
      <HomeHighlight
        locale={locale}
        kicker={kicker}
        headline={headline}
        benefits={benefits}
        title={title}
        productImages={[
          {
            key: 1,
            src: "/images/products/products_hero.webp",
            alt: "Invernadero tipo A",
          },
          {
            key: 2,
            src: "/images/products/products_hero.webp",
            alt: "Invernadero tipo B",
          },
          {
            key: 3,
            src: "/images/products/products_hero.webp",
            alt: "Interior",
          },
          {
            key: 4,
            src: "/images/products/products_hero.webp",
            alt: "Sustratos",
          },
        ]}
      />
    </div>
  );
}
