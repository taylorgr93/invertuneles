import { use } from "react";
import { getTranslations, Dict } from "@/lib/getTranslations";
import FooterClient from "@/components/footer/FooterClient";

type Props = { locale: string };

export default function Footer({ locale }: Props) {
  const translations: Dict = use(getTranslations(locale));
  return <FooterClient locale={locale} translations={translations} />;
}
