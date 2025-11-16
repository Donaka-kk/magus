import { useNavigate } from "react-router-dom";
import RatingStars from "../Rating/RatingStars.tsx";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card1 = ({ product }) => {
   const nav = useNavigate();
   return (
      <div className="rounded-2xl bg-gray-200">
         <div className="relative flex justify-center items-center py-5 bg-secondary rounded-2xl rounded-br-none before:absolute before:right-0 before:-bottom-6 before:w-6 before:h-6 before:bg-secondary after:absolute after:right-0 after:-bottom-7 after:w-7 after:h-7 after:bg-gray-200 after:rounded-tr-2xl">
            <div className="w-[90%] h-48 md:h-56 lg:h-60 flex justify-center items-center">
               <img
                  src={product.image}
                  alt="productImage"
                  className="w-full h-full object-cover"
               />
            </div>
         </div>
         <div className="flex justify-between gap-1 p-2 rounded-b-2xl">
            <div className="">
               <p className="text-sm text-gray-400">{product.category}</p>
               <p className="text-xl font-semibold">{product.name}</p>
               <RatingStars score={product.score} />
               <p className="text-xl font-semibold">${product.price}</p>
            </div>
            <div className="flex flex-col justify-end">
               <button
                  onClick={() => nav(`/product?id=${product.id}`)}
                  className="text-lg font-semibold bg-secondary w-12 aspect-square rounded-full px-2 py-1 active:scale-95"
               >
                  <FontAwesomeIcon icon={faBoxesPacking} />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Card1;
