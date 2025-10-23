import { useState } from "react";
import { TicketType } from "../../../../Types/TicketType";
import Ticket from "./Ticket.tsx";
import NotifyingPopUp from "../../../Layout/NotifyingPopUp.tsx";

interface TicketsProps {
   tickets: TicketType[];
}

function Tickets({ tickets }: TicketsProps) {
   const [popUp, setPopUp] = useState<React.ReactNode>(null);
   const createPopUp = (ticket: TicketType) => {
      setPopUp(
         <NotifyingPopUp
            subject={ticket.subject}
            text={ticket.text}
            status={ticket.status}
            handleClosingPopUp={() => setPopUp(null)}
         />
      );
   };

   return (
      <div className="flex flex-col w-full h-full gap-2">
         {popUp}
         {tickets.map((ticket, index) => {
            return (
               <Ticket key={index} ticket={ticket} createPopUp={createPopUp} />
            );
         })}
      </div>
   );
}
export default Tickets;
