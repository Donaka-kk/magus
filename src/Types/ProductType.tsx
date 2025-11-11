import { ScoreType } from "./ScoreType";

export interface ProductType {
   id: number;
   name: string;
   price: number;
   image: string;
   discount: number;
   category: string;
   selectedColor: string;
   selectedSize: string;
   score: ScoreType;
   sales: number;
}

export interface ProductSchemeType {
   id: number;
   name: string;
   price: number;
   image: string;
   discount: number;
   category: string;
   selectedColor: string;
   selectedSize: string;
   colors: string[];
   sizes: string[];
   score: ScoreType;
   sales: number;
}
