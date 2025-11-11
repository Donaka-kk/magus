import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function FloatingProfile() {
   const nav = useNavigate();
   return (
      <div className="">
         <div className="hidden md:flex flex-col justify-center items-center w-full text-sm md:w-60 md:text-base xl:w-72 xl:text-lg gap-4 border-2 border-black rounded-md p-4">
            <p className="w-full text-center">You haven't logged in yet !</p>
            <button
               onClick={() => nav("/login")}
               className="px-2 py-1 border-2 border-black rounded-md"
            >
               Log in
            </button>
         </div>
         <div className="md:hidden text-center border-2 border-black rounded-md p-4">
            <FontAwesomeIcon icon={faCartShopping} />
         </div>
      </div>
   );
}
export default FloatingProfile;
