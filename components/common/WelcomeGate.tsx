"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const OPTIONS = [
  {
    locale: "es",
    label: "Español",
    flagSrc: "/icons/flags/mexico.webp",
    href: "/es",
    gradient: "from-green-600 to-green-500",
  },
  {
    locale: "en",
    label: "English",
    flagSrc: "/icons/flags/estados-unidos.webp",
    href: "/en",
    gradient: "from-emerald-600 to-emerald-500",
  },
] as const;

export default function WelcomeGate() {
  const [open, setOpen] = useState<boolean>(false);

  /* Mostrar solo la primera vez en esta sesión */
  useEffect(() => {
    if (sessionStorage.getItem("welcome_seen")) return;
    setOpen(true);
  }, []);

  const close = () => {
    // Solo se muestra la primera vez
    sessionStorage.setItem("welcome_seen", "1");
    setOpen(false);
    // se muetsra siempre que abren la pagian
    // setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/80 backdrop-blur-sm  
      "
    >
      {/* tarjeta central */}+{" "}
      <div
        className="
            relative w-[65vw] h-[65vh] max-w-none
            rounded-xl bg-white/90 p-10 shadow-2xl
            flex flex-col justify-center gap-12
            border-7 border-green-700
        "
      >
        {/* botón cerrar */}
        <button
          aria-label="Cerrar"
          onClick={close}
          className="absolute top-4 right-4 text-black/60 hover:bg-green-500"
        >
          ✕
        </button>

        {/* encabezado */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <Image
            src="/images/recurso-1-8.webp"
            alt="Logo Invertuneles"
            width={220}
            height={100}
            className="object-contain"
          />
          <h2 className="text-4xl font-bold text-center text-green-700">
            ¡Bienvenido! / Welcome!
          </h2>
          <p className="text-2xl text-center text-gray-700">
            Selecciona tu idioma para ver nuestros productos
          </p>
          <p className="text-2xl text-center text-gray-700">
            Select your language to see our products
          </p>
        </div>

        {/* opciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center">
          {OPTIONS.map(({ locale, label, flagSrc, href }) => (
            <Link
              key={locale}
              href={href}
              onClick={close}
              className="
                flex flex-col items-center justify-center
                w-[70%] h-[18vh] max-h-[220px]
                rounded-lg bg-gradient-to-br from-green-600 to-green-500
                px-6 py-5 text-white text-2xl font-semibold shadow-lg transition
                hover:scale-105
              "
            >
              <Image src={flagSrc} alt={locale} width={100} height={80} />
              {label}
            </Link>
          ))}
        </div>

        {/* mensaje 50 aniversario (ejemplo) */}
        {/* <p className="mt-8 text-center text-sm text-gray-600">
          <span className="font-semibold">50° Aniversario</span> – Gracias por
          formar parte de nuestra historia
        </p> */}
      </div>
    </div>
  );
}
