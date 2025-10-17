import { useNavigate } from "react-router-dom";
import ProductScore from "./ProductScore";
import ProductOptions from "./ProductOptions.tsx";
import ProductInfo from "./ProductInfo.tsx";

function ProductProfile({
   product,
   handleChangeSize,
   handleChangeColor,
   handleAddToCart,
}) {
   const nav = useNavigate();
   return (
      <div className="w-full flex flex-col justify-between items-center border-2 border-black rounded-md">
         <div className="w-full flex flex-col lg:flex-row justify-between p-5">
            <div>
               <ProductInfo product={product} />
            </div>
            <div>
               <ProductScore score={product.score} sales={product.sales} />
            </div>
            <div>
               <ProductOptions
                  product={product}
                  handleChangeSize={handleChangeSize}
                  handleChangeColor={handleChangeColor}
               />
            </div>
         </div>
         <div className="flex gap-10 mb-5">
            <button
               onClick={() => nav("/shop")}
               className="border-2 border-black rounded-md px-2 py-1 active:scale-95"
            >
               Back To Shop
            </button>
            <button
               onClick={() => handleAddToCart()}
               className="border-2 border-black rounded-md px-2 py-1 active:scale-95"
            >
               Add To Cart
            </button>
         </div>
      </div>
   );
}
export default ProductProfile;
