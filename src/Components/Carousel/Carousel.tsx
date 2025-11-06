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
         <div className="flex justify-center">
            <h1 className="text-center font-bold text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
               Most Popular Products
            </h1>
         </div>

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
                     index === currentIndex ? "bg-primary" : "bg-secondary"
                  }`}
                  onClick={() => setCurrentIndex(index)}
               />
            ))}
         </div>
         <button
            onClick={() => {
               nav("/shop");
            }}
            className="w-full bg-secondary text-primary text-center text-base font-semibold outline-none p-2 md:p-4 md:text-xl rounded-lg transition-colors duration-200 ease-in-out active:bg-primary active:text-secondary"
         >
            Visit the shop
         </button>
      </div>
   );
};

export default Carousel;
