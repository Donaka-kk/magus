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
import { useUser } from "../../Context/User.tsx";
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
   const { user } = useUser();
   // const [activeTab, setActiveTab] = useState("Notifications");

   return (
      //
      //
      <div className="flex flex-col gap-5 border shadow-2xl rounded-lg py-2 bg-surface">
         <div className="flex flex-col justify-center items-center px-2 gap-2">
            <img
               src={user!.image}
               alt="user"
               className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-black"
            />
            <div className="flex flex-col font-semibold break-words text-center text-xs sm:text-sm md:text-lg break-all">
               <p>{user!.firstname}</p>
               <p>{user!.lastname}</p>
            </div>
         </div>
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
      </div>
   );
}
export default ProfileSideBar;
