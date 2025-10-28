import { ProductType } from "./ProductType";
export interface ShopPageType {
   products: ProductType[];
   pageNumber: number;
   totalPages: number;
   totalCount: number;
}
