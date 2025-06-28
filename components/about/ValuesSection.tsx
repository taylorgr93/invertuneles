/* components/about/ValuesSection.tsx */
import { ReactNode } from "react";

interface ValuesSectionProps {
  title: string;
  values: string[]; // 6-10 valores luce mejor
  children?: ReactNode; // p.ej. <CtaChip />
}

export default function ValuesSection({
  title,
  values,
  children,
}: ValuesSectionProps) {
  // diámetro del círculo (px). Cambia si quieres más/menos espacio
  const RADIUS = 220;

  // Calcula posición (x,y) de cada burbuja
  const positioned = values.map((v, i) => {
    const angle = (360 / values.length) * i - 90; // -90 ⇒ empieza arriba
    const rad = (angle * Math.PI) / 180;
    const x = RADIUS * Math.cos(rad);
    const y = RADIUS * Math.sin(rad);
    return { v, x, y };
  });

  return (
    <section className="mx-auto my-20 max-w-6xl rounded-xl bg-gray-100 px-6 py-16 shadow-2xl">
      {/* --- vista móvil: grid tradicional -------------------------------- */}
      <div className="sm:hidden grid place-items-center gap-6">
        {values.map((v) => (
          <span
            key={v}
            className="w-64 rounded-full bg-gradient-to-br from-green-600 to-green-500
                       px-6 py-3 text-center text-lg font-semibold text-white"
          >
            {v}
          </span>
        ))}
      </div>

      {/* --- vista ≥ sm: diagrama radial ---------------------------------- */}
      <div className="relative hidden sm:block h-[520px]">
        {/* línea circular (opcional) */}
        <div
          className="absolute inset-0 m-auto h-[calc(2*var(--r))] w-[calc(2*var(--r))] rounded-full border-3 border-dashed border-green-400/40"
          style={{ "--r": `${RADIUS}px` } as React.CSSProperties}
        />

        {/* nodo central */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        flex h-40 w-40 flex-col items-center justify-center gap-1
                        rounded-full bg-yellow-400 text-center shadow-lg ring-4 ring-yellow-200
                        hover:scale-105 transition"
        >
          {/* <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
            Core
          </span> */}
          <span className="text-lg font-bold uppercase tracking-wider text-green-800">
            {title}
          </span>
        </div>

        {/* burbujas exteriores */}
        {positioned.map(({ v, x, y }) => (
          <div
            key={v}
            className="absolute flex h-32 w-32 -translate-x-1/2 -translate-y-1/2
                       items-center justify-center rounded-full
                       bg-gradient-to-br from-green-600 to-green-500
                       px-4 text-center text-lg font-semibold text-white shadow-md
                       hover:scale-105 transition"
            style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
          >
            {v}
          </div>
        ))}
      </div>

      {children && <div className="mt-10">{children}</div>}
    </section>
  );
}
