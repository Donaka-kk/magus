import fallbackImage from "../../utilities/fallbackImage.png";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShopFallback() {
   return (
      <div className="w-full flex gap-2 p-2 md:gap-4 md:p-4 ">
         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 scroll-smooth">
            <div className="card-wrapper flex flex-col gap-2  p-2">
               <img
                  src={fallbackImage}
                  alt="imagePlaceholder"
                  className=" border border-black"
               />
               <div className="flex flex-col gap-2">
                  <div className="w-1/2 h-6 bg-slate-500" />
                  <div className="w-full h-6 bg-slate-500" />
                  <div className="w-full h-6 bg-slate-500" />
               </div>
            </div>
            <div className="card-wrapper flex flex-col gap-2  p-2">
               <img
                  src={fallbackImage}
                  alt="imagePlaceholder"
                  className=" border border-black"
               />
               <div className="flex flex-col gap-2">
                  <div className="w-1/2 h-6 bg-slate-500" />
                  <div className="w-full h-6 bg-slate-500" />
                  <div className="w-full h-6 bg-slate-500" />
               </div>
            </div>
            <div className="card-wrapper flex flex-col gap-2  p-2">
               <img
                  src={fallbackImage}
                  alt="imagePlaceholder"
                  className=" border border-black"
               />
               <div className="flex flex-col gap-2">
                  <div className="w-1/2 h-6 bg-slate-500" />
                  <div className="w-full h-6 bg-slate-500" />
                  <div className="w-full h-6 bg-slate-500" />
               </div>
            </div>
            <div className="card-wrapper flex flex-col gap-2  p-2">
               <img
                  src={fallbackImage}
                  alt="imagePlaceholder"
                  className=" border border-black"
               />
               <div className="flex flex-col gap-2">
                  <div className="w-1/2 h-6 bg-slate-500" />
                  <div className="w-full h-6 bg-slate-500" />
                  <div className="w-full h-6 bg-slate-500" />
               </div>
            </div>
            <div className="card-wrapper flex flex-col gap-2  p-2">
               <img
                  src={fallbackImage}
                  alt="imagePlaceholder"
                  className=" border border-black"
               />
               <div className="flex flex-col gap-2">
                  <div className="w-1/2 h-6 bg-slate-500" />
                  <div className="w-full h-6 bg-slate-500" />
                  <div className="w-full h-6 bg-slate-500" />
               </div>
            </div>
            <div className="card-wrapper flex flex-col gap-2  p-2">
               <img
                  src={fallbackImage}
                  alt="imagePlaceholder"
                  className=" border border-black"
               />
               <div className="flex flex-col gap-2">
                  <div className="w-1/2 h-6 bg-slate-500" />
                  <div className="w-full h-6 bg-slate-500" />
                  <div className="w-full h-6 bg-slate-500" />
               </div>
            </div>
         </div>
         <div className="sticky top-28 h-fit flex flex-col gap-5 w-2/5 text-sm md:w-2/6 md:text-base lg:w-3/12 lg:text-lg bg-slate-400 p-2">
            <div className="relative flex items-center">
               <input
                  placeholder="search"
                  className="w-full text-sm outline-none bg-inherit pl-6 md:pl-8 md:text-lg rounded-full bg-backGround border-2 border-black"
               />
               <button className="absolute ml-2 active:scale-95">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
               </button>
            </div>
            <div className="w-full h-6 bg-slate-500" />
            <div className="w-full h-6 bg-slate-500" />
            <div className="w-full h-6 bg-slate-500" />
            <div className="w-full h-6 bg-slate-500" />
            <div className="w-full h-6 bg-slate-500" />
            <div className="w-full h-6 bg-slate-500" />
         </div>
      </div>
   );
}

export default ShopFallback;
