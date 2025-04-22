import type { Metadata } from "next";
import { useTranslation } from "../../../lib/useTranslation";

export const metadata: Metadata = {
  title: "Página Acerca de",
  description:
    "Nuestra empresa ofrece una agenda de asesores disponibles para atender cualquier necesidad que pueda tener. Nos especializamos en proporcionar servicios personalizados para asegurar que cada cliente reciba la atención que necesita. ¡No se pierda nuestros próximos eventos! Para mantenerse al día, síganos en Instagram o dé un like a nuestra página. Para más información y cotizaciones, no dude en ponerse en contacto con nosotros. Estamos aquí para ayudarle a encontrar soluciones efectivas y personalizadas. Su satisfacción es nuestra prioridad. ¡Esperamos poder servirle pronto!",
  keywords: ["acerca de", "acerca de nosotros", "..."],
};

export default async function AboutPage({ params }: any) {
  const { locale } = await params;
  const { t } = await useTranslation(locale);

  return (
    <>
      <span className="text-7xl">{t("pages.about")}</span>
    </>
  );
}
