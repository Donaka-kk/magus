import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NotificationType } from "../../../../Types/NotificationType.tsx";

interface NotificationProps {
   notification: NotificationType;
   createPopUp: (notification: NotificationType) => void;
}

function Notification({ notification, createPopUp }: NotificationProps) {
   return (
      <button
         onClick={() => createPopUp(notification)}
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
            {notification.read === true && <p>Read: {notification.readDate}</p>}
         </div>
      </button>
   );
}
export default Notification;
