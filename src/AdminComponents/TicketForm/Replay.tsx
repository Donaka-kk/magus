import { ReplayType } from "../../Types/TicketType";

interface ReplayProps {
   replay: ReplayType;
}

function Replay({ replay }: ReplayProps) {
   return (
      <div>
         <div className="text-xl font-semibold">
            <span>
               From {replay.authorName} to {replay.receiverName}
            </span>
            <span className="text-sm text-gray-600"> ({replay.createdAt})</span>
         </div>
         <p>{replay.text}</p>
      </div>
   );
}

export default Replay;
