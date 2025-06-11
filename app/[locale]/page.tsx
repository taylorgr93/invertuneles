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
  {
    id: 1,
    poster: "/images/home/events/22_and_23_may_event.webp",
    alt: "ExpoBerries 2025 Zamora-Jacona",
  },
  // {
  //   id: 2,
  //   poster: "/images/home/events/22_and_23_may_event.webp",
  //   alt: "Greentech México 2025",
  // },
  // {
  //   id: 3,
  //   poster: "/images/home/events/22_and_23_may_event.webp",
  //   alt: "Congreso de plásticos agrícolas",
  // },
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
            src="/videos/videoHome.mp4"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <Divider />

      {/* ---------- TEXTO MOBILE (bajo el vídeo) ------------------- */}
      <div className="min-w-lg px-12 rounded-lg space-y-4 whitespace-pre-line">
        <h1 className="text-green-400 text-4xl lg:text-6xl text-center font-bold leading-snug">
          {t("home.were")}
        </h1>
        <h2 className="text-white sm:text-2xl lg:text-3xl text-center font-medium leading-snug">
          {t("home.summary")}
        </h2>
      </div>

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
            src: "/images/products/plastic-films/PELICULA ATRAPA INSECTOS_3_11zon.webp",
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
