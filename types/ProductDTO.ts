// types/ProductDTO.ts
export interface ProductDTO {
  id: number;
  title: string;
  range?: string;
  image: string;
  category:
    | "accessories"
    | "greenhouse"
    | "tights"
    | "covers"
    | "plastic films";
  bulletPoints: string[];
}
