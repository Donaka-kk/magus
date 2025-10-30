export interface ProductType {
   id: number;
   name: string;
   price: number;
   image: string;
   discount: number;
   category: string;
   selectedColor: string;
   selectedSize: string;
   score: number;
   sales: number;
   available: boolean;
}

export interface NewProductType extends ProductType {
   name: string;
   price: number;
   image: string;
   discount: number;
   category: string;
   Colors: string[];
   Sizes: string[];
   available: boolean;
}
