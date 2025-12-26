import ListItem from "./ListItem.tsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ItemType } from "../../Types/ItemType.tsx";

interface ItemsShowCaseProps {
   items: ItemType[];
   handleChangeQuantity: (itemID: number, newQuantity: number) => void;
   handleSaveChanges: () => void;
   hasChanged: boolean;
   handleDiscard: () => void;
   updatePending?: boolean;
}

function ItemShowCase({
   items,
   handleChangeQuantity,
   handleSaveChanges,
   hasChanged,
   handleDiscard,
   updatePending,
}: ItemsShowCaseProps) {
   return (
      <div className="flex flex-col">
         <div className="flex flex-row justify-between items-center px-5 border-b border-gray-600">
            <h1 className="text-2xl font-bold my-3">Your shopping cart</h1>
            <p className="text-xl font-bold">{items.length} items</p>
         </div>

         <div className="py-4">
            {/* Header */}
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-2 px-3 text-sm font-medium text-gray-500">
               <span className="text-left">Item</span>
               <span className="text-center">Color</span>
               <span className="text-center">Size</span>
               <span className="text-center">Price</span>
               <span className="text-right">Quantity</span>
            </div>

            {/* Rows */}
            <div className="mt-4 flex flex-col gap-3">
               {items.map((item) => (
                  <ListItem
                     key={item.id}
                     item={item}
                     handleChangeQuantity={handleChangeQuantity}
                  />
               ))}
            </div>
         </div>
         <div className="flex justify-end pb-4 gap-2">
            <button
               onClick={handleDiscard}
               disabled={!hasChanged || updatePending}
               className={`flex gap-1 items-center rounded-md border-2 border-black p-2 text-base md:text-lg text-red-500 ${!hasChanged || updatePending ? "opacity-50" : "opacity-100  active:scale-95"}`}
            >
               <FontAwesomeIcon icon={faXmark} />
               Discard
            </button>
            <button
               onClick={handleSaveChanges}
               disabled={!hasChanged || updatePending}
               className={`flex gap-1 items-center rounded-md border-2 border-black p-2 text-base md:text-lg text-green-500 ${!hasChanged || updatePending ? "opacity-50" : "opacity-100  active:scale-95"}`}
            >
               {!updatePending ? (
                  <>
                     <FontAwesomeIcon icon={faCheck} />
                     Save
                  </>
               ) : (
                  <>Updating...</>
               )}
            </button>
         </div>
      </div>
   );
}
export default ItemShowCase;
