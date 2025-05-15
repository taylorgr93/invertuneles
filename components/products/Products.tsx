/* components/products/Products.tsx (server) */
import ProductsTabsClient from "./ProductsTabsClient";
import { Product } from "./ProductCard";

export default function Products({ items }: { items: Product[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <ProductsTabsClient items={items} />
    </section>
  );
}
