import Slide from "./Slide.tsx";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeroSectionSlidesProps {
   slides: string[];
   toEditHeroSection: (newSlides: string[]) => void;
}

function HeroSectionSlides({
   slides,
   toEditHeroSection,
}: HeroSectionSlidesProps) {
   const [slidesArray, setSlidesArray] = useState<string[]>(slides);
   const nav = useNavigate();

   const handleDiscard = () => {
      setSlidesArray(slides);
   };
   const handleMoveUp = (index: number) => {
      if (index === 0) return;
      const newArray = [...slidesArray];
      [newArray[index - 1], newArray[index]] = [
         newArray[index],
         newArray[index - 1],
      ];
      setSlidesArray(newArray);
   };
   const handleMoveDown = (index: number) => {
      if (index === slidesArray.length - 1) return;
      const newArray = [...slidesArray];
      [newArray[index + 1], newArray[index]] = [
         newArray[index],
         newArray[index + 1],
      ];
      setSlidesArray(newArray);
   };

   return (
      <div className="flex flex-col p-2 md:p-4 gap-4">
         <div className="flex justify-center w-full gap-4">
            <button
               onClick={() => nav("/admin/panel")}
               className="border border-black p-1 rounded-lg"
            >
               Back to panel
            </button>
            <button
               onClick={() => {}}
               className="border border-black p-1 rounded-lg"
            >
               Add slide
            </button>
            <button
               onClick={handleDiscard}
               className="border border-black p-1 rounded-lg"
            >
               Discard Changes
            </button>
            <button
               onClick={() => toEditHeroSection(slidesArray)}
               className="border border-black p-1 rounded-lg"
            >
               Save Changes
            </button>
         </div>
         <div className="w-full flex flex-col gap-4">
            {slidesArray.map((slide, index) => (
               <Slide
                  key={index}
                  slide={slide}
                  index={index}
                  moveUp={handleMoveUp}
                  moveDown={handleMoveDown}
               />
            ))}
         </div>
      </div>
   );
}

export default HeroSectionSlides;
