import SideBarButton from "./SideBarButton.tsx";
import { useState } from "react";
import {
   faArrowRightFromBracket,
   faBell,
   faBookmark,
   faUserPen,
   faGift,
   faClockRotateLeft,
   faTruckFast,
   faFileCircleQuestion,
   faPersonHiking,
} from "@fortawesome/free-solid-svg-icons";

interface ProfileSideBarProps {
   handleLogOut: () => void;
   activeTab: string;
   setActiveTab: (tab: string) => void;
}

function ProfileSideBar({
   handleLogOut,
   activeTab,
   setActiveTab,
}: ProfileSideBarProps) {
   // const [activeTab, setActiveTab] = useState("Notifications");

   return (
      <div className="flex flex-col gap-3">
         <SideBarButton
            setActiveTab={() => setActiveTab("notifications")}
            text={"Notifications"}
            icon={faBell}
            active={activeTab === "notifications" ? true : false}
         />
         <SideBarButton
            setActiveTab={() => setActiveTab("wishlist")}
            text={"Wishlist"}
            icon={faBookmark}
            active={activeTab === "wishlist" ? true : false}
         />
         <SideBarButton
            setActiveTab={() => setActiveTab("editProfile")}
            text={"Edit profile"}
            icon={faUserPen}
            active={activeTab === "editProfile" ? true : false}
         />
         <SideBarButton
            setActiveTab={() => setActiveTab("recentlyViewed")}
            text={"recently viewed"}
            icon={faClockRotateLeft}
            active={activeTab === "recentlyViewed" ? true : false}
         />
         <SideBarButton
            setActiveTab={() => setActiveTab("trackingOrder")}
            text={"tracking order"}
            icon={faTruckFast}
            active={activeTab === "trackingOrder" ? true : false}
         />
         <SideBarButton
            setActiveTab={() => setActiveTab("giftCards")}
            text={"gift cards"}
            icon={faGift}
            active={activeTab === "giftCards" ? true : false}
         />
         <SideBarButton
            setActiveTab={() => setActiveTab("tickets")}
            text={"tickets"}
            icon={faFileCircleQuestion}
            active={activeTab === "tickets" ? true : false}
         />
         <SideBarButton
            setActiveTab={() => setActiveTab("milestones")}
            text={"milestones"}
            icon={faPersonHiking}
            active={activeTab === "milestones" ? true : false}
         />
         <SideBarButton
            setActiveTab={() => handleLogOut()}
            text={"Log out"}
            icon={faArrowRightFromBracket}
            active={false}
         />
      </div>
   );
}
export default ProfileSideBar;
