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
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/80 backdrop-blur-sm p-4 sm:p-6
      "
    >
      {/* Card */}
      <div
        className="
          relative w-full max-w-md sm:max-w-2xl lg:max-w-4xl
          max-h-[90dvh] overflow-y-auto
          rounded-2xl bg-white/95 shadow-2xl border-[6px] border-green-700
        "
      >
        {/* contenido con padding interno */}
        <div className="p-6 sm:p-10 flex flex-col items-center gap-8">
          {/* botón cerrar */}
          <button
            aria-label="Cerrar"
            onClick={close}
            className="absolute top-3 right-3 rounded-full p-2 text-black/70 hover:bg-green-500/20 cursor-pointer"
          >
            ✕
          </button>

          {/* cabecera */}
          <div className="flex flex-col items-center gap-4 text-center">
            <Image
              src="/images/recurso-1-8.webp"
              alt="Logo Invertuneles"
              width={200}
              height={90}
              className="object-contain"
            />

            <h2 className="text-3xl sm:text-4xl font-bold text-green-700">
              {ui.title}
            </h2>

            <p className="text-lg sm:text-2xl text-gray-700">{ui.subtitle}</p>

            <p className="text-base sm:text-xl text-gray-700">
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
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-5">
            {options.map(({ locale: loc, label, flagSrc, href, gradient }) => (
              <Link
                key={loc}
                href={href}
                onClick={close}
                className={`
                  flex flex-col items-center justify-center
                  w-full h-32 sm:h-40
                  rounded-lg bg-gradient-to-br ${gradient}
                  px-4 py-4 text-white text-2xl font-semibold shadow-lg
                  transition hover:scale-105
                `}
              >
                <Image
                  src={flagSrc}
                  alt={loc}
                  width={88}
                  height={64}
                  className="h-16 w-auto object-contain"
                />
                <span className="mt-2 text-xl sm:text-2xl">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
