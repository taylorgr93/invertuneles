/* components/contact/ContactAdvisors.tsx */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Advisor = {
  id: number;
  name: string;
  role: string;
  card: string;
};

type Props = {
  title: string;
  paragraphs: string[];
  advisors: Advisor[];
};

export default function ContactAdvisors({
  title,
  paragraphs,
  advisors,
}: Props) {
  const [idx, setIdx] = useState(0);

  /* autoplay sencillo */
  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % advisors.length),
      3200
    );
    return () => clearInterval(id);
  }, [advisors.length]);

  const next = () => setIdx((i) => (i + 1) % advisors.length);
  const prev = () => setIdx((i) => (i - 1 + advisors.length) % advisors.length);

  return (
    <section className="mx-auto my-24 grid max-w-6xl gap-16 px-4 lg:grid-cols-2">
      {/* -------- Texto -------- */}
      <div className="space-y-6 text-white">
        <h2 className="text-4xl font-extrabold">{title}</h2>
        {paragraphs.map((p) => (
          <p
            key={p}
            className="leading-relaxed text-xl text-justify text-gray-300"
          >
            {p}
          </p>
        ))}
      </div>

      {/* -------- Tarjeta + controles -------- */}
      <div className="flex flex-col items-center">
        {/* tarjeta XL */}
        <div className="relative h-[34rem] w-72 overflow-hidden rounded-3xl shadow-2xl ring-4 ring-emerald-400/60">
          <Image
            key={advisors[idx].id}
            src={advisors[idx].card}
            alt={advisors[idx].name}
            fill
            sizes="288px" /* coincide con w-72 */
            className="object-cover transition-opacity duration-700"
            priority
          />
        </div>

        {/* flechas */}
        <div className="mt-6 flex gap-8">
          <button
            onClick={prev}
            className="cursor-pointer rounded-full p-3 hover:text-emerald-400"
          >
            <ChevronLeft size={36} strokeWidth={2.5} />
          </button>
          <button
            onClick={next}
            className="cursor-pointer rounded-full p-3 hover:text-emerald-400"
          >
            <ChevronRight size={36} strokeWidth={2.5} />
          </button>
        </div>

        {/* puntos */}
        <div className="mt-5 flex gap-3">
          {advisors.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setIdx(i)}
              className={`
                h-3 w-3 rounded-full
                ${i === idx ? "bg-white" : "bg-gray-500"}
                cursor-pointer
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
