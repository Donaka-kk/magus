import CartSummary from "./CartSummary.tsx";
import ItemShowCase from "./ItemsShowCase.tsx";
import deepEqual from "fast-deep-equal";

import { CartType } from "../../Types/CartType.tsx";
import { useEffect, useState } from "react";
import { ItemType } from "../../Types/ItemType.tsx";

interface CartWrapperProps {
   cart: CartType;
   onSave: (items: ItemType[]) => void;
   updatePending?: boolean;
}

function CartWrapper({ cart, onSave, updatePending }: CartWrapperProps) {
   const [cartItems, setCartItems] = useState<ItemType[]>([]);
   useEffect(() => {
      setCartItems(cart.items);
   }, [cart]);
   const hasChanged = !deepEqual(cart.items, cartItems);

   const handleChangeQuantity = (itemID: number, newQuantity: number) => {
      setCartItems((prev) =>
         prev.map((item) =>
            item.id === itemID ? { ...item, quantity: newQuantity } : item
         )
      );
   };
   const handleSaveChanges = () => {
      onSave(cartItems);
   };
   const handleDiscard = () => {
      setCartItems(cart.items);
   };

   return (
      <div className="flex-row md:flex justify-center my-2 px-2 gap-2">
         <div className="w-full md:w-9/12">
            <ItemShowCase
               items={cartItems}
               handleChangeQuantity={handleChangeQuantity}
               handleSaveChanges={handleSaveChanges}
               hasChanged={hasChanged}
               handleDiscard={handleDiscard}
               updatePending={updatePending}
            />
         </div>
         <div className="w-full md:w-3/12">
            <CartSummary
               totalItems={cart.totalItems}
               totalPrice={cart.totalPrice}
            />
         </div>
      </div>
   );
}

export default CartWrapper;
