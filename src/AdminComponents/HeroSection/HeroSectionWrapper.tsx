import Slide from "./Slide.tsx";
import SlideForm from "./SlideForm.tsx";

import { useCallback } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeroSectionWrapperProps {
   slides: string[];
   toEditHeroSection: (newSlides: string[]) => void;
}

function HeroSectionWrapper({
   slides,
   toEditHeroSection,
}: HeroSectionWrapperProps) {
   console.log("HeroSectionSlides");
   const [newSlideForm, setNewSlideForm] = useState<boolean>(false);
   const [slidesArray, setSlidesArray] = useState<string[]>(slides);
   const nav = useNavigate();

   const handleDiscard = useCallback(() => {
      setSlidesArray(slides);
   }, [slides]);
   const handleMoveUp = useCallback(
      (index: number) => {
         if (index === 0) return;
         const newArray = [...slidesArray];
         [newArray[index - 1], newArray[index]] = [
            newArray[index],
            newArray[index - 1],
         ];
         setSlidesArray(newArray);
      },
      [slidesArray]
   );
   const handleMoveDown = useCallback(
      (index: number) => {
         if (index === slidesArray.length - 1) return;
         const newArray = [...slidesArray];
         [newArray[index + 1], newArray[index]] = [
            newArray[index],
            newArray[index + 1],
         ];
         setSlidesArray(newArray);
      },
      [slidesArray]
   );
   const handleRemoveSlide = useCallback(
      (index: number) => {
         const newArray = slidesArray.filter((_, i) => i !== index);
         setSlidesArray(newArray);
      },
      [slidesArray]
   );

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
               onClick={() => setNewSlideForm(true)}
               className="border border-black p-1 rounded-lg"
            >
               Add new slide
            </button>
            <button
               onClick={handleDiscard}
               className={`border p-1 rounded-lg ${slidesArray === slides ? "border-gray-500 text-gray-500" : "border-black text-black"}`}
               disabled={slidesArray === slides}
            >
               Discard Changes
            </button>
            <button
               onClick={() => toEditHeroSection(slidesArray)}
               className={`border p-1 rounded-lg ${slidesArray === slides ? "border-gray-500 text-gray-500" : "border-black text-black"}`}
               disabled={slidesArray === slides}
            >
               Save Changes
            </button>
         </div>
         {newSlideForm && <SlideForm toClose={() => setNewSlideForm(false)} />}
         <div className="w-full flex flex-col gap-4">
            {slidesArray.map((slide, index) => (
               <Slide
                  key={index}
                  slide={slide}
                  index={index}
                  moveUp={handleMoveUp}
                  moveDown={handleMoveDown}
                  removeSlide={handleRemoveSlide}
               />
            ))}
         </div>
      </div>
   );
}

export default HeroSectionWrapper;
