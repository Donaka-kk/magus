import { ItemType } from "./ItemType";

export interface CartType {
   items: ItemType[];
   totalItems: number;
   totalPrice: number;
}
