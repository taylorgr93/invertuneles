/* app/[locale]/page.tsx */
import { use } from "react";
import { makeT } from "@/lib/makeT";
import { tArray } from "@/lib/tArray";
import { getTranslations, Dict } from "@/lib/getTranslations";
import VideoBackground from "@/components/home/VideoBackground";
import HomeHighlight from "@/components/home/HomeHighlight";
import Divider from "@/components/common/Divider";
import UpcomingEvents, { EventCard } from "@/components/home/UpcomingEvents";

const events: EventCard[] = [
  // {
  //   id: 1,
  //   poster: "/images/home/events/22_and_23_may_event.webp",
  //   alt: "ExpoBerries 2025 Zamora-Jacona",
  // },
  // {
  //   id: 2,
  //   poster: "/images/home/events/AgroExpoSQ.webp",
  //   alt: "AgroExpoSQ 2025",
  // },
  {
    id: 3,
    poster: "/images/home/events/AneBerries.webp",
    alt: "AneBerries",
  },
  // {
  //   id: 4,
  //   poster: "/images/home/events/22_and_23_may_event.webp",
  //   alt: "Congreso de plásticos agrícolass",
  // },
  // {
  //   id: 5,
  //   poster: "/images/home/events/22_and_23_may_event.webp",
  //   alt: "Congreso de plásticos agrícolasss",
  // },
];

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
    <>
      <section className="relative w-full isolate">
        {/* vídeo */}
        <div className="relative h-[60vh] md:h-screen">
          <VideoBackground
            src="/videos/VideoHome2.mp4"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* overlay global muy sutil */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* ---------- TEXTO DESKTOP (sobre el vídeo) ---------------- */}
          <div
            className="
              hidden lg:flex
              absolute inset-0 z-30
              lg:w-[34%] xl:w-[30%]                    /* >⅓ <½ */
              items-center
              px-6
              whitespace-pre-line"
          >
            {/* tarjeta translúcida */}
            <div className="bg-black/10 backdrop-blur-sm p-6 lg:mt-26 xl:mt-20 rounded-lg space-y-6">
              <h1 className="text-[#2d553e] text-2xl lg:text-4xl text-center font-bold leading-snug">
                {t("home.were")}
              </h1>
              <h2 className="text-white lg:text-lg xl:text-xl font-semibold leading-snug text-justify">
                {t("home.summary")}
              </h2>
            </div>
          </div>
        </div>

        {/* ---------- TEXTO MOBILE (bajo el vídeo) ------------------- */}
        <div className="block lg:hidden px-6 py-8">
          <div className="bg-black/60 backdrop-blur-sm p-6 rounded-lg space-y-4 whitespace-pre-line">
            <h1 className="text-green-400 text-4xl text-center font-bold leading-snug">
              {t("home.were")}
            </h1>
            <h2 className="text-white sm:text-xl md:text-2xl text-center font-medium leading-snug">
              {t("home.summary")}
            </h2>
          </div>
        </div>
      </section>

      {/* -------- RESTO DEL CONTENIDO (scroll) ----------------------- */}
      <Divider />

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
            src: "/images/products/tights/MALLA SOMBRA.webp",
            alt: "Invernadero tipo B",
          },
          {
            key: 3,
            src: "/images/products/tights/PELICULA ATRAPA INSECTOS_3_11zon.webp",
            alt: "Interior",
          },
          {
            key: 4,
            src: "/images/products/greenhouses/Macrotunel_Apertura.webp",
            alt: "Sustratos",
          },
        ]}
      />

      <Divider />

      <UpcomingEvents title={t("UpcomingEvents.next_events")} events={events} />

      <Divider />
    </>
  );
}
