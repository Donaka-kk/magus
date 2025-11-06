import Ticket from "./Ticket.tsx";
import FormPopUp from "../../../Layout/FormPopUp.tsx";
import axios from "axios";
import LoadingComponent from "../../../Layout/LoadingComponent.js";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProfileDummyData } from "../../../API/ProfileDummyData.tsx";
import { NewProfileDummyData } from "../../../API/ProfileDummyData.tsx";
import { MessageType } from "../../../../Types/MessageType.tsx";
import { NewTicketType } from "../../../../Types/TicketType.tsx";

function Tickets() {
   const [message, setMessage] = useState<MessageType>();
   const [showFormPopUp, setShowFormPopUp] = useState<boolean>(false);
   const queryClient = useQueryClient();

   const {
      data: tickets,
      isPending,
      isError,
   } = useQuery({
      queryKey: ["Tickets"],
      queryFn: async () => {
         const response = await axios.get("https://reqres.in/api/users/1", {
            headers: {
               "x-api-key": "reqres-free-v1",
            },
         });
         //change this to response before build
         return ProfileDummyData.tickets || response;
      },
   });
   const createNewTicket = useMutation({
      mutationFn: async ({ subject, text }: NewTicketType) => {
         const response = await axios.patch(
            "https://reqres.in/api/users/1",
            JSON.stringify({
               data: {
                  id: 0,
                  email: subject,
                  first_name: text,
                  last_name: "string",
                  avatar: "string",
               },
            }),
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         //change this to response before build
         // return NewProfileDummyData.tickets;
         return response;
      },
      onSuccess: async () => {
         setMessage({ status: "succeed", text: "succeed" });
         //change these lines before build
         // await queryClient.invalidateQueries({ queryKey: ["notification"] });
         await queryClient.setQueryData(
            ["notifications"],
            NewProfileDummyData.tickets
         );
      },
      onError: async () => {
         setMessage({ status: "failed", text: "failed" });
      },
   });

   if (isPending) {
      return <LoadingComponent failed={false} />;
   }

   if (isError) {
      return <LoadingComponent failed={true} />;
   }

   return (
      <div className="relative w-full h-full flex flex-col items-center justify-around gap-2">
         {showFormPopUp && (
            <FormPopUp
               createNewTicket={createNewTicket.mutate}
               handleClosingPopUp={() => setShowFormPopUp(false)}
               message={message}
            />
         )}
         <div className="flex flex-col sm:grid-cols-2 md:grid-cols-3 w-full h-full gap-5">
            {tickets?.map((ticket, index) => {
               return <Ticket key={index} ticket={ticket} />;
            })}
         </div>
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
