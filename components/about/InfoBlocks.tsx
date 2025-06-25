/* components/common/InfoBlocks.tsx */
import Image from "next/image";

export type InfoItem = {
  title: string;
  paragraphs: string | string[];
  image: string;
};

type Props = { items: InfoItem[] };

export default function InfoBlocks({ items }: Props) {
  return (
    <section className="mx-auto max-w-6xl sm:px-4 sm:py-16 space-y-8">
      {items.map((item, idx) => {
        // const isEven = idx % 2 === 0;
        return (
          <article
            key={item.title}
            className="grid gap-6 rounded-sm bg-gray-100 p-10 shadow-sm md:grid-cols-2 items-center"
            // className="grid gap-10 rounded-md bg-white/5 p-10 shadow-sm ring-1 ring-white/10 md:grid-cols-2"
          >
            {/* Imagen */}
            <div
              className={`
                relative aspect-video w-full overflow-hidden 
                rounded-md bg-gray-700 flex items-center justify-center 
                border-6 border-[#194440] 
                ${idx % 2 ? "md:order-2" : ""}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover !object-center"
              />
            </div>

            {/* Texto */}
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-3xl font-bold uppercase text-gray-800">
                {item.title}
              </h3>
              {(Array.isArray(item.paragraphs)
                ? item.paragraphs
                : [item.paragraphs]
              ) // ← Si era string, lo convertimos a array
                .map((p) => (
                  <p
                    key={p}
                    className="text-lg leading-relaxed text-gray-800 text-justify"
                  >
                    {p}
                  </p>
                ))}
            </div>
          </article>
        );
      })}
    </section>
  );
}
