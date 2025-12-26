import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface ImageCarouselProps {
   images: string[];
}

function ImageCarousel({ images }: ImageCarouselProps) {
   const [index, setIndex] = useState<number>(0);

   const visibleImages = [
      images[0],
      "https://img.freepik.com/free-vector/landscape-with-trees-against-sunset-sky_1048-14241.jpg?semt=ais_hybrid&w=740&q=80",
      "https://img.freepik.com/free-vector/silhouette-field_1308-39795.jpg?semt=ais_hybrid&w=740&q=80",
      "https://static.vecteezy.com/system/resources/previews/008/074/250/non_2x/forest-silhouette-illustration-with-sunrise-vector.jpg",
      "https://cdn.vectorstock.com/i/500p/29/63/spruce-tree-silhouette-at-sunrise-vector-8432963.jpg",
      "https://petapixel.com/assets/uploads/2024/01/The-Star-of-System-Sol-Rectangle-640x800.jpg",
      "https://www.thesun.co.uk/wp-content/uploads/2021/12/TT_TheSunOP.jpg?quality=80&strip=all&w=1200&h=800&crop=1",
   ];

   const nextSlide = () => {
      setIndex((index + 1) % visibleImages.length);
   };
   const prevSlide = () => {
      setIndex((visibleImages.length + (index - 1)) % visibleImages.length);
   };
   const handleScroll = (i: number) => {
      setIndex(i);
   };

   const calScrollAmount =
      visibleImages.length > 5
         ? 2 < index && index < visibleImages.length - 2
            ? -(index - 2) * 20
            : index <= 2
              ? 0
              : -(visibleImages.length - 5) * 20
         : 0;

   return (
      <div className="flex flex-col gap-2 rounded-xl w-full max-w-full">
         <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative flex items-center justify-center overflow-hidden rounded-xl border-2 border-black">
            <button
               onClick={() => prevSlide()}
               className="absolute left-2 flex justify-center items-center w-8 aspect-square rounded-full active:scale-95 bg-black text-white"
            >
               <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <img
               src={visibleImages[index]}
               alt={"productImage"}
               className="w-full h-full object-cover"
            />
            <button
               onClick={() => nextSlide()}
               className="absolute right-2 flex justify-center items-center w-8 aspect-square rounded-full active:scale-95 bg-black text-white"
            >
               <FontAwesomeIcon icon={faAngleRight} />
            </button>
         </div>
         <div className="flex-1 overflow-hidden">
            <div
               className={`flex gap-[1%] transition-transform duration-300 ease-out ${visibleImages.length < 5 && "justify-center"}`}
               style={{
                  transform: `translateX(${calScrollAmount}%)`,
               }}
            >
               {visibleImages.map((imageURL, i) => {
                  return (
                     <button
                        key={imageURL}
                        onClick={() => handleScroll(i)}
                        className="w-[19.2%] flex-shrink-0 group rounded-lg overflow-hidden"
                     >
                        <img
                           src={imageURL}
                           alt="productImage"
                           className={`
                     w-full h-full object-cover duration-300 
                     group-hover:scale-110 
                     ${i === index ? "opacity-100" : "opacity-50"}
                  `}
                        />
                     </button>
                  );
               })}
            </div>
         </div>
      </div>
   );
}
export default ImageCarousel;
