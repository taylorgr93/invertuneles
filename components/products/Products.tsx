// components/products/Offer.tsx
import ProductCard, { Product } from "./ProductCard";

type Props = {
  items: Product[];
};

export default function Products({ items }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {/* <h2 className="mb-8 text-center text-2xl font-bold uppercase tracking-wide">
        Más información
      </h2> */}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
