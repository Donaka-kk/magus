import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ProductSchemeType } from "../../Types/ProductType";
interface Card2Props {
   product: ProductSchemeType;
}

const Card2 = ({ product }: Card2Props) => {
   const nav = useNavigate();

   return (
      <div className="flex flex-col items-center w-full h-fit rounded-2xl p-2 gap-2 bg-gray-200">
         <div className="relative flex justify-center w-full h-5/12">
            <img
               src={product.image}
               alt="productImage"
               className="w-full h-full object-cover rounded-2xl"
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
         <div className="w-full flex gap-2">
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
         <div className="w-full flex flex-col">
            <p className="text-gray-400">{product.category}</p>
            <p className="text-xl font-bold">{product.name}</p>
         </div>
         <div className="w-full flex gap-2">
            <p className="text-xl font-bold text-center">
               {product.price - (product.price * product.discount) / 100}$
            </p>
            <p className="text-lg font-semibold text-gray-400 line-through text-center">
               {product.price}$
            </p>
         </div>
         <button
            onClick={() => nav(`/product?id=${product.id}`)}
            className="w-full bg-secondary text-primary px-3 py-1 rounded-md text-sm sm:text-base active:bg-primary active:text-secondary"
         >
            Visit the Product
         </button>
      </div>
   );
};

export default Card2;
