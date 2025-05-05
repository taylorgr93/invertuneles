// src/hooks/useProducts.ts
import { use } from "react"; // server components: experimental
import { getProducts } from "@/mocks/products/getProducts";
import type { ProductDTO } from "@/types/ProductDTO";

export function useProducts(locale: string) {
  return use(getProducts(locale)) as ProductDTO[]; // en client components usa SWR/ReactQuery
}
