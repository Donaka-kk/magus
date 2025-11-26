import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SlideProps {
   slide: string;
   index: number;
   moveUp: (productId: number) => void;
   moveDown: (productId: number) => void;
}

function Slide({ slide, index, moveUp, moveDown }: SlideProps) {
   return (
      <div className="flex border border-black p-2 gap-2">
         <img
            src={slide}
            alt="heroSectionSlide"
            className="h-[300px] flex-1 object-cover min-w-0"
         />

         <div className="flex flex-col justify-center gap-2 flex-none w-7">
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

export default Slide;
