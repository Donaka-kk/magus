import RatingStars from "../Rating/RatingStars.tsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductSchemeType } from "../../Types/ProductType";
import { faTag } from "@fortawesome/free-solid-svg-icons";

interface BasicInfoProps {
   product: ProductSchemeType;
}

function BasicInfo({ product }: BasicInfoProps) {
   return (
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
                     ${product.price - (product.price * product.discount) / 100}
                  </p>
               )}
            </div>
            <RatingStars score={product.score} />
         </div>
      </div>
   );
}
export default BasicInfo;
