import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/User";
import { useCallback, useState } from "react";
import ProfileComponent from "../Components/Profile/ProfileComponent.tsx";
import axios from "axios";

const dummyDataNotif = [
   {
      subject: "qwerty1",
      text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      read: false,
   },
   {
      subject: "qwerty2",
      text: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      read: true,
   },
   {
      subject: "qwerty3",
      text: "ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
      read: false,
   },
];

const Profile = () => {
   const { user, updateUser } = UserContext();
   const nav = useNavigate();
   const [notifications, setNotifications] = useState([]);

   const handleLogOut = useCallback(() => {
      sessionStorage.clear("user");
      sessionStorage.clear("cart");
      updateUser(null);
      nav("/");
   }, []);

   const getNotificationData = async () => {
      try {
         await axios.get("https://reqres.in/api/login", {
            headers: {
               "x-api-key": "reqres-free-v1",
            },
         });
         return dummyDataNotif;
      } catch (error) {
         console.log(error);
      }
   };

   if (!user) {
      return (
         <div className="flex flex-col justify-center items-center text-3xl font-bold gap-4">
            <p>You have to login first !</p>
            <button
               onClick={() => nav("/login")}
               className="border-2 border-black rounded-md p-3 active:scale-95"
            >
               login
            </button>
         </div>
      );
   }
   return (
      <div className="p-2">
         <ProfileComponent
            user={user}
            handleLogOut={handleLogOut}
            getNotificationData={getNotificationData}
         />
      </div>
   );
};

export default Profile;
