/* components/products/Products.tsx (server) */
import ProductsTabsClient from "./ProductsTabsClient";
import { Product } from "./ProductCard";
import { Dict } from "@/lib/getTranslations";

export default function Products({
  items,
  translations,
}: {
  items: Product[];
  translations: Dict;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <ProductsTabsClient items={items} translations={translations} />
    </section>
  );
}
