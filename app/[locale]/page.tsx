/* app/page.tsx */
import { use } from "react";
import { makeT } from "@/lib/makeT";
import { getTranslations, Dict } from "@/lib/getTranslations";
import VideoBackground from "@/components/home/VideoBackground";

export default function Home(props: { params: Promise<{ locale: string }> }) {
  const { locale } = use(props.params);
  const translations: Dict = use(getTranslations(locale));
  const t = makeT(translations);

  return (
    <div className="relative min-h-screen">
      {/* Video de fondo */}
      <VideoBackground
        src="/videos/videoHome.mp4"
        className="absolute inset-0 -z-10"
      />

      {/* Contenedor del texto */}
      <div
        // className="flex min-h-screen items-center justify-center px-4 sm:px-10"
        className="flex items-center justify-center p-8"
      >
        <h1 className="max-w-lg text-center text-2xl sm:text-4xl font-bold leading-snug tracking-tight text-white drop-shadow-lg">
          {t("home.were")}
        </h1>
      </div>
    </div>
  );
}
