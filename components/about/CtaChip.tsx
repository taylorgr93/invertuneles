/* components/common/CtaChip.tsx */
import Image from "next/image";

interface CtaChipProps {
  /** Texto que vendrá del archivo de traducciones (`t("cta_chip.text")`) */
  message: string;
  /** Si pasas un emoji (p. ej. "✨") se mostrará; si no, se usa la imagen */
  emoji?: string;
  /** Ruta en /public para un icono alternativo  */
  imgSrc?: string;
  imgAlt?: string;
}

export default function CtaChip({
  message,
  emoji,
  imgSrc,
  imgAlt = "icon",
}: CtaChipProps) {
  return (
    <section className="my-20 flex justify-center">
      <button
        className="
          group relative isolate
          flex items-center justify-center gap-6
          w-full max-w-4xl px-10 py-12
          rounded-3xl
          text-4xl sm:text-5xl font-extrabold tracking-wide text-white text-center
          bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500
          shadow-2xl ring-4 ring-white/10
          transition-transform duration-200
          hover:scale-105 active:scale-95
        "
      >
        {/* Icono */}
        {emoji ? (
          <span className="text-6xl drop-shadow-md">{emoji}</span>
        ) : imgSrc ? (
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={80}
            height={80}
            className="drop-shadow-md object-contain"
            priority
          />
        ) : null}

        {/* Mensaje traducido */}
        <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          {message}
        </span>

        {/* Glow dinámico al hacer hover */}
        <span
          className="
            absolute -z-10 inset-0 rounded-3xl
            bg-gradient-to-r from-green-400/40 to-lime-300/40
            blur-xl opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />
      </button>
    </section>
  );
}
