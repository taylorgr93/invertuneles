/* components/about/ValuesSection.tsx */
import { ReactNode } from "react";

interface ValuesSectionProps {
  title: string;
  values: string[];
  /** Elementos extra que quieras renderizar dentro (p. ej. <CtaChip />) */
  children?: ReactNode;
}

export default function ValuesSection({
  title,
  values,
  children,
}: ValuesSectionProps) {
  return (
    <section className="mx-auto my-20 max-w-6xl rounded-xl bg-gray-100 px-12 py-16 shadow-2xl">
      {/* título */}
      <h2 className="mb-12 text-center text-4xl font-extrabold tracking-wide text-green-700 drop-shadow-sm">
        {title}
      </h2>

      {/* badges */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          place-items-center gap-8
          mb-12
        "
      >
        {values.map((v) => (
          <span
            key={v}
            className="
              relative flex h-14 w-72 items-center justify-center overflow-hidden
              rounded-full bg-gradient-to-br from-green-600 to-green-500
              text-lg font-semibold tracking-wide text-white shadow-lg ring-1 ring-white/20
              transition hover:scale-105 hover:from-green-500 hover:to-green-400 hover:shadow-xl
            "
          >
            {v}
          </span>
        ))}
      </div>

      {/* contenido adicional (e.g. CtaChip) */}
      {children}
    </section>
  );
}
