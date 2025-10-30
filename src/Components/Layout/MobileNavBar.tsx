import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function MobileNavBar() {
   const nav = useNavigate();
   const [sideBar, setSideBar] = useState<boolean>(false);

   return (
      <div className="md:hidden h-full font-semibold flex">
         <button
            onClick={() => setSideBar((prev) => !prev)}
            className={`z-20 ${
               sideBar
                  ? `fixed top-3 right-5 text-white text-2xl sm:text-3xl`
                  : `relative text-4xl`
            }`}
         >
            {sideBar ? (
               <FontAwesomeIcon icon={faX} />
            ) : (
               <FontAwesomeIcon icon={faBars} />
            )}
         </button>
         <div
            className={`fixed w-5/12 sm:w-56 h-screen top-0 right-0 bg-transparent08 pt-2 border-l-2 z-10 border-black ${
               sideBar ? `translate-x-0` : `translate-x-full`
            } ease-in-out duration-[500ms]`}
         >
            <ul className="w-full flex flex-col items-center text-base sm:text-xl gap-4 mt-12 mb-4 text-white">
               <li
                  onClick={() => {
                     setSideBar(false);
                     nav("/");
                  }}
                  className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
               >
                  Home
               </li>
               <li
                  onClick={() => {
                     setSideBar(false);
                     nav("/shop");
                  }}
                  className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
               >
                  Shop
               </li>
               <li
                  onClick={() => {
                     setSideBar(false);
                     nav("/aboutus");
                  }}
                  className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
               >
                  About us
               </li>
               <li
                  onClick={() => {
                     setSideBar(false);
                     nav("/contact");
                  }}
                  className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
               >
                  Contact
               </li>
               <li
                  onClick={() => {
                     setSideBar(false);
                     nav("/login");
                  }}
                  className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
               >
                  Login
               </li>
               <li
                  onClick={() => {
                     setSideBar(false);
                     nav("/profile");
                  }}
                  className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
               >
                  Profile
               </li>
               <li
                  onClick={() => {
                     setSideBar(false);
                     nav("/cart");
                  }}
                  className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
               >
                  Cart
               </li>
            </ul>
         </div>
      </div>
   );
}
export default MobileNavBar;
