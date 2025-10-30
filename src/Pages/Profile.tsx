import ProfileSideBar from "../Components/Profile/ProfileSideBar.tsx";
import HeadBar from "../Components/Profile/HeadBar.tsx";

import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/User.tsx";
import { useState } from "react";
//sections
import EditProfile from "../Components/Profile/Sections/EditProfile/EditProfile.tsx";
import GiftCards from "../Components/Profile/Sections/GiftCards/GiftCards.tsx";
import Milestones from "../Components/Profile/Sections/MileStones/Milestones.tsx";
import Notifications from "../Components/Profile/Sections/Notifications/Notifications.tsx";
import Tickets from "../Components/Profile/Sections/Tickets/Tickets.tsx";
import Orders from "../Components/Profile/Sections/Orders/Orders.tsx";
import WishList from "../Components/Profile/Sections/WishList/WishList.tsx";

const Profile = () => {
   const { user, logout } = useUser();
   const nav = useNavigate();
   const [activeTab, setActiveTab] = useState<string>("notifications");

   const tabs: Record<string, React.ReactNode> = {
      editProfile: <EditProfile />,
      giftCards: <GiftCards />,
      milestones: <Milestones />,
      notifications: <Notifications />,
      tickets: <Tickets />,
      trackingOrder: <Orders />,
      wishlist: <WishList />,
   };
   const ActiveComponent = tabs[activeTab];

   if (!user) {
      return (
         <div className="flex flex-col justify-center items-center font-bold gap-4 p-5 text-lg md:text-xl lg:text-3xl">
            <p>You have to login first !</p>
            <button
               onClick={() => nav("/login")}
               className="border-2 border-black rounded-md p-3 active:scale-95"
            >
               Login
            </button>
         </div>
      );
   }

   return (
      <div className="p-2">
         <div className="flex border-2 border-black w-full">
            <div className="flex flex-col gap-2 w-16 md:w-60 border-r border-black p-2">
               <ProfileSideBar
                  handleLogOut={logout}
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
