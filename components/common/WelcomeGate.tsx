/* components/home/WelcomeGate.tsx */
import { use } from "react";
import { getTranslations } from "@/lib/getTranslations";
import { makeT } from "@/lib/makeT";
import WelcomeGateClient from "./WelcomeGateClient";

export default function WelcomeGate({ locale }: { locale: string }) {
  const t = makeT(use(getTranslations(locale)));

  const ui = {
    title: t("welcome.title"),
    subtitle: t("welcome.subtitle"),
    more: t("welcome.more"),
    aboutLink: t("welcome.aboutLink"),
    contactLink: t("welcome.contactLink"),
  };

  const options = [
    {
      locale: "es",
      label: t("locals.es"),
      flagSrc: "/icons/flags/mexico.webp",
      href: "/es",
      gradient: "from-green-600 to-green-500",
    },
    {
      locale: "en",
      label: t("locals.en"),
      flagSrc: "/icons/flags/estados-unidos.webp",
      href: "/en",
      gradient: "from-emerald-600 to-emerald-500",
    },
  ] as const;

  return <WelcomeGateClient locale={locale} ui={ui} options={options} />;
}
