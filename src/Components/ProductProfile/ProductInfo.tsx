import ImageCarousel from "./ImageCarousel.tsx";
import RatingStars from "../Rating/RatingStars.tsx";
import RatingBars from "../Rating/RatingBars.tsx";
import ProductOptions from "./ProductOptions.tsx";

import { ImageCarouselDummyData } from "../API/ImageCarouselDummyData.tsx";
import { ProductSchemeType } from "../../Types/ProductType.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

interface ProductInfoProps {
   product: ProductSchemeType;
   handleChangeSize: any;
   handleChangeColor: any;
   handleAddToCart: any;
}

function ProductInfo({
   product,
   handleChangeSize,
   handleChangeColor,
   handleAddToCart,
}: ProductInfoProps) {
   return (
      <div className="flex flex-col md:flex-row gap-2">
         <div className="">
            <ImageCarousel
               images={ImageCarouselDummyData}
               discount={product.discount}
            />
         </div>
         <div className="flex flex-col gap-2">
            <div className="flex justify-between">
               <div>
                  <p className="text-lg text-gray-500 font-semibold">
                     {product.category}
                  </p>
                  <p className="text-2xl font-bold">{product.name}</p>
               </div>
               <div className="relative">
                  <span className="text-6xl text-red-600">
                     <FontAwesomeIcon icon={faTag} />
                  </span>
                  <span className="absolute top-[22px] left-4 rotate-45 font-semibold">
                     {product.discount}%
                  </span>
               </div>
            </div>
            <div className="flex justify-between items-center">
               <div className="flex gap-2">
                  <p className="text-2xl font-bold">${product.price}</p>
                  {product.discount && (
                     <p className="text-lg text-gray-500 line-through font-semibold">
                        $
                        {product.price -
                           (product.price * product.discount) / 100}
                     </p>
                  )}
               </div>
               <RatingStars score={product.score} />
            </div>
            <div className="flex flex-row gap-4 border-b-4 border-gray-400">
               <button
                  className={`border-b-4 -mb-1 ${true ? "border-primary font-semibold" : "border-transparent hover:scale-105"}`}
               >
                  Description
               </button>
               <button
                  className={`border-b-4 -mb-1 ${false ? "border-primary font-semibold" : "border-transparent hover:scale-105"}`}
               >
                  Details
               </button>
               <button
                  className={`border-b-4 -mb-1 ${false ? "border-primary font-semibold" : "border-transparent hover:scale-105"}`}
               >
                  Comments
               </button>
            </div>
            <div className="bg-orange-300 flex-1">
               <div className="">
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Doloribus suscipit cum quos repellendus omnis sint ex,
                     voluptas recusandae laboriosam ipsa ducimus quod id commodi
                     architecto voluptates rerum mollitia, in totam.
                  </p>
               </div>
               <RatingBars score={product.score} />
               <p>COMMENTS</p>
            </div>
            <div className="">
               <ProductOptions
                  product={product}
                  handleChangeSize={handleChangeSize}
                  handleChangeColor={handleChangeColor}
               />
            </div>
            <div className="flex justify-center w-full rounded-lg gap-4">
               <button
                  onClick={() => {}}
                  className="border-2 border-black rounded-md px-2 py-1 active:scale-95"
               >
                  Add to wishlist
               </button>
               <button
                  onClick={() => {}}
                  className="border-2 border-black rounded-md px-2 py-1 active:scale-95"
               >
                  Add To Cart
               </button>
            </div>
         </div>
      </div>
   );
}

export default ProductInfo;
