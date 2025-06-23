/* components/products/Products.tsx  (server) */
import ProductsGrid from "./ProductsGrid";
import type { Product } from "./ProductCard";

export default function Products({ items }: { items: Product[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <ProductsGrid items={items} /> {/* 👈 solo items */}
    </section>
  );
}
