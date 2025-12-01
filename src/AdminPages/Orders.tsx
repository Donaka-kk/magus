import axios from "axios";
import OrdersWrapper from "../AdminComponents/Orders/OrdersWrapper.tsx";

import { useQuery } from "@tanstack/react-query";
import { OrderType } from "../Types/OrderType.tsx";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

//dummy data
import { ProccessingOrders } from "../AdminComponents/DummyDatas/Orders.tsx";
import { ShippedOrders } from "../AdminComponents/DummyDatas/Orders.tsx";
import { DeliveredOrders } from "../AdminComponents/DummyDatas/Orders.tsx";

const VALID_SECTIONS = ["proccessing", "shipped", "delivered"];

function Orders() {
   const [searchParams] = useSearchParams();
   const section = searchParams.get("section");
   const nav = useNavigate();

   useEffect(() => {
      if (!VALID_SECTIONS.includes(section || "")) {
         nav("/admin/panel/orders?section=proccessing", { replace: true });
      }
   }, [section, nav]);

   const { data, isPending, isError } = useQuery({
      queryKey: ["Orders", section],
      queryFn: async () => {
         const response = await axios.get<OrderType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         if (section === "shipped") {
            return ShippedOrders || response.data;
         } else if (section === "delivered") {
            return DeliveredOrders;
         } else {
            return ProccessingOrders;
         }
      },
      enabled: !!section,
   });

   if (isPending) return <div>...loading</div>;
   if (isError) return <div>...failed</div>;

   return <OrdersWrapper orders={data} />;
}
export default Orders;
