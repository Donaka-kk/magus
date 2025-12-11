import { SlideType } from "../../Types/SlideType";
import {
   faChevronDown,
   faChevronUp,
   faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

interface SlideProps {
   slide: SlideType;
   index: number;
   moveUp: (productId: number) => void;
   moveDown: (productId: number) => void;
   removeSlide: (index: number) => void;
}

function Slide({ slide, index, moveUp, moveDown, removeSlide }: SlideProps) {
   return (
      <div className="flex border border-black p-2 gap-2">
         <img
            src={slide.image}
            alt="heroSectionSlide"
            className="h-[300px] flex-1 object-cover min-w-0"
         />

         <div className="flex flex-col justify-center gap-2 flex-none w-7">
            <button
               onClick={() => removeSlide(index)}
               className="text-2xl text-red-600"
            >
               <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <button
               onClick={() => moveUp(index)}
               className="border border-black w-7 aspect-square rounded-full"
            >
               <FontAwesomeIcon icon={faChevronUp} />
            </button>

            <button
               onClick={() => moveDown(index)}
               className="border border-black w-7 aspect-square rounded-full"
            >
               <FontAwesomeIcon icon={faChevronDown} />
            </button>
         </div>
      </div>
   );
}

export default memo(Slide);
