import { useNavigate } from "react-router-dom";

function FloatingProfile() {
   const nav = useNavigate();
   return (
      <div className="sticky top-10 h-fit flex flex-col gap-5">
         <div className="flex flex-col justify-center items-center w-full text-sm md:w-60 md:text-base xl:w-72 xl:text-lg gap-4 border-2 border-black rounded-md p-4">
            <p className="w-full text-center">You haven't logged in yet !</p>
            <button
               onClick={() => nav("/login")}
               className="px-2 py-1 border-2 border-black rounded-md"
            >
               Log in
            </button>
         </div>
      </div>
   );
}
export default FloatingProfile;
