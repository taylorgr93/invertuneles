// app/contact/page.tsx
import { use } from "react";
import type { Metadata } from "next";
import { getTranslations, Dict } from "../../../lib/getTranslations";

export const metadata: Metadata = {
  title: "Invertuneles",
  description:
    "Nuestra empresa ofrece una agenda de asesores disponibles para atender cualquier necesidad que pueda tener. Nos especializamos en proporcionar servicios personalizados para asegurar que cada cliente reciba la atención que necesita. ¡No se pierda nuestros próximos eventos! Para mantenerse al día, síganos en Instagram o dé un like a nuestra página. Para más información y cotizaciones, no dude en ponerse en contacto con nosotros. Estamos aquí para ayudarle a encontrar soluciones efectivas y personalizadas. Su satisfacción es nuestra prioridad. ¡Esperamos poder servirle pronto!",
  keywords: ["acerca de", "acerca de nosotros", "..."],
};

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const translations: Dict = use(getTranslations(locale));

  /* Helper local de traducción (solo strings, no se envía al client) */
  const t = (key: string): string => {
    let value: unknown = translations;

    for (const segment of key.split(".")) {
      if (
        typeof value === "object" &&
        value !== null &&
        segment in (value as Record<string, unknown>)
      ) {
        value = (value as Record<string, unknown>)[segment];
      } else {
        return key; // Fallback si no existe
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <>
      <span className="text-7xl">{t("pages.contact")}</span>
    </>
  );
}
