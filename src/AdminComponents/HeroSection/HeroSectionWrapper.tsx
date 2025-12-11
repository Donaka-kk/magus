import SlideForm from "./SlideForm.tsx";
import deepEqual from "fast-deep-equal";
import SlidesList from "./SlidesList.tsx";

import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlideType } from "../../Types/SlideType.tsx";

interface HeroSectionWrapperProps {
   slides: SlideType[];
   toEditHeroSection: (newSlides: SlideType[]) => void;
}

function HeroSectionWrapper({
   slides,
   toEditHeroSection,
}: HeroSectionWrapperProps) {
   const [showSlideForm, setShowSlideForm] = useState<boolean>(false);
   const [slidesArray, setSlidesArray] = useState<SlideType[]>(slides);
   const nav = useNavigate();
   const hasChanged = !deepEqual(slidesArray, slides);

   useEffect(() => {
      setSlidesArray(slides);
   }, [slides]);
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
      <div className="w-full min-h-screen flex flex-col py-4 px-2 md:px-4 gap-4 bg-background">
         <div className="flex justify-center w-full gap-2 md:gap-4 text-sm md:text-base">
            <button
               onClick={() => nav("/admin/panel")}
               className="border border-black p-2 rounded-lg shadow-lg active:shadow-inner active:scale-95"
            >
               Back to panel
            </button>
            <button
               onClick={() => setShowSlideForm(true)}
               className="border border-black p-2 rounded-lg shadow-lg active:shadow-inner active:scale-95"
            >
               Add new slide
            </button>
            <button
               onClick={handleDiscard}
               className={`border p-2 rounded-lg shadow-lg ${hasChanged ? "border-black text-black active:shadow-inner active:scale-95" : "border-gray-500 text-gray-500"}`}
               disabled={!hasChanged}
            >
               Discard Changes
            </button>
            <button
               onClick={() => toEditHeroSection(slidesArray)}
               className={`border p-2 rounded-lg shadow-lg ${hasChanged ? "border-black text-black active:shadow-inner active:scale-95" : "border-gray-500 text-gray-500"}`}
               disabled={!hasChanged}
            >
               Save Changes
            </button>
         </div>
         {showSlideForm && (
            <SlideForm toClose={() => setShowSlideForm(false)} />
         )}
         <SlidesList
            slides={slidesArray}
            moveUp={handleMoveUp}
            moveDown={handleMoveDown}
            removeSlide={handleRemoveSlide}
         />
      </div>
   );
}

export default HeroSectionWrapper;
