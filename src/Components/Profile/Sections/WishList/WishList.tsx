import LoadingComponent from "../../../Layout/LoadingComponent.js";
import axios from "axios";
import WishListItem from "./WishListItem.tsx";

import { ProfileDummyData } from "../../../API/ProfileDummyData.tsx";
import { useQuery } from "@tanstack/react-query";

function WishList() {
   const {
      data: wishList,
      isPending,
      isError,
   } = useQuery({
      queryKey: ["WishList"],
      queryFn: async () => {
         const response = await axios.get("https://reqres.in/api/users/1", {
            headers: {
               "x-api-key": "reqres-free-v1",
            },
         });
         //change this to response before build
         return ProfileDummyData.wishList || response;
      },
   });

   if (isPending) {
      return <LoadingComponent failed={false} />;
   }

   if (isError) {
      return <LoadingComponent failed={true} />;
   }

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-start w-full h-full gap-2">
         {wishList.map((wishListItem, index) => {
            return <WishListItem key={index} wishListItem={wishListItem} />;
         })}
      </div>
   );
}
export default WishList;
