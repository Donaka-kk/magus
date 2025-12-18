import NavBar from "../Components/Layout/NavBar.tsx";
import Footer from "../Components/Layout/Footer.tsx";
import HeroSection from "../Components/HeroSection/HeroSection.js";

import { Outlet } from "react-router-dom";
import { HeroSectionDummyData } from "../Components/API/HeroSectionDummyData.tsx";

function MainLayout() {
   return (
      <>
         <div className="sticky md:top-0 top-0 w-full min-w-screen h-24 z-50">
            <NavBar />
         </div>
         <div className="w-full h-[300px] overflow-hidden">
            <HeroSection data={HeroSectionDummyData} />
         </div>
         <main className="min-h-screen">
            <Outlet />
         </main>
         <div className="min-w-screen">
            <Footer />
         </div>
      </>
   );
}
export default MainLayout;
