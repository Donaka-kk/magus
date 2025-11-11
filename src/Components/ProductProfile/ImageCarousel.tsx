import {
   faAngleLeft,
   faAngleRight,
   faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface ImageCarouselProps {
   images: string[];
   discount: number;
}

function ImageCarousel({ images, discount }: ImageCarouselProps) {
   const [index, setIndex] = useState<number>(0);
   const nextSlide = () => {
      setIndex((index + 1) % images.length);
   };
   const prevSlide = () => {
      setIndex((images.length + (index - 1)) % images.length);
   };
   return (
      <div className="flex flex-col gap-2 rounded-xl w-full max-w-full">
         <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative flex items-center justify-center bg-red-200 overflow-hidden rounded-xl border-2 border-black">
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
         <div className="flex flex-row gap-2 justify-center">
            {images.map((imageURL, i) => {
               return (
                  <button
                     key={i}
                     onClick={() => setIndex(i)}
                     className="group rounded-lg overflow-hidden"
                  >
                     <img
                        src={imageURL}
                        alt={"productImage"}
                        className={`w-full h-full group-hover:scale-110 duration-150 ${index === i ? "rounded-lg" : "opacity-50"} `}
                     />
                  </button>
               );
            })}
         </div>
      </div>
   );
}
export default ImageCarousel;
