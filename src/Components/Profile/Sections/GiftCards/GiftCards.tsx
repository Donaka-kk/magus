import LoadingComponent from "../../../Layout/LoadingComponent";
import axios from "axios";
import GiftCard from "./GiftCard.tsx";

import { ProfileDummyData } from "../../../API/ProfileDummyData.tsx";
import { useQuery } from "@tanstack/react-query";

function GiftCards() {
   const {
      data: giftCards,
      isPending,
      isError,
   } = useQuery({
      queryKey: ["GiftCards"],
      queryFn: async () => {
         const response = await axios.get("https://reqres.in/api/users/1", {
            headers: {
               "x-api-key": "reqres-free-v1",
            },
         });
         //change this to response before build
         return ProfileDummyData.giftCards || response;
      },
   });

   if (isPending) {
      return <LoadingComponent failed={false} />;
   }

   if (isError) {
      return <LoadingComponent failed={true} />;
   }

   return (
      <div>
         <div className="flex flex-col w-full h-full gap-2">
            {giftCards.map((giftCard, index) => {
               return <GiftCard key={index} giftCard={giftCard} />;
            })}
         </div>
      </div>
   );
}
export default GiftCards;
