import { ItemType } from "./ItemType";
export interface OrderType {
   id: number;
   totalPrice: number;
   totalItems: number;
   discount: number;
   purchaseDate: string;
   status: string;
   items: ItemType[];
}
