import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function HeroSection({ data }) {
   const nav = useNavigate();
   const [heroState, setHeroState] = useState({
      index: 0,
      switcher: false,
      leftCase: data[0],
      rightCase: null,
   });

   useEffect(() => {
      const interval = setInterval(() => {
         setHeroState((prev) => {
            const newIndex = (prev.index + 1) % data.length;

            if (prev.switcher) {
               // if currently right is showing, update left
               return {
                  ...prev,
                  index: newIndex,
                  switcher: !prev.switcher,
                  leftCase: data[newIndex],
               };
            } else {
               // if currently left is showing, update right
               return {
                  ...prev,
                  index: newIndex,
                  switcher: !prev.switcher,
                  rightCase: data[newIndex],
               };
            }
         });
      }, 5000);

      return () => clearInterval(interval);
   }, [data]);

   return (
      <div className="w-full h-full relative">
         {/* left case */}
         {heroState.leftCase && (
            <div
               className={`absolute w-full h-full ${!heroState.switcher ? "animate-hero_fadeInLeft" : "animate-hero_fadeOutLeft"}`}
               key={heroState.leftCase.id}
            >
               <div className="w-full h-[400px]">
                  <img
                     src={heroState.leftCase.image}
                     alt="heroImage"
                     className="w-full h-full object-cover"
                  />
               </div>
               <div className="absolute top-0 w-full h-full">
                  <div className="flex flex-col absolute top-1/3 right-[20%] gap-3">
                     <h2>{heroState.leftCase.header}</h2>
                     <p className="text-secondary font-bold text-2xl">
                        {heroState.leftCase.text}
                     </p>
                     <button
                        className="border border-white rounded-md"
                        onClick={() =>
                           nav(heroState.leftCase.button.destination)
                        }
                     >
                        {heroState.leftCase.button.text}
                     </button>
                  </div>
               </div>
            </div>
         )}
         {/* right case */}
         {heroState.rightCase && (
            <div
               className={`absolute w-full h-full ${heroState.switcher ? "animate-hero_fadeInRight" : "animate-hero_fadeOutRight"}`}
               key={heroState.rightCase.id}
            >
               <div className="w-full h-[400px]">
                  <img
                     src={heroState.rightCase.image}
                     alt="heroImage"
                     className="w-full h-full object-cover"
                  />
               </div>
               <div className="absolute top-0 w-full h-full">
                  <div className="flex flex-col absolute top-1/3 right-[20%] gap-3">
                     <h2>{heroState.rightCase.header}</h2>
                     <p className="text-secondary font-bold text-2xl">
                        {heroState.rightCase.text}
                     </p>
                     <button
                        className="border border-white rounded-md"
                        onClick={() =>
                           nav(heroState.rightCase.button.destination)
                        }
                     >
                        {heroState.rightCase.button.text}
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default HeroSection;
