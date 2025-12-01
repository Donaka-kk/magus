import { ItemType } from "./ItemType";

export interface OrderType {
   id: number;
   totalPrice: number;
   totalItems: number;
   discount: number;
   purchaseDate: string;
   status: string;
   shippedDate: string;
   deliveredDate: string;
   items: ItemType[];
   customerName: string;
   customerId: number;
}
