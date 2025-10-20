import LoadingComponent from "../../Layout/LoadingComponent";
import { useEffect, useState } from "react";

interface NotificationProps {
   getNotificationData: () => Promise<any>;
}
function Notifications({ getNotificationData }: NotificationProps) {
   const [loading, setLoading] = useState(true);
   const [message, setMessage] = useState("");
   const [notifications, setNotifications] = useState();

   useEffect(() => {
      const getData = async () => {
         await getNotificationData().then((response) => {
            if (response?.status === 200) {
               setLoading(false);
               setMessage("");
            } else {
               setLoading(false);
               setMessage("Something went wrong, refresh the page !");
            }
         });
      };
      getData();
   }, [getNotificationData]);

   if (loading) {
      return (
         <div>
            <LoadingComponent failed={false} />
         </div>
      );
   }

   if (message !== "") {
      return (
         <div>
            <p>{message}</p>
         </div>
      );
   }

   return <div>notifs</div>;
}
export default Notifications;
