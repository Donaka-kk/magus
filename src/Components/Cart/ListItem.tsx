import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { ItemType } from "../../Types/ItemType";

interface ListItemProps {
   item: ItemType;
   handleChangeQuantity: (itemID: number, newQuantity: number) => void;
}

function ListItem({ item, handleChangeQuantity }: ListItemProps) {
   const handleAddButton = () => {
      handleChangeQuantity(
         item.id,
         Math.max(0, Math.min(99, item.quantity + 1))
      );
   };
   const handleSubtractButton = () => {
      handleChangeQuantity(
         item.id,
         Math.max(0, Math.min(99, item.quantity - 1))
      );
   };

   return (
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr] items-center gap-2 px-3 text-sm md:text-base">
         <span className="text-left">{item.name}</span>
         <span className="text-center" style={{ color: item.selectedColor }}>
            <FontAwesomeIcon icon={faCircle} />
         </span>
         <span className="text-center">{item.selectedSize}</span>
         <span className="text-center">{item.finalPrice}$</span>
         <div className="flex justify-end">
            <div className="flex flex-row justify-end items-center gap-1 border border-black rounded-lg px-1 w-fit">
               <button
                  onClick={handleSubtractButton}
                  className="text-sm md:text-base active:scale-90"
               >
                  <FontAwesomeIcon icon={faMinus} />
               </button>
               <input
                  value={item.quantity}
                  type="number"
                  className="w-6 md:w-10 max-w-fit text-center bg-transparent no-spinner"
                  onChange={(e) => {
                     const limitedNum = Math.max(
                        0,
                        Math.min(99, Number(e.target.value))
                     );
                     handleChangeQuantity(item.id, limitedNum);
                  }}
               />
               <button
                  onClick={handleAddButton}
                  className="text-sm md:text-base active:scale-90"
               >
                  <FontAwesomeIcon icon={faPlus} />
               </button>
            </div>
         </div>
      </div>
   );
}
export default ListItem;
