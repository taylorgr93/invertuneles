/* components/products/InquiryForm.tsx */
"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="my-16 rounded-xl bg-[#194440]/90 p-10 text-center text-white shadow-lg">
        <h3 className="mb-4 text-3xl font-extrabold">
          ¡Gracias, te contactaremos en seguida!
        </h3>
      </div>
    );
  }

  return (
    <section
      className="
        my-16 max-w-xl mx-auto rounded-xl
        bg-white/90 p-8 shadow-2xl ring-1 ring-[#194440]/20
      "
    >
      <h2 className="mb-6 text-center text-4xl font-extrabold text-[#194440]">
        ¡Proyectos 100 % personalizados!
      </h2>

      <p className="mb-8 text-lg text-gray-700 leading-relaxed">
        En Invertúneles sabemos que cada agricultor tiene diferentes necesidades
        y variables externas. Completa el formulario para conocer cuál es el
        sistema adecuado para ti.
      </p>

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          // Aquí podrías enviar los datos a una API / servicio externo.
          setSent(true);
        }}
      >
        {/* 1. Tipo de cultivo */}
        <div>
          <label className="mb-2 block font-semibold text-gray-800">
            1. ¿Qué tipo de cultivo manejas?
          </label>
          <input
            name="crop"
            required
            className="w-full rounded-md border-2 border-[#194440] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#194440]"
            placeholder="Ej. Fresa, Tomate, Arándano…"
          />
        </div>

        {/* 2. Zona / lugar */}
        <div>
          <label className="mb-2 block font-semibold text-gray-800">
            2. ¿En qué zona o lugar se encuentra tu cultivo?
          </label>
          <input
            name="location"
            required
            className="w-full rounded-md border-2 border-[#194440] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#194440]"
            placeholder="Ej. Zamora, Mich.; Valle del Cauca…"
          />
        </div>

        {/* 3. Nombre y teléfono */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold text-gray-800">
              3. Nombre
            </label>
            <input
              name="name"
              required
              className="w-full rounded-md border-2 border-[#194440] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#194440]"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-800">
              Teléfono
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full rounded-md border-2 border-[#194440] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#194440]"
              placeholder="Ej. +52 55 1234 5678"
            />
          </div>
        </div>

        {/* botón enviar */}
        <button
          type="submit"
          className="
            mt-6 w-full rounded-md bg-[#194440] py-3 text-lg font-bold text-white
            transition hover:bg-[#194440]/90 active:scale-95 cursor-pointer
          "
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
