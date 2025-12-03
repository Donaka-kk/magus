import axios from "axios";
import SpecialOrderWrapper from "../AdminComponents/SpecialOrders/SpecialOrderWrapper.tsx";

import { useQuery } from "@tanstack/react-query";
import { SpecialOrderType } from "../Types/SpecialOrderType.tsx";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

//dummy data
import { ProcessingOrders } from "../AdminComponents/DummyDatas/SpecialOrders.tsx";
import { ShippedOrders } from "../AdminComponents/DummyDatas/SpecialOrders.tsx";
import { DeliveredOrders } from "../AdminComponents/DummyDatas/SpecialOrders.tsx";

const VALID_SECTIONS = ["proccessing", "shipped", "delivered"];

function SpecialOrders() {
   const [searchParams] = useSearchParams();
   const section = searchParams.get("section");
   const nav = useNavigate();

   useEffect(() => {
      if (!VALID_SECTIONS.includes(section || "")) {
         nav("/admin/panel/specialorders?section=proccessing", {
            replace: true,
         });
      }
   }, [section, nav]);

   const { data, isPending, isError } = useQuery({
      queryKey: ["SpecialOrders", section],
      queryFn: async () => {
         const response = await axios.get<SpecialOrderType[]>(
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
            return ProcessingOrders;
         }
      },
      enabled: !!section,
   });

   if (isPending) return <div>...loading</div>;
   if (isError) return <div>...failed</div>;

   return <SpecialOrderWrapper orders={data} />;
}
export default SpecialOrders;
