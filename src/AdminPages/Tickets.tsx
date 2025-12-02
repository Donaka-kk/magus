import axios from "axios";
import TicketWrapper from "../AdminComponents/Tickets/TicketsWrapper.tsx";

import { useQuery } from "@tanstack/react-query";
import { TicketType } from "../Types/TicketType.tsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
//dummy datas
import { OpenTickets } from "../AdminComponents/DummyDatas/Tickets.tsx";
import { ClosedTickets } from "../AdminComponents/DummyDatas/Tickets.tsx";
import { InProgressTickets } from "../AdminComponents/DummyDatas/Tickets.tsx";

const VALID_SECTIONS = ["open", "closed", "in-progress"];

function Tickets() {
   const [searchParams] = useSearchParams();
   const section = searchParams.get("section");
   const nav = useNavigate();

   useEffect(() => {
      if (!VALID_SECTIONS.includes(section || "")) {
         nav("/admin/panel/tickets?section=open", { replace: true });
      }
   }, [section, nav]);

   const { data, isPending, isError } = useQuery({
      queryKey: ["Tickets", section],
      queryFn: async () => {
         const response = await axios.get<TicketType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
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

   return <TicketWrapper tickets={data} />;
}
export default Tickets;
