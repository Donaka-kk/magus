import TicketsList from "./TicketsList.tsx";
import Paginator from "../Pagination/Paginator.tsx";

import { PageType } from "../../Types/PageType.tsx";
import { useNavigate } from "react-router-dom";

interface TicketsWrapperProps {
   page: PageType;
   nextPage: () => void;
   prevPage: () => void;
}

function TicketsWrapper({ page, nextPage, prevPage }: TicketsWrapperProps) {
   const nav = useNavigate();
   return (
      <div className="flex flex-col gap-2 md:gap-4 p-2 md:p-4">
         <div className="w-full text-center flex gap-2 justify-center">
            <button
               onClick={() => nav("/admin/panel")}
               className="p-2 border border-black rounded-xl"
            >
               Back to panel
            </button>
            <button
               onClick={() => nav("/admin/panel/tickets?section=open")}
               className="p-2 border border-black rounded-xl"
            >
               "Open" Tickets
            </button>
            <button
               onClick={() => nav("/admin/panel/tickets?section=in-progress")}
               className="p-2 border border-black rounded-xl"
            >
               "In-Progress" Tickets
            </button>
            <button
               onClick={() => nav("/admin/panel/tickets?section=closed")}
               className="p-2 border border-black rounded-xl"
            >
               "Closed" Tickets
            </button>
         </div>
         <TicketsList tickets={page.data} />
         <Paginator
            currentPage={page.pageNumber}
            totalPages={page.totalPages}
            nextPage={nextPage}
            prevPage={prevPage}
         />
      </div>
   );
}

export default TicketsWrapper;
