/* components/home/HomeHighlight.tsx */
"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Check, X } from "lucide-react";

type VideoItem = { key: number; src: string; poster: string; alt: string };
type Props = {
  locale: string;
  kicker: string;
  headline: string;
  benefits: string[];
  title: string;
  videos: VideoItem[];
};

/* tamaños (px) que usaremos en el carrusel ≥ sm ----------- */
const CARD = { base: 260, md: 288 }; // md≈w-72
const GAP = { base: 24, md: 32 }; //  gap-6 / gap-8

export default function HomeHighlight({
  kicker,
  headline,
  benefits,
  title,
  videos,
}: Props) {
  /* ───────────────── modal ───────────────── */
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<VideoItem | null>(null);

  /* ────────────── carrusel desktop ───────── */
  /* visible --4 en sm+, 3 en md+ (por el grow),  */
  const visible = 4;
  const maxIdx = Math.max(0, videos.length - visible);
  const [idx, setIdx] = useState(0);

  /* autoplay sólo si hay carrusel */
  useEffect(() => {
    if (videos.length <= visible) return;
    const id = setInterval(() => setIdx((i) => (i < maxIdx ? i + 1 : 0)), 4500);
    return () => clearInterval(id);
  }, [maxIdx, videos.length]);

  const go = (dir: "left" | "right") =>
    setIdx((i) =>
      dir === "left" ? Math.max(0, i - 1) : Math.min(maxIdx, i + 1)
    );

  /* true ⇢ grid mobile | false ⇢ carrusel sm+  */
  const useGridMobile = videos.length > 0;

  return (
    <section className="mx-auto my-20 max-w-7xl px-4 text-center">
      {/* encabezados -------------------------------------------------- */}
      <p className="mb-4 text-lg font-medium text-gray-300">{kicker}</p>
      <h2 className="mb-16 text-4xl font-extrabold leading-tight text-green-400 sm:text-6xl">
        {headline}
      </h2>

      {/* beneficios --------------------------------------------------- */}
      <div className="mb-20 grid gap-y-12 md:grid-cols-3">
        {benefits.map((b) => (
          <div key={b} className="flex flex-col items-center gap-6">
            <Check size={48} strokeWidth={2.5} className="text-white" />
            <p className="max-w-xs text-lg font-medium text-white">{b}</p>
          </div>
        ))}
      </div>

      {/* título de la tira ------------------------------------------- */}
      <h3 className="mb-8 text-xl font-extrabold tracking-widest text-white">
        {title}
      </h3>

      {/* ============   VISTA < 640 PX  – GRID ======================= */}
      {useGridMobile && (
        <ul className="mb-12 grid grid-cols-1 gap-6 sm:hidden">
          {videos.map((v) => (
            <li key={v.key}>
              <video
                src={v.src}
                poster={v.poster}
                onClick={() => {
                  setCurrent(v);
                  setOpen(true);
                }}
                preload="metadata"
                muted
                playsInline
                className="h-44 w-full cursor-pointer rounded-xl object-cover ring-4 ring-emerald-400/60"
              />
            </li>
          ))}
        </ul>
      )}

      {/* ============   VISTA ≥ sm  – CARRUSEL ======================= */}
      {videos.length > 0 && (
        <div className="relative hidden sm:block">
          {/* flechas ------------------------------------------------ */}
          {videos.length > visible && (
            <>
              <button
                aria-label="Anterior"
                onClick={() => go("left")}
                disabled={idx === 0}
                className="
                  pointer-events-auto
                  absolute -left-10 top-1/2 -translate-y-1/2 z-20
                  rounded-full bg-black/60 p-2 text-white
                  hover:bg-black disabled:opacity-30
                "
              >
                <ChevronLeft size={28} />
              </button>
              <button
                aria-label="Siguiente"
                onClick={() => go("right")}
                disabled={idx === maxIdx}
                className="
                  pointer-events-auto
                  absolute -right-10 top-1/2 -translate-y-1/2 z-20
                  rounded-full bg-black/60 p-2 text-white
                  hover:bg-black disabled:opacity-30
                "
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          {/* track wrapper con p-x para evitar que las flechas pisen  */}
          <div className="overflow-hidden px-10 md:px-14">
            <ul
              style={{
                transform: `translateX(-${
                  idx * (CARD.base + GAP.base)
                }px)` /* base en sm; md se sobre-escribe */,
                transition: "transform 600ms",
              }}
              className="
                flex gap-6 md:gap-8
                md:[transform:translateX(calc(-_var(--i)_*_304px))]
              "
            >
              {videos.map((v) => (
                <li key={v.key} className="shrink-0">
                  <div
                    role="button"
                    onClick={() => {
                      setCurrent(v);
                      setOpen(true);
                    }}
                    className="
                      relative mt-6 mb-6 h-36 w-64
                      cursor-pointer overflow-hidden rounded-2xl
                      ring-4 ring-emerald-400/60
                      transition-transform duration-500 hover:scale-105
                    "
                  >
                    <video
                      src={v.src}
                      poster={v.poster}
                      preload="metadata"
                      className="h-full w-full object-cover"
                      muted
                      playsInline
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ────────── modal vídeo ────────── */}
      {open && current && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[80vh] w-[90vw] sm:h-[75vh] sm:w-[75vw]"
          >
            <video
              src={current.src}
              poster={current.poster}
              controls
              autoPlay
              className="h-full w-full rounded-xl object-contain"
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute -right-4 -top-4 rounded-full bg-white/90 p-2 text-black shadow-lg hover:bg-green-600 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
