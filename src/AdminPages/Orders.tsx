import axios from "axios";
import OrdersWrapper from "../AdminComponents/Orders/OrdersWrapper.tsx";

import { useInfiniteQuery } from "@tanstack/react-query";
import { PageType } from "../Types/PageType.tsx";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

//dummy data
import { PageOne as ProcessingPageOne } from "../AdminComponents/DummyDatas/Orders/ProcessingOrders.tsx";
import { PageTwo as ProcessingPageTwo } from "../AdminComponents/DummyDatas/Orders/ProcessingOrders.tsx";

import { PageOne as ShippedPageOne } from "../AdminComponents/DummyDatas/Orders/ShippedOrders.tsx";
import { PageTwo as ShippedPageTwo } from "../AdminComponents/DummyDatas/Orders/ShippedOrders.tsx";
import { PageThree as ShippedPageThree } from "../AdminComponents/DummyDatas/Orders/ShippedOrders.tsx";

import { PageOne as DeliveredPageOne } from "../AdminComponents/DummyDatas/Orders/DeliveredOrders.tsx";

const VALID_SECTIONS = ["proccessing", "shipped", "delivered"];

function Orders() {
   const [index, setIndex] = useState<number>(1);
   const [searchParams] = useSearchParams();
   const section = searchParams.get("section");
   const nav = useNavigate();

   useEffect(() => {
      if (!VALID_SECTIONS.includes(section || "")) {
         nav("/admin/panel/orders?section=proccessing", { replace: true });
      }
   }, [section, nav]);

   useEffect(() => {
      setIndex(1);
   }, [section]);

   const { data, isPending, isError, fetchNextPage } =
      useInfiniteQuery<PageType>({
         queryKey: ["Orders", section],
         queryFn: async ({ pageParam = 1 }) => {
            //it always returns dummy data , it will be refactored
            const response = await axios.get<PageType>(
               `https://reqres.in/api/users/1`,
               {
                  headers: {
                     "x-api-key": process.env.REACT_APP_REQRES_KEY,
                  },
               }
            );
            if (section === "delivered") {
               return DeliveredPageOne;
            } else if (section === "shipped") {
               if (pageParam === 1) {
                  return ShippedPageOne;
               } else if (pageParam === 2) {
                  return ShippedPageTwo;
               } else {
                  return ShippedPageThree;
               }
            } else {
               if (pageParam === 1) {
                  return ProcessingPageOne || response.status;
               } else {
                  return ProcessingPageTwo;
               }
            }
         },
         initialPageParam: 1,
         getNextPageParam: (lastPage) => {
            if (lastPage.pageNumber < lastPage.totalPages) {
               return lastPage.pageNumber + 1;
            }
            return undefined;
         },
      });
   const page: PageType | undefined = data?.pages[index - 1];

   const nextPage = useCallback(async () => {
      if (!page) return;

      const nextIndex = index + 1;
      const totalPages = page.totalPages;

      if (data?.pages[nextIndex - 1]) {
         setIndex(nextIndex);
         window.scrollTo({ top: 0, behavior: "smooth" });
         return;
      }

      if (nextIndex <= totalPages) {
         await fetchNextPage();
         setIndex(nextIndex);
         window.scrollTo({ top: 0, behavior: "smooth" });
      }
   }, [index, page, data, fetchNextPage]);

   const prevPage = useCallback(() => {
      if (index > 1) {
         window.scrollTo({ top: 0, behavior: "smooth" });
         setIndex((prev) => prev - 1);
      }
   }, [index]);

   if (isPending) return <div>...loading</div>;
   if (isError) return <div>...failed</div>;

   return (
      page && (
         <OrdersWrapper page={page} nextPage={nextPage} prevPage={prevPage} />
      )
   );
}
export default Orders;
