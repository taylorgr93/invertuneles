// types/ProductDTO.ts
export interface ProductDTO {
  id: number;
  title: string;
  range?: string;
  image: string;
  category:
    | "accessories"
    | "greenhouses"
    | "tights"
    | "substrates"
    | "plastic-films";
  bulletPoints: string[];
}
