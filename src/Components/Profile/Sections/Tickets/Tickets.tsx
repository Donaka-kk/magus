import { useState } from "react";
import { TicketType } from "../../../../Types/TicketType";
import Ticket from "./Ticket.tsx";
import NotifyingPopUp from "../../../Layout/NotifyingPopUp.tsx";
import FormPopUp from "../../../Layout/FormPopUp.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";

interface TicketsProps {
   tickets: TicketType[];
   message: string;
   createNewTicket: (
      event: React.FormEvent<HTMLFormElement>,
      subject: string,
      text: string
   ) => void;
}

function Tickets({ tickets, createNewTicket, message }: TicketsProps) {
   const [popUp, setPopUp] = useState<TicketType>();
   const [showFormPopUp, setShowFormPopUp] = useState<boolean>(false);

   return (
      <div className="flex flex-col justify-center items-center w-full h-full gap-2">
         {showFormPopUp && (
            <FormPopUp
               createNewTicket={createNewTicket}
               handleClosingPopUp={() => setShowFormPopUp(false)}
               message={message}
            />
         )}
         {popUp && (
            <NotifyingPopUp
               subject={popUp.subject}
               text={popUp.text}
               status={popUp.status}
               handleClosingPopUp={() => setPopUp(undefined)}
            />
         )}
         {tickets.map((ticket, index) => {
            return (
               <Ticket
                  key={index}
                  ticket={ticket}
                  createPopUp={() => setPopUp(ticket)}
               />
            );
         })}
         <button
            onClick={() => setShowFormPopUp(true)}
            className="flex flex-col border-2 border-black justify-center items-center w-fit p-2"
         >
            <p className="text-2xl">
               <FontAwesomeIcon icon={faFileCirclePlus} />
            </p>
            Create new ticket
         </button>
      </div>
   );
}
export default Tickets;
