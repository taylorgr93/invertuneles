// components/navbar/NavbarClient.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../LanguageSwitcher";
import { makeT } from "@/lib/makeT";
import { Dict } from "@/lib/getTranslations";

type Props = {
  locale: string;
  translations: Dict;
};

/* --------- 1. Config de enlaces en un solo lugar ---------------- */
const NAV_ITEMS = [
  { slug: "", labelKey: "pages.home" }, // /
  { slug: "/about", labelKey: "pages.about" }, // /about
  { slug: "/products", labelKey: "pages.products" },
  { slug: "/contact", labelKey: "pages.contact" },
  { slug: "/blog", labelKey: "pages.blog" },
  { slug: "/careers", labelKey: "pages.careers" },
] as const;

/* --------- 2. Componente Link estilizado reutilizable ----------- */
interface NavItemProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
  active?: boolean;
}

function NavItem({ href, onClick, children, active }: NavItemProps) {
  return (
    <Link href={href} onClick={onClick} className="group inline-block">
      <h2
        className={`
          px-4 py-2 md:p-0 text-3xl md:text-2xl font-semibold
          transition-all duration-200
          ${active ? "text-green-500" : "text-white"}
          group-hover:text-green-500
          [text-shadow:none]
          group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.9)]
        `}
      >
        {children}
      </h2>
    </Link>
  );
}

export default function NavbarClient({ locale, translations }: Props) {
  const t = makeT(translations);
  const pathname = usePathname(); // <- para resaltar link activo
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* --- Cerrar mobile-menu al hacer click fuera ------------------ */
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

  /* --- Render de los links reutilizando NavItem ----------------- */
  const renderLinks = (closeOnClick?: boolean) =>
    NAV_ITEMS.map(({ slug, labelKey }) => (
      <NavItem
        key={slug}
        href={`/${locale}${slug}`}
        active={pathname === `/${locale}${slug}`}
        onClick={closeOnClick ? () => setOpen(false) : undefined}
      >
        {t(labelKey)}
      </NavItem>
    ));

  return (
    <header className="fixed top-0 left-0 z-30 w-full backdrop-blur transition-colors">
      <nav className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo ---------------------------------------------------- */}
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

        {/* Botón hamburguesa ------------------------------------- */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white"
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

        {/* Links desktop ----------------------------------------- */}
        <div className="hidden md:flex items-center gap-6">
          {renderLinks()}
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Menú mobile ------------------------------------------- */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed top-0 right-0 z-50 h-screen w-full bg-black/80 flex justify-end md:hidden"
        >
          <div
            ref={menuRef}
            onClick={(e) => e.stopPropagation()}
            className="w-64 mt-20 bg-black rounded-lg p-6 flex flex-col items-center gap-6 shadow-xl"
          >
            {renderLinks(true)}
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
