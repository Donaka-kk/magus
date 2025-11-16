import {
   faAngleLeft,
   faAngleRight,
   faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface ImageCarouselProps {
   images: string[];
   discount?: number;
}

function ImageCarousel({ images, discount }: ImageCarouselProps) {
   const [index, setIndex] = useState<number>(0);

   const getVisibleImages = () => {
      const len = images.length;
      return [
         images[(index - 2 + len) % len],
         images[(index - 1 + len) % len],
         images[index],
         images[(index + 1) % len],
         images[(index + 2) % len],
      ];
   };

   const visibleImages = getVisibleImages();

   const nextSlide = () => {
      setIndex((index + 1) % images.length);
   };
   const prevSlide = () => {
      setIndex((images.length + (index - 1)) % images.length);
   };
   const handleScroll = (i: number) => {
      setIndex(i);
   };
   return (
      <div className="flex flex-col gap-2 rounded-xl w-full max-w-full">
         <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative flex items-center justify-center overflow-hidden rounded-xl border-2 border-black">
            <button
               onClick={() => prevSlide()}
               className="absolute left-2 flex justify-center items-center w-8 aspect-square rounded-full active:scale-95 bg-black text-white"
            >
               <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <div className="absolute top-0 left-0 px-2 py-1 rounded-br-xl bg-red-600">
               {discount && (
                  <div className="flex gap-1 items-center text-lg font-semibold">
                     <FontAwesomeIcon icon={faTag} />
                     <p>{discount}% OFF</p>
                  </div>
               )}
            </div>
            <img
               src={images[index]}
               alt={"productImage"}
               className="w-full h-full object-cover bg-cyan-400"
            />
            <button
               onClick={() => nextSlide()}
               className="absolute right-2 flex justify-center items-center w-8 aspect-square rounded-full active:scale-95 bg-black text-white"
            >
               <FontAwesomeIcon icon={faAngleRight} />
            </button>
         </div>
         <div className="flex-1 overflow-hidden">
            <div className="flex gap-[1%] transition-transform duration-300 ease-out">
               {visibleImages.map((imageURL, i) => {
                  const realIndex =
                     (index - 2 + i + images.length) % images.length;

                  return (
                     <button
                        key={i}
                        onClick={() => handleScroll(realIndex)}
                        className="w-[19.2%] flex-shrink-0 group rounded-lg overflow-hidden"
                     >
                        <img
                           src={imageURL}
                           alt="productImage"
                           className={`
                     w-full h-full object-cover duration-300 
                     group-hover:scale-110 
                     ${realIndex === index ? "opacity-100" : "opacity-50"}
                  `}
                        />
                     </button>
                  );
               })}
            </div>
         </div>

         {/* <div className="flex-1 overflow-hidden">
            <div
               className="flex gap-[1%] transition-transform duration-300 ease-out"
               // style={{
               //    transform: `translateX(${20.2 * ((2 - index) % images.length)}%)`,
               // }}
            >
               {visibleImages.map((imageURL, i) => {
                  const realIndex =
                     (index - 2 + i + images.length) % images.length;

                  return (
                     <button
                        key={i}
                        onClick={() => handleScroll(realIndex)}
                        className="w-[19.2%] flex-shrink-0 group rounded-lg overflow-hidden"
                     >
                        <img
                           src={imageURL}
                           alt="productImage"
                           className={`
                              w-full h-full object-cover duration-300
                              ${realIndex === index ? "scale-100 opacity-100" : "scale-90 opacity-50"}`}
                        />
                     </button>
                  );
               })}
            </div>
         </div> */}
      </div>
   );
}
export default ImageCarousel;
