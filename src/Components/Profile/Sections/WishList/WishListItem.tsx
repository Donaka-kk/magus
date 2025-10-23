import { WishListItemType } from "../../../../Types/WishListItemType";
import { useNavigate } from "react-router-dom";

interface WishListItemProps {
   wishListItem: WishListItemType;
}
function WishListItem({ wishListItem }: WishListItemProps) {
   const nav = useNavigate();
   return (
      <div className="flex flex-row justify-between items-center border-2 border-black">
         <div className="flex flex-row justify-start items-center w-1/4 gap-2">
            <img src={wishListItem.image} alt="product" className="w-20 h-20" />
            <p>{wishListItem.name}</p>
         </div>
         <p className="w-1/4 text-center">{wishListItem.price}$</p>
         <p className="w-1/4 text-center">
            Availability :
            {wishListItem.available ? (
               <span className="text-green-500">available</span>
            ) : (
               <span className="text-red-500"> Not available</span>
            )}
         </p>
         <button
            onClick={() => nav(`/product?id=${wishListItem.id}`)}
            className="border border-black mr-2 p-1 active:scale-95"
         >
            More info
         </button>
      </div>
   );
}
export default WishListItem;
