"use client";

import Link from "next/link";
import { makeT } from "@/lib/makeT";
import { Dict } from "@/lib/getTranslations";

type Props = {
  translations: Dict;
};

export default function FooterClient({ translations }: Props) {
  const t = makeT(translations);

  return (
    <footer className="bg-black text-white px-6 md:px-16 py-14">
      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-1 lg:grid-cols-3">
        {/* ───────── Columna 1 ───────── */}
        <address className="not-italic space-y-4 text-sm md:text-base">
          {/* ── Correo ────────────────────── */}
          <Link
            href="mailto:ventas@invertuneles.com"
            className="flex items-start gap-3 group hover:text-green-500 transition"
          >
            {/* el icono hereda el color de la group */}
            <svg
              className="w-7 h-7 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
              />
            </svg>

            <p className="text-xl">ventas@invertuneles.com</p>
          </Link>

          {/* ── Dirección ─────────────────── */}
          <Link
            href="https://maps.app.goo.gl/F8wrgQsPYH4864q96" /* mismo enlace solo más corto */
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 group hover:text-green-500 transition leading-tight"
          >
            <svg
              className="w-7 h-7 mt-0.5 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 11a3 3 0 100-6 3 3 0 000 6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.5 10.5c0 7.5-7.5 12-7.5 12S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <p className="text-xl">
              Morelia‑Guadalajara, 59835 Jacona de Plancarte, Mich.
            </p>
          </Link>

          {/* ──── WhatsApp ─────────────── */}
          <Link
            href="https://wa.me/523511166243"
            target="_blank"
            className="flex items-start gap-3 group hover:text-green-500 transition"
          >
            <svg
              className="w-7 h-7 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.04 2A9.94 9.94 0 002 11.99c0 1.76.46 3.47 1.34 4.98L2 22l5.15-1.31a9.93 9.93 0 004.89 1.25h.03A9.94 9.94 0 0022 11.99 9.94 9.94 0 0012.04 2zm5.68 14.52c-.24.67-1.39 1.28-1.93 1.36-.5.08-1.1.11-1.77-.12-.4-.13-.91-.29-1.56-.57a9.63 9.63 0 01-3.42-2.7 8.71 8.71 0 01-1.8-3.17c-.19-.52-.02-1.15.26-1.5.27-.34.6-.43.93-.43h.67c.26 0 .39.02.56.44.24.59.83 2.04.9 2.19.07.15.12.33.02.52-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.15-.3.3-.13.59.17.28.77 1.26 1.64 2.04 1.12 1.01 2.06 1.33 2.33 1.48.26.15.41.12.56-.07.15-.19.65-.75.83-1 .17-.26.34-.22.56-.15.23.07 1.47.7 1.72.83.26.12.43.19.5.3.08.12.08.67-.15 1.34z"></path>
            </svg>
            <p className="text-xl">WhatsApp</p>
          </Link>

          {/* ──── Instagram ─────────────── */}
          <Link
            href="https://www.instagram.com/Invertuneles"
            target="_blank"
            className="flex items-start gap-3 group hover:text-green-500 transition"
          >
            <svg
              className="w-7 h-7 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <p className="text-xl">Instagram</p>
          </Link>

          {/* ──── LinkedIn ─────────────── */}
          <Link
            href="https://www.linkedin.com/company/invertuneles-corp/posts/?feedView=all"
            target="_blank"
            className="flex items-start gap-3 group hover:text-green-500 transition"
          >
            <svg
              className="w-7 h-7 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            </svg>
            <p className="text-2xl">LinkedIn</p>
          </Link>

          {/* ──── Facebook ─────────────── */}
          <Link
            href="https://www.facebook.com/profile.php?id=100063643256369"
            target="_blank"
            className="flex items-start gap-3 group hover:text-green-500 transition"
          >
            <svg
              className="w-7 h-7 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
            </svg>
            <p className="text-2xl">Facebook</p>
          </Link>
        </address>

        {/* ───────── Columna 2 ───────── */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            {t("footer.officePhones")}
          </h3>
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0">
              {/* phone in circle */}
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-white">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5" /* un poco más delgado */
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 4.5l4.5 1.5 3 6-2 2c1.5 3 4.5 6 7.5 7.5l2-2 6 3 1.5 4.5c-3 1.5-7.5 0-13.5-6S.5 7.5 2 4.5z" />
                </svg>
              </span>
            </div>
            <p className="space-y-1 text-xl md:text-2xl">+52 351 121 2843</p>
          </div>
        </div>

        {/* ───────── Columna 3 ───────── */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(t("footer.message")); // placeholder
          }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold">{t("footer.contact")}</h3>

          <div>
            <label className="block mb-1 text-sm">{t("footer.name")}</label>
            <input
              required
              type="text"
              placeholder={t("footer.namePlaceholder")}
              className="w-full bg-transparent border border-gray-500 rounded px-3 py-2 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">{t("footer.email")}</label>
            <input
              required
              type="email"
              placeholder={t("footer.email")}
              className="w-full bg-transparent border border-gray-500 rounded px-3 py-2 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">
              {t("footer.comments") ?? "Comentarios"}
            </label>
            <textarea
              rows={4}
              placeholder={t("footer.commentsPlaceholder")}
              className="w-full bg-transparent border border-gray-500 rounded px-3 py-2 resize-none outline-none focus:border-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gray-600 hover:bg-green-600 transition px-6 py-2 rounded text-sm md:text-base"
          >
            {t("footer.send")}
          </button>
        </form>
      </div>

      {/* Línea inferior */}
      <div className="mt-12 text-center text-md text-gray-400">
        © {new Date().getFullYear()} Invertúneles. {t("footer.rights")}
      </div>
    </footer>
  );
}
