import LoadingComponent from "../../../Layout/LoadingComponent.js";
import axios from "axios";
import Order from "./Order.tsx";

import { ProfileDummyData } from "../../../API/ProfileDummyData.tsx";
import { useQuery } from "@tanstack/react-query";

function Orders() {
   const {
      data: orders,
      isPending,
      isError,
   } = useQuery({
      queryKey: ["notifications"],
      queryFn: async () => {
         const response = await axios.get("https://reqres.in/api/users/1", {
            headers: {
               "x-api-key": "reqres-free-v1",
            },
         });
         //change this to response before build
         return ProfileDummyData.orders || response;
      },
   });

   if (isPending) {
      return <LoadingComponent failed={false} />;
   }

   if (isError) {
      return <LoadingComponent failed={true} />;
   }

   return (
      <div className="flex flex-col w-full h-full gap-2">
         {orders?.map((order, index) => {
            return <Order key={index} order={order} />;
         })}
      </div>
   );
}
export default Orders;
