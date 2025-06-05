// components/navbar/NavbarClient.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import { makeT } from "@/lib/makeT";
import { Dict } from "@/lib/getTranslations";

type Props = {
  locale: string;
  translations: Dict;
};

export default function NavbarClient({ locale, translations }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = makeT(translations);

  /* Cerrar al click-fuera */
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  /* Links reutilizables */
  const navLinks = (
    <>
      <Link
        href={`/${locale}`}
        onClick={() => setOpen(false)}
        className="group inline-block" /* el Link controla el hover */
      >
        <h2 className="px-4 py-2 md:p-0 text-white text-3xl md:text-2xl font-semibold transition-all duration-200 group-hover:text-green-500 [text-shadow:none] group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.9)]">
          {t("pages.home")}
        </h2>
      </Link>
      <Link
        href={`/${locale}/about`}
        onClick={() => setOpen(false)}
        className="group inline-block" /* el Link controla el hover */
      >
        <h2 className="px-4 py-2 md:p-0 text-white text-3xl md:text-2xl font-semibold transition-all duration-200 group-hover:text-green-500 [text-shadow:none] group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.9)]">
          {t("pages.about")}
        </h2>
      </Link>
      <Link
        href={`/${locale}/products`}
        onClick={() => setOpen(false)}
        className="group inline-block" /* el Link controla el hover */
      >
        <h2 className="px-4 py-2 md:p-0 text-white text-3xl md:text-2xl font-semibold transition-all duration-200 group-hover:text-green-500 [text-shadow:none] group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.9)]">
          {t("pages.products")}
        </h2>
      </Link>
      <Link
        href={`/${locale}/contact`}
        onClick={() => setOpen(false)}
        className="group inline-block" /* el Link controla el hover */
      >
        <h2 className="px-4 py-2 md:p-0 text-white text-3xl md:text-2xl font-semibold transition-all duration-200 group-hover:text-green-500 [text-shadow:none] group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.9)]">
          {t("pages.contact")}
        </h2>
      </Link>
      {/* <Link
        href={`/${locale}/blog`}
        onClick={() => setOpen(false)}
        className="group inline-block"
      >
        <h2 className="px-4 py-2 md:p-0 text-white text-3xl md:text-2xl font-semibold transition-all duration-200 group-hover:text-green-500 [text-shadow:none] group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.9)]">
          {t("pages.blog")}
        </h2>
      </Link>
      <Link
        href={`/${locale}/careers`}
        onClick={() => setOpen(false)}
        className="group inline-block"
      >
        <h2 className="px-4 py-2 md:p-0 text-white text-3xl md:text-2xl font-semibold transition-all duration-200 group-hover:text-green-500 [text-shadow:none] group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.9)]">
          {t("pages.careers")}
        </h2>
      </Link> */}
    </>
  );

  return (
    <header className="w-full sticky top-0 z-50 bg-black shadow-md">
      <nav className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="relative h-24 w-56 md:h-32 md:w-72 flex-shrink-0"
        >
          <Image
            src="/images/recurso-1-8.webp"
            alt="logo"
            fill
            sizes="(max-width:768px) 192px, 256px"
            className="object-contain"
          />
        </Link>

        {/* Botón hamburguesa */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
        >
          {open ? (
            /* icono X */
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* icono ≡ */
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks}
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          onClick={() => setOpen(false)} // ← esto cierra al hacer clic fuera del panel
          className="fixed top-0 right-0 h-screen w-full bg-black/80 z-50 flex justify-end md:hidden"
        >
          <div
            ref={menuRef}
            onClick={(e) => e.stopPropagation()} // ← esto evita que se cierre al hacer clic dentro
            className="w-64 h-fit mt-20 bg-black rounded-lg p-6 flex flex-col items-center gap-6 shadow-xl"
          >
            {navLinks}
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
