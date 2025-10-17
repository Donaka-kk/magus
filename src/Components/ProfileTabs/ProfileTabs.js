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
   faFileCirclePlus,
   faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProfileTab from "../ProfileTab/ProfileTab";

function ProfileInfo({ activeTab, setActiveTab, handleLogOut, role }) {
   console.log("profile Info");
   const handleActiveTab = (tab) => {
      if (tab === "Log out") handleLogOut();
   };
   return (
      <div className="border-r-2 border-r-black ">
         <div className="flex flex-row justify-center items-center border-b gap-2 p-2 border-black">
            <img
               className="hidden md:flex w-20 h-20 rounded-full border-2 border-black"
               src={
                  "https://m.media-amazon.com/images/M/MV5BMmU1YWU1NmMtMjAyMi00MjFiLWFmZmUtOTc1ZjI5ODkxYmQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
               }
               alt="qwerty"
            />
            <div className="flex flex-col items-center md:items-start justify-center">
               <p className="text-center ">akbar abdi</p>
               <p className="text-center hidden md:block">+98912345678</p>
               <p className="text-center ">role</p>
            </div>
         </div>
         <div className="w-full flex flex-col justify-center items-center py-1 gap-1">
            <ProfileTab
               setActiveTab={() => handleActiveTab("Notifications")}
               text={"Notifications"}
               icon={faBell}
            />
            <ProfileTab
               setActiveTab={() => handleActiveTab("Wishlist")}
               text={"Wishlist"}
               icon={faBookmark}
            />
            <ProfileTab
               setActiveTab={() => handleActiveTab("Edit profile")}
               text={"Edit profile"}
               icon={faUserPen}
            />
            <ProfileTab
               setActiveTab={() => handleActiveTab("")}
               text={"recently viewed"}
               icon={faClockRotateLeft}
            />
            <ProfileTab
               setActiveTab={() => handleActiveTab("")}
               text={"tracking order"}
               icon={faTruckFast}
            />
            <ProfileTab
               setActiveTab={() => handleActiveTab("")}
               text={"gift cards"}
               icon={faGift}
            />
            <ProfileTab
               setActiveTab={() => handleActiveTab("")}
               text={"tickets"}
               icon={faFileCircleQuestion}
            />
            <ProfileTab
               setActiveTab={() => handleActiveTab("")}
               text={"milestones"}
               icon={faPersonHiking}
            />
            {role === "admin" && (
               <>
                  <ProfileTab
                     setActiveTab={() => handleActiveTab("")}
                     text={"add new blog"}
                     icon={faFileCirclePlus}
                  />
                  <ProfileTab
                     setActiveTab={() => handleActiveTab("")}
                     text={"AED"}
                     icon={faFilePen}
                  />
               </>
            )}
            <ProfileTab
               setActiveTab={() => handleActiveTab("Log out")}
               text={"Log out"}
               icon={faArrowRightFromBracket}
            />
         </div>
      </div>
   );
}
export default React.memo(ProfileInfo);
