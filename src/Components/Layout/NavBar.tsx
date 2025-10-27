import DesktopNavBar from "./DesktopNavBar.tsx";
import MobileNavBar from "./MobileNavBar.tsx";
import MiniProfile from "./MiniProfile.tsx";
import Logo from "../../utilities/logo-no-background.webp";

import { useNavigate } from "react-router-dom";

const NavBar = () => {
   const nav = useNavigate();

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
         <DesktopNavBar />
         {/* for mobile users */}
         <MobileNavBar />

         <MiniProfile />
      </div>
   );
};

export default NavBar;
