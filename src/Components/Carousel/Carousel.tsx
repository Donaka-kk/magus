import Card1 from "./Card1.js";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useBreakpoint } from "./UseBreakPoint.tsx";
import { ProductType } from "../../Types/ProductType.tsx";
interface CarouselProps {
   data: ProductType[];
}

const Carousel = ({ data }: CarouselProps) => {
   const nav = useNavigate();
   const breakpoint = useBreakpoint();
   const [currentIndex, setCurrentIndex] = useState(0);

   const visibleCards = breakpoint === "sm" ? 1 : breakpoint === "md" ? 2 : 3;
   const cardWidth = (100 - (visibleCards - 1)) / visibleCards;
   const maxIndex = data.length - visibleCards;

   const nextSlide = () => setCurrentIndex((i) => (i + 1) % (maxIndex + 1));
   const prevSlide = () =>
      setCurrentIndex((i) => (i - 1 + maxIndex + 1) % (maxIndex + 1));

   return (
      <div className="flex flex-col gap-4">
         <h1 className="text-center font-bold text-3xl">
            Most Popular Products
         </h1>

         <div className="flex items-center gap-2 px-2">
            <button
               className="w-10 md:w-16 aspect-square bg-gray-800 text-white rounded-full"
               onClick={prevSlide}
            >
               <FontAwesomeIcon icon={faAngleLeft} />
            </button>

            <div className="flex-1 overflow-hidden">
               <div
                  className="flex transition-transform duration-300 ease-in-out gap-[1%]"
                  style={{
                     transform: `translateX(-${currentIndex * (cardWidth + 1)}%)`,
                  }}
               >
                  {data.map((product, index) => (
                     <div
                        key={index}
                        className="flex-shrink-0"
                        style={{ flex: `0 0 ${cardWidth}%` }}
                     >
                        <Card1 product={product} />
                     </div>
                  ))}
               </div>
            </div>

            <button
               className="w-10 md:w-16 aspect-square bg-gray-800 text-white rounded-full"
               onClick={nextSlide}
            >
               <FontAwesomeIcon icon={faAngleRight} />
            </button>
         </div>

         <div className="w-full flex justify-center gap-1">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
               <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                     index === currentIndex ? "bg-secondary" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
               />
            ))}
         </div>

         <div className="text-center">
            <button
               onClick={() => nav("/shop")}
               className="border border-black rounded-sm px-3 py-1"
            >
               Show All Products
            </button>
         </div>
      </div>
   );
};

export default Carousel;
