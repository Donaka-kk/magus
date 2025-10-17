import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/User";
import { useState, useCallback } from "react";
import ProfileTabs from "../Components/ProfileTabs/ProfileTabs";
import Panel from "../Components/Panel/Panel";

const Profile = () => {
   const { user, updateUser } = UserContext();
   const nav = useNavigate();
   const [activeTab, setActiveTab] = useState("panel");

   const handleLogOut = useCallback(() => {
      sessionStorage.clear("user");
      sessionStorage.clear("cart");
      updateUser(null);
      nav("/");
   }, []);

   const handleButtons = useCallback((activeTab) => {
      setActiveTab(activeTab);
   }, []);
   return (
      <div className="p-2">
         {!user ? (
            <div className="flex flex-col justify-center items-center text-3xl font-bold gap-4">
               <p>You have to login first !</p>
               <button
                  onClick={() => nav("/login")}
                  className="border-2 border-black rounded-md p-3 active:scale-95"
               >
                  login
               </button>
            </div>
         ) : (
            <div className="relative flex flex-row border-2 border-black">
               <div className="w-2/12 sm:w-1/12 md:w-3/12 md:text-base lg:w-2/12 lg:text-lg xl:text-xl">
                  <ProfileTabs
                     activeTab={activeTab}
                     setActiveTab={handleButtons}
                     handleLogOut={handleLogOut}
                     role={"admin"}
                  />
               </div>
               <div className="w-10/12">
                  <Panel activeTab={activeTab} />
               </div>
            </div>
         )}
      </div>
   );
};

export default Profile;
