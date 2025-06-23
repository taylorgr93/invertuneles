/* components/home/WelcomeGateClient.tsx */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface UIStrings {
  title: string;
  subtitle: string;
  more: string;
  aboutLink: string;
  contactLink: string;
}

interface Option {
  locale: string;
  label: string;
  flagSrc: string;
  href: string;
  gradient: string;
}

interface Props {
  locale: string;
  ui: UIStrings;
  options: readonly Option[];
}

export default function WelcomeGateClient({ locale, ui, options }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("welcome_seen")) setOpen(true);
  }, []);

  const close = () => {
    sessionStorage.setItem("welcome_seen", "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative flex w-[65vw] flex-col items-center gap-12 rounded-xl bg-white/90 p-10 shadow-2xl border-[7px] border-green-700">
        <button
          aria-label="Cerrar"
          onClick={close}
          className="absolute top-4 right-4 rounded-2xl p-2 text-black/70 hover:bg-green-500 cursor-pointer"
        >
          ✕
        </button>

        {/* cabecera */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/images/recurso-1-8.webp"
            alt="Logo Invertuneles"
            width={220}
            height={100}
            className="object-contain"
          />
          <h2 className="text-4xl font-bold text-green-700">{ui.title}</h2>
          <p className="text-2xl text-gray-700">{ui.subtitle}</p>
          <p className="text-xl text-gray-700">
            {ui.more}{" "}
            <Link
              href={`/${locale}/about`}
              onClick={close}
              className="font-semibold text-green-600 underline hover:text-green-500"
            >
              {ui.aboutLink}
            </Link>{" "}
            /{" "}
            <Link
              href={`/${locale}/contact`}
              onClick={close}
              className="font-semibold text-green-600 underline hover:text-green-500"
            >
              {ui.contactLink}
            </Link>
          </p>
        </div>

        {/* opciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-6">
          {options.map(({ locale: loc, label, flagSrc, href, gradient }) => (
            <Link
              key={loc}
              href={href}
              onClick={close}
              className={`flex flex-col items-center justify-center
                          w-[90%] h-[18vh] max-h-[220px]
                          rounded-lg bg-gradient-to-br ${gradient}
                          px-6 py-5 text-white text-2xl font-semibold shadow-lg
                          transition hover:scale-105`}
            >
              <Image src={flagSrc} alt={loc} width={100} height={80} />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
