import axios from "axios";
import SpecialOrderWrapper from "../AdminComponents/SpecialOrders/SpecialOrderWrapper.tsx";

import { useInfiniteQuery } from "@tanstack/react-query";
import { PageType } from "../Types/PageType.tsx";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

//dummy data
import { PageOne as ProcessingPageOne } from "../AdminComponents/DummyDatas/SpecialOrders/ProcessingOrders.tsx";
import { PageTwo as ProcessingPageTwo } from "../AdminComponents/DummyDatas/SpecialOrders/ProcessingOrders.tsx";

import { PageOne as ShippedPageOne } from "../AdminComponents/DummyDatas/SpecialOrders/ShippedOrders.tsx";
import { PageTwo as ShippedPageTwo } from "../AdminComponents/DummyDatas/SpecialOrders/ShippedOrders.tsx";
import { PageThree as ShippedPageThree } from "../AdminComponents/DummyDatas/SpecialOrders/ShippedOrders.tsx";
import { PageFour as ShippedPageFour } from "../AdminComponents/DummyDatas/SpecialOrders/ShippedOrders.tsx";
import { PageFive as ShippedPageFive } from "../AdminComponents/DummyDatas/SpecialOrders/ShippedOrders.tsx";
import { PageSix as ShippedPageSix } from "../AdminComponents/DummyDatas/SpecialOrders/ShippedOrders.tsx";
import { PageSeven as ShippedPageSeven } from "../AdminComponents/DummyDatas/SpecialOrders/ShippedOrders.tsx";
import { PageEight as ShippedPageEight } from "../AdminComponents/DummyDatas/SpecialOrders/ShippedOrders.tsx";

import { PageOne as DeliveredPageOne } from "../AdminComponents/DummyDatas/SpecialOrders/DeliveredOrders.tsx";
import { PageTwo as DeliveredPageTwo } from "../AdminComponents/DummyDatas/SpecialOrders/DeliveredOrders.tsx";
import { PageThree as DeliveredPageThree } from "../AdminComponents/DummyDatas/SpecialOrders/DeliveredOrders.tsx";

const VALID_SECTIONS = ["processing", "shipped", "delivered"];

function SpecialOrders() {
   const [index, setIndex] = useState<number>(1);
   const [searchParams] = useSearchParams();
   const section = searchParams.get("section");
   const nav = useNavigate();

   useEffect(() => {
      if (!VALID_SECTIONS.includes(section || "")) {
         nav("/admin/panel/specialorders?section=processing", {
            replace: true,
         });
      }
   }, [section, nav]);

   useEffect(() => {
      setIndex(1);
   }, [section]);

   const { data, isPending, isError, fetchNextPage } =
      useInfiniteQuery<PageType>({
         queryKey: ["SpecialOrders", section],
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
            if (section === "processing") {
               if (pageParam === 1) {
                  return ProcessingPageOne || response.status;
               } else {
                  return ProcessingPageTwo;
               }
            } else if (section === "shipped") {
               if (pageParam === 1) {
                  return ShippedPageOne;
               } else if (pageParam === 2) {
                  return ShippedPageTwo;
               } else if (pageParam === 3) {
                  return ShippedPageThree;
               } else if (pageParam === 4) {
                  return ShippedPageFour;
               } else if (pageParam === 5) {
                  return ShippedPageFive;
               } else if (pageParam === 6) {
                  return ShippedPageSix;
               } else if (pageParam === 7) {
                  return ShippedPageSeven;
               } else {
                  return ShippedPageEight;
               }
            } else {
               if (pageParam === 1) {
                  return DeliveredPageOne;
               } else if (pageParam === 2) {
                  return DeliveredPageTwo;
               } else {
                  return DeliveredPageThree;
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
         <SpecialOrderWrapper
            page={page}
            nextPage={nextPage}
            prevPage={prevPage}
         />
      )
   );
}
export default SpecialOrders;
