// app/page.tsx
import { useTranslation } from "@/lib/useTranslation";
import VideoBackground from "@/components/home/VideoBackground";

export default async function Home({ params }: any) {
  const { locale } = await params;
  // Desestructurar correctamente con `params.locale`
  const { t } = await useTranslation(locale);

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
