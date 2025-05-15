/* components/products/ProductsTabsClient.tsx */
"use client";

import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";

type Props = {
  items: Product[];
};

export default function ProductsTabsClient({ items }: Props) {
  const categories = ["all", ...new Set(items.map((p) => p.category))] as const;
  const [active, setActive] = useState<(typeof categories)[number]>("all");

  const filtered =
    active === "all" ? items : items.filter((p) => p.category === active);

  return (
    <>
      {/* pestañas */}
      <div className="mb-10 flex flex-wrap justify-center gap-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`
            inline-block px-4 py-2 md:p-0
            text-xl md:text-2xl font-semibold capitalize
            transition-all duration-200 cursor-pointer
            ${
              active === cat
                ? "text-green-500 hover:[text-shadow:0_0_10px_rgba(255,255,255,0.9)]"
                : "text-white hover:text-green-500 hover:[text-shadow:0_0_10px_rgba(255,255,255,0.9)]"
            }
          `}
          >
            {cat === "all" ? "Todos" : cat}
          </button>
        ))}
      </div>

      {/* grid de cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
