// app/page.tsx
import { useTranslation } from "../../lib/useTranslation";

export default async function Home({ params }: any) {
  const { locale } = await params;
  // Desestructurar correctamente con `params.locale`
  const { t } = await useTranslation(locale);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>{t("greeting")}</h1>
      </main>
    </div>
  );
}
