import ProfileSideBar from "./ProfileSideBar.tsx";
import ProfilePanel from "./ProfilePanel.tsx";
import HeadBar from "./HeadBar.tsx";
import { useState } from "react";

import EditProfile from "./Sections/EditProfile.tsx";
import GiftCards from "./Sections/GiftCards.tsx";
import Milestones from "./Sections/Milestones.tsx";
import Notifications from "./Sections/Notification.tsx";
import RecentlyViewed from "./Sections/RecentlyViewed.tsx";
import Tickets from "./Sections/Tickets.tsx";
import TrackingOrders from "./Sections/TrackingOrders.tsx";
import WishList from "./Sections/WishList.tsx";

const Components = {
   editProfile: <EditProfile />,
   giftCards: <GiftCards />,
   milestones: <Milestones />,
   notifications: <Notifications />,
   recentlyViewed: <RecentlyViewed />,
   tickets: <Tickets />,
   trackingOrder: <TrackingOrders />,
   wishlist: <WishList />,
};

interface ProfileComponentProps {
   user: {
      firstname: string;
      lastname: string;
      image: string;
      age: number;
      role: string;
   };
   handleLogOut: () => void;
}

function ProfileComponent({ user, handleLogOut }: ProfileComponentProps) {
   const [activeTab, setActiveTab] = useState("notifications");

   return (
      <div className="flex border-2 border-black w-full">
         <div className="flex flex-col gap-2 w-16 md:w-60 border-r border-black p-2">
            <div className="w-full border-b-2 border-gray-300 p-2">
               <h1 className="text-xl text-center font-bold">3DAVINCI</h1>
               <p className="font-semibold text-center text-gray-500">
                  Design your dreams
               </p>
            </div>
            <ProfileSideBar
               handleLogOut={handleLogOut}
               activeTab={activeTab}
               setActiveTab={setActiveTab}
            />
         </div>
         <div className="flex flex-col w-full p-2">
            <HeadBar user={user} />
            <ProfilePanel activeTab={activeTab} components={Components} />
         </div>
      </div>
   );
}
export default ProfileComponent;
