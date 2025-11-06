import { WishListItemType } from "../../../../Types/WishListItemType";
import { useNavigate } from "react-router-dom";

interface WishListItemProps {
   wishListItem: WishListItemType;
}
function WishListItem({ wishListItem }: WishListItemProps) {
   const nav = useNavigate();
   return (
      <div className="flex flex-col justify-between items-center border-2 border-black rounded-lg p-2 gap-1">
         <img
            src={wishListItem.image}
            alt="product"
            className="w-20 h-20 border border-black"
         />
         <p>{wishListItem.name}</p>
         <p>{wishListItem.price}$</p>
         <div className="flex flex-row gap-2">
            <button
               onClick={() => {}}
               className="border rounded-lg shadow-lg px-2 py-1 active:scale-95 text-sm active:shadow-inner"
            >
               Remove
            </button>
            <button
               onClick={() => nav(`/product?id=${wishListItem.id}`)}
               className="border rounded-lg shadow-lg px-2 py-1 active:scale-95 text-sm active:shadow-inner"
            >
               More info
            </button>
         </div>
      </div>
   );
}
export default WishListItem;
