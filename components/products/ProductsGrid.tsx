/* components/products/ProductsGrid.tsx  (ya no “Tabs”) */
"use client";

import ProductCard, { Product } from "./ProductCard";

export default function ProductsGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}
