import SideBarButton from "./SideBarButton.tsx";
import {
   faArrowRightFromBracket,
   faBell,
   faBookmark,
   faUserPen,
   faGift,
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
         <div className="w-full border-b-2 border-gray-300 p-2">
            <h1 className="text-xl text-center font-bold">3DAVINCI</h1>
            <p className="font-semibold text-center text-gray-500">
               Design your dreams
            </p>
         </div>
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
