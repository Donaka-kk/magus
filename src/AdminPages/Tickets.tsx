import axios from "axios";
import TicketWrapper from "../AdminComponents/Tickets/TicketsWrapper.tsx";

import { useInfiniteQuery } from "@tanstack/react-query";
import { PageType } from "../Types/PageType.tsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

//dummy datas
import { PageOne as OpenPageOne } from "../AdminComponents/DummyDatas/Tickets/OpenTickets.tsx";
import { PageTwo as OpenPageTwo } from "../AdminComponents/DummyDatas/Tickets/OpenTickets.tsx";

import { PageOne as InProgressPageOne } from "../AdminComponents/DummyDatas/Tickets/InProgressTickets.tsx";
import { PageTwo as InProgressPageTwo } from "../AdminComponents/DummyDatas/Tickets/InProgressTickets.tsx";
import { PageThree as InProgressPageThree } from "../AdminComponents/DummyDatas/Tickets/InProgressTickets.tsx";

import { PageOne as ClosedPageOne } from "../AdminComponents/DummyDatas/Tickets/ClosedTickets.tsx";
import { PageTwo as ClosedPageTwo } from "../AdminComponents/DummyDatas/Tickets/ClosedTickets.tsx";
import { PageThree as ClosedPageThree } from "../AdminComponents/DummyDatas/Tickets/ClosedTickets.tsx";
import { PageFour as ClosedPageFour } from "../AdminComponents/DummyDatas/Tickets/ClosedTickets.tsx";
import { PageFive as ClosedPageFive } from "../AdminComponents/DummyDatas/Tickets/ClosedTickets.tsx";
import { PageSix as ClosedPageSix } from "../AdminComponents/DummyDatas/Tickets/ClosedTickets.tsx";
import { PageSeven as ClosedPageSeven } from "../AdminComponents/DummyDatas/Tickets/ClosedTickets.tsx";

const VALID_SECTIONS = ["open", "closed", "in-progress"];

function Tickets() {
   const [index, setIndex] = useState<number>(1);
   const [searchParams] = useSearchParams();
   const section = searchParams.get("section");
   const nav = useNavigate();

   useEffect(() => {
      if (!VALID_SECTIONS.includes(section || "")) {
         nav("/admin/panel/tickets?section=open", { replace: true });
      }
   }, [section, nav]);

   useEffect(() => {
      setIndex(1);
   }, [section]);

   const { data, isPending, isError, fetchNextPage } =
      useInfiniteQuery<PageType>({
         queryKey: ["Tickets", section],
         queryFn: async ({ pageParam = 1 }) => {
            const response = await axios.get<PageType>(
               "https://reqres.in/api/users/1",
               {
                  headers: {
                     "x-api-key": process.env.REACT_APP_REQRES_KEY,
                  },
               }
            );
            if (section === "in-progress") {
               if (pageParam === 1) return InProgressPageOne || response;
               else if (pageParam === 2) return InProgressPageTwo;
               else return InProgressPageThree;
            } else if (section === "closed") {
               if (pageParam === 1) return ClosedPageOne;
               else if (pageParam === 2) return ClosedPageTwo;
               else if (pageParam === 3) return ClosedPageThree;
               else if (pageParam === 4) return ClosedPageFour;
               else if (pageParam === 5) return ClosedPageFive;
               else if (pageParam === 6) return ClosedPageSix;
               else return ClosedPageSeven;
            } else {
               if (pageParam === 1) return OpenPageOne;
               else return OpenPageTwo;
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
         <TicketWrapper page={page} nextPage={nextPage} prevPage={prevPage} />
      )
   );
}
export default Tickets;
