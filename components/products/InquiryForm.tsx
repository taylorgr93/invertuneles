"use client";

import { useState } from "react";
import { Dict } from "@/lib/getTranslations";
import { makeT } from "@/lib/makeT";

type Props = { translations: Dict };

export default function InquiryForm({ translations }: Props) {
  const t = makeT(translations);

  const [sent, setSent] = useState(false);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true);
    setErr(null);

    const form = e.currentTarget;

    /* convierte inmediatamente a objeto */
    const fd = new FormData(form);
    const data = Object.fromEntries(fd) as {
      crop: string;
      location: string;
      name: string;
      phone: string;
    };

    /* … envía `data` … */
    try {
      // 2. Envía los datos a tu API / servicio
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Network error");

      setSent(true); // ← mostrará el mensaje de “gracias”
    } catch (err) {
      setErr("Ocurrió un problema. Inténtalo de nuevo.");
    } finally {
      setLoad(false);
    }
  };

  /* ─── estados de éxito / error ─── */
  if (sent)
    return (
      <div className="my-16 rounded-xl bg-[#194440]/90 p-10 text-center text-white shadow-lg">
        <h3 className="mb-4 text-3xl font-extrabold">{t("inquiry.success")}</h3>
      </div>
    );

  /* ─── formulario ─── */
  return (
    <section className="my-16 mx-auto max-w-xl rounded-xl bg-white/90 p-8 shadow-2xl ring-1 ring-[#194440]/20">
      <h2 className="mb-6 text-center text-4xl font-extrabold text-[#194440]">
        {t("inquiry.title")}
      </h2>

      <p className="mb-8 text-lg leading-relaxed text-gray-700 text-justify">
        {t("inquiry.intro")}
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* campos … (sin cambios) */}
        {/* cultivo */}
        <div>
          <label className="mb-2 block font-semibold text-gray-800">
            {t("inquiry.fieldCrop")}
          </label>
          <input
            name="crop"
            required
            placeholder={t("inquiry.phCrop")}
            className="w-full rounded-md border-2 border-[#194440] px-4 py-2 text-[#194440] focus:outline-none focus:ring-2 focus:ring-[#194440]"
          />
        </div>

        {/* zona */}
        <div>
          <label className="mb-2 block font-semibold text-gray-800">
            {t("inquiry.fieldZone")}
          </label>
          <input
            name="location"
            required
            placeholder={t("inquiry.phZone")}
            className="w-full rounded-md border-2 border-[#194440] px-4 py-2 text-[#194440] focus:outline-none focus:ring-2 focus:ring-[#194440]"
          />
        </div>

        {/* nombre-tel */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold text-gray-800">
              {t("inquiry.fieldName")}
            </label>
            <input
              name="name"
              required
              placeholder={t("inquiry.phName")}
              className="w-full rounded-md border-2 border-[#194440] px-4 py-2 text-[#194440] focus:outline-none focus:ring-2 focus:ring-[#194440]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-800">
              {t("inquiry.fieldPhone")}
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder={t("inquiry.phPhone")}
              className="w-full rounded-md border-2 border-[#194440] px-4 py-2 text-[#194440] focus:outline-none focus:ring-2 focus:ring-[#194440]"
            />
          </div>
        </div>

        {/* botón */}
        <button
          type="submit"
          disabled={load}
          className="mt-6 w-full cursor-pointer rounded-md bg-[#194440] py-3 text-lg font-bold text-white transition hover:bg-[#194440]/90 active:scale-95 disabled:opacity-60"
        >
          {/* {load ? "…" : t("inquiry.btnSend")} */}
          {load ? "Enviando…" : "Enviar"}
        </button>

        {err && (
          <p className="pt-4 text-center text-red-600">
            {t("inquiry.errorSend")}
          </p>
        )}
      </form>
    </section>
  );
}
