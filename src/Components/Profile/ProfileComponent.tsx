import ProfileSideBar from "./ProfileSideBar.tsx";
import HeadBar from "./HeadBar.tsx";
import { useState } from "react";

import EditProfile from "./Sections/EditProfile.tsx";
import GiftCards from "./Sections/GiftCards.tsx";
import Milestones from "./Sections/Milestones.tsx";
import Notifications from "./Sections/Notification.tsx";
import Tickets from "./Sections/Tickets.tsx";
import TrackingOrders from "./Sections/TrackingOrders.tsx";
import WishList from "./Sections/WishList.tsx";

interface ProfileComponentProps {
   user: {
      firstname: string;
      lastname: string;
      image: string;
      age: number;
      role: string;
      phoneNumber: number;
      address: string;
      email: string;
   };
   handleLogOut: () => void;
   getNotificationData: () => Promise<any>;
}

function ProfileComponent({
   user,
   handleLogOut,
   getNotificationData,
}: ProfileComponentProps) {
   const [activeTab, setActiveTab] = useState("editProfile");
   const tabConfig: Record<string, { component: React.FC<any>; props: any }> = {
      editProfile: { component: EditProfile, props: { user } },
      giftCards: { component: GiftCards, props: {} },
      milestones: { component: Milestones, props: {} },
      notifications: {
         component: Notifications,
         props: { getNotificationData },
      },
      tickets: { component: Tickets, props: {} },
      trackingOrder: { component: TrackingOrders, props: {} },
      wishlist: { component: WishList, props: {} },
   };
   const { component: ActiveComponent, props } = tabConfig[activeTab];

   return (
      <div className="flex border-2 border-black w-full">
         <div className="flex flex-col gap-2 w-16 md:w-60 border-r border-black p-2">
            <ProfileSideBar
               handleLogOut={handleLogOut}
               activeTab={activeTab}
               setActiveTab={setActiveTab}
            />
         </div>
         <div className="flex flex-col w-full p-2">
            <HeadBar user={user} />
            <ActiveComponent {...props} />
         </div>
      </div>
   );
}
export default ProfileComponent;
