import axios from "axios";
import TicketForm from "../AdminComponents/Ticket/TicketForm.tsx";
import NotifyPopUp from "../Components/Layout/NotifyPopUp.tsx";

import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SingleTicket } from "../AdminComponents/DummyDatas/Tickets.tsx";
import { TicketType } from "../Types/TicketType.tsx";

function AdminTicket() {
   const [searchParams] = useSearchParams();
   const id = searchParams.get("id");

   console.log("AdminTicket");

   const { data, isPending, isError } = useQuery({
      queryKey: ["Ticket", id],
      queryFn: async () => {
         const response = await axios.get<TicketType>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         return SingleTicket || response.data;
      },
   });

   const editingTicketStatus = useMutation({
      mutationKey: [],
      mutationFn: async (newStatus: string) => {
         // console.log({ ...data, status: newStatus });
         const response = await axios.post(
            "https://reqres.in/api/users",
            JSON.stringify({
               name: "morpheus",
               job: "leader",
            }),
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         return response.status;
      },
      onSuccess: () => {},
   });

   if (isPending) return <div>...loading</div>;
   if (isError) return <div>...failed</div>;

   return (
      <div>
         <TicketForm
            ticket={data}
            editingTicketStatus={editingTicketStatus.mutate}
         />
         {(editingTicketStatus.isSuccess || editingTicketStatus.isError) && (
            <NotifyPopUp
               subject={
                  editingTicketStatus.isSuccess
                     ? "Successfully changed status"
                     : "change status failed"
               }
               toClose={() => editingTicketStatus.reset()}
            />
         )}
      </div>
   );
}

export default AdminTicket;
