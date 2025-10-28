import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../Context/User";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MiniProfile() {
   const [activeProf, setActiveProf] = useState(false);
   const nav = useNavigate();
   const { user } = UserContext();
   return (
      <div className="hidden md:flex text-2xl gap-4">
         <button onClick={() => nav("/cart")}>
            <FontAwesomeIcon icon={faCartShopping} />
         </button>
         {user ? (
            <div
               className="flex flex-row relative justify-center items-center p-2 gap-3 rounded-full bg-gray-600 text-white hover:cursor-pointer"
               onMouseEnter={() => setActiveProf(true)}
               onMouseLeave={() => setActiveProf(false)}
               onClick={() => nav("/Profile")}
            >
               <span className="w-16 h-16 rounded-full text-black bg-white text-3xl z-10">
                  <img
                     src={user.image}
                     alt="userImage"
                     className="w-16 h-16 rounded-full object-cover"
                  />
                  {/* <FontAwesomeIcon icon={faUser} /> */}
               </span>
               <span
                  className={`${activeProf ? "opacity-100 translate-x-12" : "opacity-0"} absolute duration-300 z-0 bg-gray-600 h-16 w-32 left-2 rounded-r-full flex justify-center items-center`}
               >
                  {user.firstname}
               </span>
            </div>
         ) : (
            <button
               className="font-bold active:scale-95 border border-black rounded-xl px-2 py-1"
               onClick={
                  () => nav("/Login")
                  // alert("You are not logged in, Can not show your profile !")
               }
            >
               Login
            </button>
         )}
      </div>
   );
}
export default MiniProfile;
