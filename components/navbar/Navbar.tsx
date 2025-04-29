// components/navbar/navbar.tsx
import { use } from "react";
import { getTranslations, Dict } from "@/lib/getTranslations";
import NavbarClient from "@/components/navbar/NavbarClient";

type Props = { locale: string };

export default function Navbar({ locale }: Props) {
  const translations: Dict = use(getTranslations(locale));
  return <NavbarClient locale={locale} translations={translations} />;
}
