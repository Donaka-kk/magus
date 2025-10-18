import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/User";
import { useCallback } from "react";
import ProfileComponent from "../Components/Profile/ProfileComponent.tsx";

const Profile = () => {
   const { user, updateUser } = UserContext();
   const nav = useNavigate();

   const handleLogOut = useCallback(() => {
      sessionStorage.clear("user");
      sessionStorage.clear("cart");
      updateUser(null);
      nav("/");
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
         <ProfileComponent user={user} handleLogOut={handleLogOut} />
      </div>
   );
};

export default Profile;
