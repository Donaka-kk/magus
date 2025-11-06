import NotifyPopUp from "../../../Layout/NotifyPopUp.tsx";

import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NotificationType } from "../../../../Types/NotificationType.tsx";
import { useState } from "react";

interface NotificationProps {
   notification: NotificationType;
   readingNotif: (id: number) => void;
}

function Notification({ notification, readingNotif }: NotificationProps) {
   const [notifyPopUp, setNotifyPopUp] = useState<NotificationType>();
   return (
      <>
         {notifyPopUp && (
            <NotifyPopUp
               subject={notification.subject}
               text={notification.message}
               handleClosingPopUp={() => setNotifyPopUp(undefined)}
            />
         )}
         <button
            onClick={() => {
               if (!notification.read) readingNotif(notification.id);
               setNotifyPopUp(notification);
            }}
            className={`relative h-20 md:h-14 flex flex-col md:flex-row justify-around items-center border rounded-lg shadow-xl active:scale-95 active:shadow-inner ${notification.read === false ? " text-black" : " text-gray-400"}`}
         >
            <span className="absolute top-0 left-1 text-red-600 text-sm">
               {notification.read === false && (
                  <FontAwesomeIcon icon={faCertificate} />
               )}
            </span>
            <h1 className="text-sm sm:text-base md:text-xl font-semibold">
               {notification.subject}
            </h1>
            <div className="text-xs p-2">
               <p>Sent: {notification.sentDate}</p>
               <p>Read: {notification.readDate || "Not Read"}</p>
            </div>
         </button>
      </>
   );
}
export default Notification;
