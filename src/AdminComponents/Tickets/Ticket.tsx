import { useNavigate } from "react-router-dom";
import { TicketType } from "../../Types/TicketType";

interface TicketProps {
   ticket: TicketType;
}

function Ticket({ ticket }: TicketProps) {
   const nav = useNavigate();

   return (
      <div
         onClick={() => nav("/admin/panel/ticket?id=" + ticket.id)}
         className="border rounded-xl shadow-xl hover:cursor-pointer p-2"
      >
         <p className="font-bold text-lg">{ticket.subject}</p>
         <p>{ticket.text}</p>
         <p className="font-semibold text-center">Status: {ticket.status}</p>
      </div>
   );
}

export default Ticket;
