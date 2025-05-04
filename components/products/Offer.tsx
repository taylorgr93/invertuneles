// components/products/Offer.tsx
import OfferCard, { OfferItem } from "./OfferCard";

type Props = { items: OfferItem[] };

export default function Offer({ items }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {/* <h2 className="mb-8 text-center text-2xl font-bold uppercase tracking-wide">
        Más información
      </h2> */}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <OfferCard key={item.slug} {...item} />
        ))}
      </div>
    </section>
  );
}
