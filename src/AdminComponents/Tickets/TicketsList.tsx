import Ticket from "./Ticket.tsx";

import { TicketType } from "../../Types/TicketType";

interface TicketsListProps {
   tickets: TicketType[];
}
function TicketsList({ tickets }: TicketsListProps) {
   return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
         {tickets.map((ticket) => {
            return <Ticket key={ticket.id} ticket={ticket} />;
         })}
      </div>
   );
}

export default TicketsList;
