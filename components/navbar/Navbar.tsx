import React from "react";
import Image from "next/image";
import { useTranslation } from "../../lib/useTranslation";
import LanguageSwitcher from "../LanguageSwitcher";

export default async function Navbar({ locale }: any) {
  const { t } = await useTranslation(locale);

  return (
    <div className="w-full bg-white sticky top-0 z-50 shadow-md">
      {/* <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded"> */}
      <nav className="flex flex-row p-4 m-4 md:flex-row justify-end items-center bg-amber-400">
        <div className="w-1/3 relative h-16 bg-black">
          <Image
            src="/recurso-1-8.webp"
            alt="logo"
            fill // Usa "fill" para ajustar la imagen al contenedor
            sizes="(max-width: 768px) 200px, 300px" // Esto ayuda con la optimización del rendimiento
            className="object-contain" // Cambiar a "object-cover" si prefieres que llene el contenedor
          />
        </div>

        <div className="w-1/3 flex flex-row justify-between bg-blue-400">
          <a className="text-2xl" href={`/${locale}/about`}>
            {t("pages.about")}
          </a>
          <a className="text-2xl" href={`/${locale}/products`}>
            {t("pages.products")}
          </a>
          <a className="text-2xl" href={`/${locale}/contact`}>
            {t("pages.contact")}
          </a>
        </div>

        <div className="w-1/8 flex flex-row justify-center bg-green-400">
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
}
