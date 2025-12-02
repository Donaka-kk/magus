import Replay from "./Replay.tsx";

import { useNavigate } from "react-router-dom";
import { TicketType } from "../../Types/TicketType";
import { useState } from "react";

interface TicketFormProps {
   ticket: TicketType;
   editingTicketStatus: (newStatus: string) => void;
}

function TicketForm({ ticket, editingTicketStatus }: TicketFormProps) {
   const [newStatus, setNewStatus] = useState<string>(ticket.status);
   const nav = useNavigate();
   return (
      <div className="Container w-full min-h-screen flex justify-center p-2 md:p-4">
         <form
            onSubmit={(event) => {
               event.preventDefault();
               editingTicketStatus(newStatus);
            }}
            className="flex flex-col gap-2 w-full h-fit md:w-9/12 p-2 md:p-4 border rounded-xl"
         >
            <label className="text-xl font-semibold">Author</label>
            <div className="flex justify-between border p-1">
               <span>{ticket.authorName}</span>
               <span>{ticket.authorId}</span>
            </div>
            <label className="text-xl font-semibold">Subject</label>
            <p className="border p-1">{ticket.subject}</p>
            <label className="text-xl font-semibold">Status</label>
            <p className="border p-1">{ticket.status}</p>
            <label className="text-xl font-semibold">Message</label>
            <p className="border p-1">{ticket.text}</p>
            <label className="text-xl font-semibold">Replies</label>
            <div className="flex flex-col border p-1 gap-10">
               {ticket.replies?.map((replay) => {
                  return <Replay key={replay.id} replay={replay} />;
               })}
            </div>
            <label className="text-xl font-semibold">Sent new replay</label>
            <textarea className="border border-black outline-none p-1 min-h-36" />
            <label className="text-xl font-semibold">
               Changing ticket status
            </label>
            <select
               defaultValue={newStatus}
               onChange={(e) => setNewStatus(e.target.value)}
               className="border border-black outline-none"
            >
               <option value="open">Open</option>
               <option value="in-progress">In-Progress</option>
               <option value="closed">Closed</option>
            </select>
            <div className="flex flex-row-reverse gap-2">
               <button
                  className="border p-2 rounded-xl active:scale-95"
                  type="submit"
               >
                  Save
               </button>
               <button
                  onClick={() => nav(-1)}
                  className="border p-2 rounded-xl active:scale-95"
                  type="button"
               >
                  Cancel
               </button>
            </div>
         </form>
      </div>
   );
}

export default TicketForm;
