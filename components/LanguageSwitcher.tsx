"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = pathname.split("/")[1]; // es o en

  const changeLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.split("/").slice(2).join("/");
    const newPath = `/${newLocale}${
      pathWithoutLocale ? "/" + pathWithoutLocale : ""
    }`;
    router.push(newPath);
    setOpen(false);
  };

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getFlag = (locale: string) => {
    return locale === "es" ? "🇲🇽" : "🇺🇸";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="cursor-pointer rounded-full w-10 h-10 text-2xl flex items-center justify-center border border-gray-300 shadow-sm hover:border-green-500"
        onClick={() => setOpen((prev) => !prev)}
      >
        {getFlag(currentLocale)}
      </button>

      {open && (
        // <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-md z-10">
        <div className="absolute right-0 mt-2 w-28 bg-black rounded">
          <button
            onClick={() => changeLocale("en")}
            className="cursor-pointer w-full px-4 py-2 text-left rounded-t text-sm transition-colors hover:bg-gray-50 hover:text-green-600"
          >
            English
          </button>
          <button
            onClick={() => changeLocale("es")}
            className="cursor-pointer w-full px-4 py-2 text-left rounded-b text-sm transition-colors hover:bg-gray-50 hover:text-green-600"
          >
            Español
          </button>
        </div>
      )}
    </div>
  );
}
