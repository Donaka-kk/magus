import LoadingComponent from "../../../Layout/LoadingComponent";
import { useEffect, useState } from "react";
import Notification from "./Notification.tsx";
import NotifyingPopUp from "../../../Layout/NotifyingPopUp.tsx";
import { NotificationType } from "../../../../Types/NotificationType.tsx";

interface NotificationsProps {
   notifications?: NotificationType[];
   handleReadingNotification: (id: number) => void;
}

function Notifications({
   notifications,
   handleReadingNotification,
}: NotificationsProps) {
   const [status, setStatus] = useState<"loading" | "failed" | "succeed">(
      "loading"
   );
   const [popUp, setPopUp] = useState<React.ReactNode>(null);
   const createPopUp = (notification: NotificationType) => {
      if (!notification.read) {
         handleReadingNotification(notification.id);
      }

      setPopUp(
         <NotifyingPopUp
            subject={notification.subject}
            text={notification.message}
            handleClosingPopUp={() => setPopUp(null)}
         />
      );
   };

   useEffect(() => {
      if (!notifications) {
         setStatus("loading");
         const timer = setTimeout(() => {
            setStatus("failed");
         }, 5000);
         return () => clearTimeout(timer);
      } else {
         setStatus("succeed");
      }
   }, [notifications]);

   if (status === "loading") {
      return <LoadingComponent failed={false} />;
   }

   if (status === "failed") {
      return <LoadingComponent failed={true} />;
   }
   return (
      <div>
         {popUp}
         <div className="flex flex-col w-full h-full gap-2">
            {notifications?.map((notification, index) => {
               return (
                  <Notification
                     key={index}
                     notification={notification}
                     createPopUp={createPopUp}
                  />
               );
            })}
         </div>
      </div>
   );
}
export default Notifications;
