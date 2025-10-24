import { TicketType } from "../../../../Types/TicketType";
interface TicketProps {
   ticket: TicketType;
   createPopUp: (ticket: TicketType) => void;
}
function Ticket({ ticket, createPopUp }: TicketProps) {
   return (
      <div
         onClick={() => createPopUp(ticket)}
         className="w-full border-2 border-black hover:cursor-pointer active:scale-95"
      >
         <h1>Subject: {ticket.subject}</h1>
         <p>Message: {ticket.text}</p>
         <p>Status: {ticket.status}</p>
      </div>
   );
}
export default Ticket;
