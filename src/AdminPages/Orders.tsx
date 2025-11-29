import axios from "axios";
import OrdersWrapper from "../AdminComponents/Orders/OrdersWrapper.tsx";

import { useQuery } from "@tanstack/react-query";
import { TicketType } from "../Types/TicketType.tsx";
import { OpenTickets } from "../AdminComponents/DummyDatas/Tickets.tsx";
import { ClosedTickets } from "../AdminComponents/DummyDatas/Tickets.tsx";
import { InProgressTickets } from "../AdminComponents/DummyDatas/Tickets.tsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const VALID_SECTIONS = ["proccessing", "shipped"];

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
      queryKey: ["Tickets", section],
      queryFn: async () => {
         const response = await axios.get<TicketType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         if (section === "in-progress") {
            return InProgressTickets || response.data;
         } else if (section === "closed") {
            return ClosedTickets;
         } else {
            return OpenTickets;
         }
      },
      enabled: !!section,
   });

   if (isPending) return <div>...loading</div>;
   if (isError) return <div>...failed</div>;

   return <OrdersWrapper orders={data} />;
}
export default Orders;
