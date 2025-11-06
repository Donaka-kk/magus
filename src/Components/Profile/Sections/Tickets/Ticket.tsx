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
            className="w-full h-28 md:h-14 flex flex-col md:flex-row justify-around items-center border rounded-lg shadow-xl active:scale-95 active:shadow-inner gap-2 p-1"
         >
            <h1 className="w-full md:w-2/12 text-base lg:text-lg font-semibold text-center">
               {ticket.subject}
            </h1>
            <p className="w-full md:w-8/12 text-sm overflow-clip line-clamp-2 md:line-clamp-1">
               {ticket.text}
            </p>
            <p className="w-full md:w-2/12 text-base lg:text-lg font-semibold text-center">
               Status: {ticket.status}
            </p>
         </div>
      </>
   );
}
export default Ticket;
