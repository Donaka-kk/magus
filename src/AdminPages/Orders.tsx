import axios from "axios";
import OrdersWrapper from "../AdminComponents/Orders/OrdersWrapper.tsx";
import toast from "react-hot-toast";

import {
   useMutation,
   useQueryClient,
   useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
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

const VALID_SECTIONS = ["processing", "shipped", "delivered"];

function Orders() {
   console.log("Orders");
   const [index, setIndex] = useState<number>(1);
   const [searchParams] = useSearchParams();
   const section = searchParams.get("section");
   const nav = useNavigate();
   const queryClient = useQueryClient();

   useEffect(() => {
      if (!VALID_SECTIONS.includes(section || "")) {
         console.log("1");
         nav("/admin/panel/orders?section=processing", { replace: true });
      }
   }, [section, nav]);

   useEffect(() => {
      setIndex((prev) => {
         console.log("2");
         return prev === 1 ? prev : 1;
      });
   }, [section]);

   const changeStatus = useMutation({
      mutationFn: async (orderID: number) => {
         const response = await axios.post<PageType>(
            `https://reqres.in/api/users`,
            orderID,
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return response.data;
      },
      onSuccess(_, variables) {
         //must show the response.message
         queryClient.invalidateQueries({ queryKey: ["Orders", section] });
         toast.success(
            `Order ${variables} successfully moved to shipped section`,
            { duration: 5000 }
         );
      },
      onError(_, variables) {
         //must show the response.message
         toast.error(`Failed to move order ${variables} to shipped section`);
      },
   });

   const { data, fetchNextPage } = useSuspenseInfiniteQuery<PageType>({
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
   const page: PageType = data?.pages[index - 1];

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

   return (
      page && (
         <OrdersWrapper
            page={page}
            nextPage={nextPage}
            prevPage={prevPage}
            changeStatus={changeStatus}
            section={section}
         />
      )
   );
}
export default Orders;
