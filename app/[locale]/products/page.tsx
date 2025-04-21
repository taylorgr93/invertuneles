import { useTranslation } from "../../../lib/useTranslation";

export default async function ProductsPage({ params }: any) {
  const { locale } = await params;
  const { t } = await useTranslation(locale);

  return (
    <>
      <span className="text-7xl">{t("pages.products")}</span>
    </>
  );
}
