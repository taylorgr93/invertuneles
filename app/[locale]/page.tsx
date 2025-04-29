// app/page.tsx
import { use } from "react";
import { getTranslations, Dict } from "@/lib/getTranslations";
import VideoBackground from "@/components/home/VideoBackground";

export default function Home(props: { params: Promise<{ locale: string }> }) {
  const { locale } = use(props.params);
  const translations: Dict = use(getTranslations(locale));

  /* Helper local de traducción (solo strings, no se envía al client) */
  const t = (key: string) =>
    key.split(".").reduce<any>((obj, s) => obj?.[s], translations) ?? key;

  return (
    <div className="relative min-h-screen">
      {/* Video de fondo */}
      <VideoBackground
        src="/videos/videoHome.mp4"
        className="absolute top-0 left-0 -z-10"
      />

      {/* Contenido encima del video */}
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-white text-4xl font-bold drop-shadow-lg flex items-center justify-center h-full text-center">
            {/* {t("greeting")} */}
            {t("home.were")}
          </h1>
        </main>
      </div>
    </div>
  );
}
