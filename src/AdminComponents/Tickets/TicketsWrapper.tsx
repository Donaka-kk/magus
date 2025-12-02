import Ticket from "./Ticket.tsx";

import { TicketType } from "../../Types/TicketType.tsx";
import { useNavigate } from "react-router-dom";

interface TicketsWrapperProps {
   tickets: TicketType[];
}

function TicketsWrapper({ tickets }: TicketsWrapperProps) {
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
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {tickets.map((ticket) => {
               return <Ticket key={ticket.id} ticket={ticket} />;
            })}
         </div>
      </div>
   );
}

export default TicketsWrapper;
