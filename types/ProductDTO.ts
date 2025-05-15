// types/ProductDTO.ts
export interface ProductDTO {
  id: number;
  slug: string;
  title: string;
  range?: string;
  image: string;
  category: "accessories" | "macrotunnels" | "tights" | "plastic films";
  bulletPoints: string[];
}
