import LoadingComponent from "../../../Layout/LoadingComponent";
import axios from "axios";
import Notification from "./Notification.tsx";

import { ProfileDummyData } from "../../../API/ProfileDummyData.tsx";
import { NewProfileDummyData } from "../../../API/ProfileDummyData.tsx";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function Notifications() {
   const queryClient = useQueryClient();

   const {
      data: notifications,
      isPending,
      isError,
   } = useQuery({
      queryKey: ["notifications"],
      queryFn: async () => {
         const response = await axios.get("https://reqres.in/api/users/1", {
            headers: {
               "x-api-key": "reqres-free-v1",
            },
         });
         //change this to response before build
         return ProfileDummyData.notifications || response;
      },
   });

   const mutation = useMutation({
      mutationFn: async (id: number) => {
         const response = await axios.patch(
            "https://reqres.in/api/users/1",
            JSON.stringify({
               data: {
                  id: id,
                  email: "string",
                  first_name: "string",
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
         return NewProfileDummyData.notifications || response;
      },
      onSuccess: async () => {
         //change these lines before build
         // await queryClient.invalidateQueries({ queryKey: ["notification"] });
         await queryClient.setQueryData(
            ["notifications"],
            NewProfileDummyData.notifications
         );
      },
   });

   if (isPending) {
      return <LoadingComponent failed={false} />;
   }

   if (isError) {
      return <LoadingComponent failed={true} />;
   }

   return (
      <div>
         <div className="flex flex-col w-full h-full gap-2">
            {notifications.map((notification, index) => {
               return (
                  <Notification
                     key={index}
                     notification={notification}
                     readingNotif={mutation.mutate}
                  />
               );
            })}
         </div>
      </div>
   );
}
export default Notifications;
