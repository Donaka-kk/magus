import { useNavigate } from "react-router-dom";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductSchemeType } from "../../Types/ProductType.tsx";
interface Card3Props {
   product: ProductSchemeType;
}
const Card3 = ({ product }: Card3Props) => {
   const nav = useNavigate();
   return (
      <div className="flex flex-col rounded-2xl bg-gray-200 max-w-80 p-2 gap-2 group">
         <div className="relative rounded-2xl overflow-hidden">
            <img
               src={product.image}
               alt="productImage"
               className="max-w-full rounded-xl duration-200 group-hover:scale-110"
            />
            {product.discount !== 0 && (
               <div className="absolute top-0 left-0 flex justify-center items-center w-16 h-6 text-sm md:text-base rounded-tl-lg rounded-br-lg font-semibold bg-red-500 text-black">
                  <p className="">
                     <FontAwesomeIcon icon={faTag} />
                  </p>
                  <p className="">{product.discount + "%"}</p>
               </div>
            )}
         </div>
         <div className="flex gap-2">
            {product.colors.map((color, index) => {
               return (
                  <button
                     key={index}
                     className="w-5 h-5 rounded-full"
                     style={{ background: color }}
                  />
               );
            })}
         </div>
         <div className="">
            <p className="text-sm text-gray-400">{product.category}</p>
            <p className="text-xl font-semibold">{product.name}</p>
         </div>
         <div className="flex gap-2">
            <p className="text-xl font-bold text-center">
               {product.price - (product.price * product.discount) / 100}$
            </p>
            <p className="text-lg font-semibold text-gray-400 line-through text-center">
               {product.price}$
            </p>
         </div>
         <div>
            <button
               onClick={() => nav(`/product?id=${product.id}`)}
               className="w-full bg-secondary text-primary px-3 py-1 rounded-md text-sm sm:text-base active:bg-primary active:text-secondary"
            >
               Visit the product
            </button>
         </div>
      </div>
   );
};

export default Card3;
