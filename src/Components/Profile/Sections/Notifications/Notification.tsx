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
            className={`relative flex flex-row justify-around items-center border-2 active:scale-95 border-black ${notification.read === false ? " text-black" : " text-gray-400"}`}
         >
            <span className="absolute top-0 left-2 text-red-600 text-xl">
               {notification.read === false && (
                  <FontAwesomeIcon icon={faCertificate} />
               )}
            </span>
            <h1 className="text-xl font-semibold">{notification.subject}</h1>
            <div className="text-sm p-2">
               <p>Sent: {notification.sentDate}</p>
               {notification.read === true && (
                  <p>Read: {notification.readDate}</p>
               )}
            </div>
         </button>
      </>
   );
}
export default Notification;
