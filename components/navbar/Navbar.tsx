// components/navbar/Navbar.tsx
import { use } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import { getTranslations } from "../../lib/getTranslations";

type Props = {
  locale: string;
};

export default function Navbar({ locale }: Props) {
  const { t } = use(getTranslations(locale));

  return (
    <div className="w-full sticky top-0 z-50 shadow-md bg-black">
      <nav className="flex items-center justify-between flex-wrap px-4 py-3 md:px-8">
        {/* LOGO */}
        <Link
          href="/"
          className="relative h-24 w-48 md:h-28 md:w-56 flex-shrink-0 block"
        >
          <Image
            src="/images/recurso-1-8.webp"
            alt="logo"
            fill
            sizes="(max-width: 768px) 192px, 256px"
            className="object-contain"
          />
        </Link>

        {/* LINKS + IDIOMA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
          {/* LINKS */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`/${locale}/about`}
              className="text-sm sm:text-base md:text-2xl font-medium text-white hover:text-green-500 transition"
            >
              {t("pages.about")}
            </a>
            <a
              href={`/${locale}/products`}
              className="text-sm sm:text-base md:text-2xl font-medium text-white hover:text-green-500 transition"
            >
              {t("pages.products")}
            </a>
            <a
              href={`/${locale}/contact`}
              className="text-sm sm:text-base md:text-2xl font-medium text-white hover:text-green-500 transition"
            >
              {t("pages.contact")}
            </a>
          </div>

          {/* IDIOMA */}
          <div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
}
