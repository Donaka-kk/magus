import { useNavigate } from "react-router-dom";

function DesktopNavBar() {
   const nav = useNavigate();
   return (
      <div className="hidden md:flex h-full font-semibold text-base lg:text-xl xl:text-2xl items-center">
         <ul className="flex flex-row gap-6 items-center text-black">
            <li
               onClick={() => nav("/")}
               className="border-b-2 border-transparent hover:border-black hover:cursor-pointer active:scale-95"
            >
               <div className="relative z-20 p-1">Home</div>
            </li>
            <li
               onClick={() => nav("/admin")}
               className="border-b-2 border-transparent hover:border-black hover:cursor-pointer active:scale-95"
            >
               <div className="relative z-20 p-1">admin</div>
            </li>
            <li
               onClick={() => nav("/shop")}
               className="border-b-2 border-transparent hover:border-black hover:cursor-pointer active:scale-95"
            >
               <div className="relative z-20 p-1">Shop</div>
            </li>
            <li
               onClick={() => nav("/aboutus")}
               className="border-b-2 border-transparent hover:border-black hover:cursor-pointer active:scale-95"
            >
               <div className="relative z-20 p-1">About us</div>
            </li>
            <li
               onClick={() => nav("/contact")}
               className="border-b-2 border-transparent hover:border-black hover:cursor-pointer active:scale-95"
            >
               <div className="relative z-20 p-1">Contact</div>
            </li>
         </ul>
      </div>
   );
}
export default DesktopNavBar;
