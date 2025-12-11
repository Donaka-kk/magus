import Slide from "./Slide.tsx";

import { SlideType } from "../../Types/SlideType.tsx";

interface SlidesListProps {
   slides: SlideType[];
   moveUp: (index: number) => void;
   moveDown: (index: number) => void;
   removeSlide: (index: number) => void;
}

function SlideList({ slides, moveUp, moveDown, removeSlide }: SlidesListProps) {
   return (
      <div className="w-full flex flex-col gap-4 no-overflow-anchoring">
         {slides.map((slide, index) => (
            <Slide
               key={slide.id}
               slide={slide}
               index={index}
               moveUp={moveUp}
               moveDown={moveDown}
               removeSlide={removeSlide}
            />
         ))}
      </div>
   );
}

export default SlideList;
