import WishListItem from "./WishListItem.tsx";
import { WishListItemType } from "../../../../Types/WishListItemType.tsx";

interface WishListProps {
   wishList: WishListItemType[];
}
function WishList({ wishList }: WishListProps) {
   return (
      <div className="flex flex-col w-full h-full gap-2">
         {wishList.map((wishListItem, index) => {
            return <WishListItem key={index} wishListItem={wishListItem} />;
         })}
      </div>
   );
}
export default WishList;
