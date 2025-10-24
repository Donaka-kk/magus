import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faBars,
   faCartShopping,
   faUser,
   faX,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../utilities/logo-no-background.webp";
import { UserContext } from "../../Context/User";

const NavBar = () => {
   const [showSideNav, setShowSideNav] = useState(false);
   const closeSideNav = () => {
      setShowSideNav(false);
   };
   const nav = useNavigate();
   const { user } = UserContext();
   const [activeProf, setActiveProf] = useState(false);

   return (
      <div className="w-full h-full flex flex-row items-center justify-between px-10 md:justify-around md:px-3 border-b-2 border-black bg-backGround">
         <div className="flex text-2xl">
            <button
               onClick={() => {
                  nav("/");
                  window.scrollTo(0, 0);
               }}
            >
               <img src={Logo} alt="logo" className="w-20" />
            </button>
         </div>

         {/* for tablet & desktop users */}
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
         {/* for mobile users */}
         <div className="md:hidden h-full font-semibold flex">
            <button
               onClick={() => {
                  setShowSideNav((prev) => !prev);
               }}
               className={`z-20 ${
                  showSideNav
                     ? `fixed top-3 right-5 text-white text-4xl`
                     : `relative text-5xl`
               }`}
            >
               {showSideNav ? (
                  <FontAwesomeIcon icon={faX} />
               ) : (
                  <FontAwesomeIcon icon={faBars} />
               )}
            </button>
            <div
               className={`fixed w-56 h-screen top-0 right-0 bg-transparent08 pt-2 border-l-2 z-10 border-black ${
                  showSideNav ? `translate-x-0` : `translate-x-full`
               } ease-in-out duration-[1000ms]`}
            >
               <ul className="w-full flex flex-col items-center text-xl gap-4 mt-12 mb-4 text-white">
                  <li
                     onClick={() => {
                        closeSideNav();
                        nav("/");
                     }}
                     className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
                  >
                     Home
                  </li>
                  <li
                     onClick={() => {
                        closeSideNav();
                        nav("/shop");
                     }}
                     className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
                  >
                     Shop
                  </li>
                  <li
                     onClick={() => {
                        closeSideNav();
                        nav("/aboutus");
                     }}
                     className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
                  >
                     About us
                  </li>
                  <li
                     onClick={() => {
                        closeSideNav();
                        nav("/contact");
                     }}
                     className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
                  >
                     Contact
                  </li>
               </ul>
               <ul className="w-full flex flex-col items-center text-xl gap-4 py-4 border-t-2 border-white text-white">
                  <li
                     onClick={() => {
                        closeSideNav();
                        nav("/profile");
                     }}
                     className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
                  >
                     Profile
                  </li>
                  <li
                     onClick={() => {
                        closeSideNav();
                        nav("/cart");
                     }}
                     className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
                  >
                     Cart
                  </li>
               </ul>
            </div>
         </div>

         <div className="hidden md:flex text-2xl gap-4">
            <button
               onClick={
                  () => nav("/cart")
                  // alert("You are not logged in, Can not show your cart !")
               }
            >
               <FontAwesomeIcon icon={faCartShopping} />
            </button>
            {user ? (
               <>
                  <div
                     className="flex flex-row relative justify-center items-center p-2 gap-3 rounded-full bg-gray-600 text-white hover:cursor-pointer"
                     onMouseEnter={() => setActiveProf(true)}
                     onMouseLeave={() => setActiveProf(false)}
                     onClick={() => nav("/Profile")}
                  >
                     <button className="w-16 h-16 rounded-full text-black bg-white text-3xl z-10">
                        <FontAwesomeIcon icon={faUser} />
                     </button>
                     <span
                        className={`${activeProf ? "opacity-100 translate-x-12" : "opacity-0"} absolute duration-300 z-0 bg-gray-600 h-16 w-32 left-2 rounded-r-full flex justify-center items-center`}
                     >
                        {user.name}
                     </span>
                  </div>
               </>
            ) : (
               <>
                  <button
                     className="font-bold active:scale-95 border border-black rounded-xl px-2 py-1"
                     onClick={
                        () => nav("/Login")
                        // alert("You are not logged in, Can not show your profile !")
                     }
                  >
                     Login
                  </button>
               </>
            )}
         </div>
      </div>
   );
};

export default NavBar;
