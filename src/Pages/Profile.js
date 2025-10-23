import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/User";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ProfileSideBar from "../Components/Profile/ProfileSideBar.tsx";
import HeadBar from "../Components/Profile/HeadBar.tsx";
//sections
import EditProfile from "../Components/Profile/Sections/EditProfile.tsx";
import GiftCards from "../Components/Profile/Sections/GiftCards/GiftCards.tsx";
import Milestones from "../Components/Profile/Sections/Milestones.tsx";
import Notifications from "../Components/Profile/Sections/Notifications/Notifications.tsx";
import Tickets from "../Components/Profile/Sections/Tickets/Tickets.tsx";
import Orders from "../Components/Profile/Sections/Orders/Orders.tsx";
import WishList from "../Components/Profile/Sections/WishList/WishList.tsx";

import { ProfileDummyData } from "../Components/API/Dummy.js";
import { NewProfileDummyData } from "../Components/API/Dummy.js";

const Profile = () => {
   const { user, updateUser } = UserContext();
   const nav = useNavigate();
   const [activeTab, setActiveTab] = useState("notifications");
   const [data, setData] = useState();

   const handleReadingNotification = async (id) => {
      try {
         await axios.patch(
            "https://reqres.in/api/user/12",
            JSON.stringify({
               updatedAt: "string",
            }),

            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         setData({ ...data, notifications: NewProfileDummyData.notifications });
      } catch (error) {
         console.log(error);
      }
   };
   const handleLogOut = useCallback(() => {
      sessionStorage.clear("user");
      sessionStorage.clear("cart");
      updateUser(null);
      nav("/");
   }, []);
   const getData = async () => {
      try {
         await axios
            .get("https://reqres.in/api/login", {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            })
            .then((response) => {
               if (response?.status === 200) {
                  setData(ProfileDummyData);
               } else {
                  console.log("something went wrong!");
               }
            });
      } catch (error) {
         console.log(error);
      }
   };

   const tabs = {
      editProfile: <EditProfile user={user} />,
      giftCards: <GiftCards giftCards={data?.giftCards} />,
      milestones: <Milestones user={user} mileStones={data?.mileStones} />,
      notifications: (
         <Notifications
            notifications={data?.notifications}
            handleReadingNotification={handleReadingNotification}
         />
      ),
      tickets: <Tickets tickets={data?.tickets} />,
      trackingOrder: <Orders orders={data?.orders} />,
      wishlist: <WishList wishList={data?.wishList} />,
   };
   const ActiveComponent = tabs[activeTab];

   useEffect(() => {
      getData();
   }, []);

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
         <div className="flex border-2 border-black w-full">
            <div className="flex flex-col gap-2 w-16 md:w-60 border-r border-black p-2">
               <ProfileSideBar
                  handleLogOut={handleLogOut}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
               />
            </div>
            <div className="flex flex-col w-full p-2 gap-2">
               <HeadBar user={user} />
               {ActiveComponent}
            </div>
         </div>
      </div>
   );
};

export default Profile;
