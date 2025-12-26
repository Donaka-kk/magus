export interface ItemType {
   id: number;
   name: string;
   price: number;
   image: string;
   discount: number;
   category: string;
   selectedColor: string;
   selectedSize: string;
   quantity: number;
   finalPrice: number;
   cartID: number | undefined;
}
