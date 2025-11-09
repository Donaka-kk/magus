import { ProductType } from "./ProductType.tsx";
export interface ShopPageType {
   products: ProductType[];
   pageNumber: number;
   totalPages: number;
   totalCount: number;
}
