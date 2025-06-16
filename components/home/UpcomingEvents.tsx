/* components/home/UpcomingEvents.tsx */
"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type EventCard = { id: number; poster: string; alt: string };

type Props = { title: string; events: EventCard[] };

export default function UpcomingEvents({ title, events }: Props) {
  const [idx, setIdx] = useState(0);

  /* autoplay */ const next = useCallback(() => {
    setIdx((i) => (i + 1) % events.length);
  }, [events.length]);

  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + events.length) % events.length);
  }, [events.length]);

  useEffect(() => {
    const id = setInterval(next, 4000); // ya no recreas la función aquí
    return () => clearInterval(id);
  }, [next]); // ← dependencia correcta

  return (
    <section className="mx-auto mt-16 max-w-5xl p-10 text-center">
      {/* título */}
      <h2 className="mb-10 text-5xl font-extrabold tracking-wider text-white">
        {title}
      </h2>

      {/* ------ visor ------ */}
      <div className="relative mx-auto w-full overflow-hidden">
        {/* track */}
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {events.map((ev) => (
            <div
              key={ev.id}
              className="flex-shrink-0 w-full flex justify-center"
            >
              <figure className="overflow-hidden w-80 sm:w-96 lg:w-[36rem] rounded-lg shadow-2xl">
                <Image
                  src={ev.poster}
                  alt={ev.alt}
                  width={1200}
                  height={1500}
                  className="object-contain bg-black transition-transform duration-500 hover:scale-105"
                  sizes="(max-width:640px) 20rem, (max-width:1024px) 24rem, 32rem"
                  priority={idx === 0}
                />
              </figure>
            </div>
          ))}
        </div>

        {/* ----- visor (flechas) ----- */}
        {events.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            >
              <ChevronRight size={40} />
            </button>
          </>
        )}
      </div>

      {/* puntos */}
      <div className="mt-6 flex justify-center gap-3">
        {events.length > 1 && (
          <div className="mt-6 flex justify-center gap-3">
            {events.map((e, i) => (
              <button
                key={e.id}
                onClick={() => setIdx(i)}
                className={`h-3 w-3 rounded-full ${
                  idx === i ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
