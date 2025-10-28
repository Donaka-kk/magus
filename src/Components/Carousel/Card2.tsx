import {
   faStar,
   faStarHalfStroke,
   faTag,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../Types/ProductType";
interface Card2Props {
   product: ProductType;
}

const Card2 = ({ product }: Card2Props) => {
   const nav = useNavigate();

   const floatPart = product.score - Math.floor(product?.score);
   const fullStars = Array.from({ length: product.score }, (_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} />
   ));
   const emptyStars = Array.from(
      { length: Math.floor(5 - product.score) },
      (_, index) => <FontAwesomeIcon key={index} icon={faEmptyStar} />
   );

   return (
      <div className="flex flex-col items-center w-full h-fit rounded-2xl bg-green-200">
         <div className="relative flex justify-center w-full sm:w-[80%] h-5/12">
            <img
               src={product.image}
               alt="productImage"
               className="w-full h-full object-cover p-2"
            />
            {product.discount !== 0 && (
               <div className="absolute top-2 right-2 flex justify-center items-center w-12 h-12 text-sm md:w-14 md:h-14 md:text-base rounded-full font-semibold bg-red-500">
                  <FontAwesomeIcon icon={faTag} />
                  {product.discount + "%"}
               </div>
            )}
         </div>
         <div className="w-full h-full flex flex-col justify-between px-5 text-sm sm:text-lg md:text-xl">
            <div className="h-full flex flex-col justify-around">
               <p className=" font-semibold">{product.name}</p>
               <div className="flex gap-3">
                  <p
                     className={`font-semibold ${product.discount && " line-through"}`}
                  >
                     ${product.price}
                  </p>
                  {product.discount && (
                     <span className="ml-3 no-underline">
                        $
                        {product.price -
                           (product.discount * product.price) / 100}
                     </span>
                  )}
               </div>
               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm sm:text-base gap-1">
                  <span className=""> Sales : {product.sales}</span>
                  <div>
                     {fullStars}
                     {floatPart > 0 ? (
                        <FontAwesomeIcon icon={faStarHalfStroke} />
                     ) : null}
                     {emptyStars}
                  </div>
               </div>
            </div>
            <div className="text-center">
               <button
                  onClick={() => nav(`/product?id=${product.id}`)}
                  className="bg-gray-300 border border-black px-3 py-1 rounded-md hover:bg-gray-500 active:scale-95 mb-2 text-sm sm:text-base"
               >
                  More Info
               </button>
            </div>
         </div>
      </div>
   );
};

export default Card2;
