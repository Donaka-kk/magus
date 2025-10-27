import { useState } from "react";
import { TicketType } from "../../../../Types/TicketType";
import NotifyPopUp from "../../../Layout/NotifyPopUp.tsx";
interface TicketProps {
   ticket: TicketType;
}
function Ticket({ ticket }: TicketProps) {
   const [notifyPopUp, setNotifyPopUp] = useState<TicketType>();
   return (
      <>
         {notifyPopUp && (
            <NotifyPopUp
               subject={notifyPopUp.subject}
               text={notifyPopUp.text}
               status={notifyPopUp.status}
               handleClosingPopUp={() => setNotifyPopUp(undefined)}
            />
         )}
         <div
            onClick={() => setNotifyPopUp(ticket)}
            className="w-full border-2 border-black hover:cursor-pointer active:scale-95"
         >
            <h1>Subject: {ticket.subject}</h1>
            <p>Message: {ticket.text}</p>
            <p>Status: {ticket.status}</p>
         </div>
      </>
   );
}
export default Ticket;
