/* components/about/ValuesSection.tsx */
interface ValuesSectionProps {
  title: string;
  values: string[];
}

export default function ValuesSection({ title, values }: ValuesSectionProps) {
  return (
    <section className="mx-auto my-20 max-w-6xl rounded-xl bg-gray-100 px-12 py-16 shadow-2xl">
      {/* título */}
      <h2 className="mb-12 text-center text-4xl font-extrabold tracking-wide text-green-700 drop-shadow-sm">
        {title}
      </h2>

      {/* badges */}
      <div
        className="
            grid gap-8
            h-40
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            place-items-center
          "
      >
        {values.map((v) => (
          <span
            key={v}
            className="
                relative overflow-hidden
                flex items-center justify-center
                w-72 h-14
                rounded-full bg-gradient-to-br from-green-600 to-green-500
                text-white text-lg font-semibold tracking-wide
                shadow-lg ring-1 ring-white/20
  
                transition
                hover:scale-105 hover:shadow-xl
                hover:from-green-500 hover:to-green-400
                active:scale-100
  
                before:absolute before:inset-px
                before:rounded-full before:bg-gradient-to-tr
                before:from-white/10 before:to-white/0
              "
          >
            {v}
          </span>
        ))}
      </div>
    </section>
  );
}
