"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname?.split("/") || [];

  const changeLocale = (newLocale: string) => {
    const newPath = `/${newLocale}${
      segments.length > 2 ? "/" + segments.slice(2).join("/") : ""
    }`;
    router.push(newPath);
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() => changeLocale("es")}
        className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
      >
        🇲🇽 Español
      </button>
      <button
        onClick={() => changeLocale("en")}
        className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
      >
        🇺🇸 English
      </button>
    </div>
  );
}
