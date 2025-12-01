import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductSchemeType } from "../../Types/ProductType";
import {
   faChevronLeft,
   faChevronRight,
   faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

interface ProductCardProps {
   product: ProductSchemeType;
   index: number;
   moveToLeft: (productId: number) => void;
   moveToRight: (productId: number) => void;
   removeProduct: (productId: number) => void;
}
function ProductCard({
   product,
   index,
   moveToLeft,
   moveToRight,
   removeProduct,
}: ProductCardProps) {
   console.log("ProductCard");
   return (
      <div className="border">
         <img src={product.image} alt={"productImage"} />
         <p>{product.name}</p>
         <p>{product.category}</p>
         <div className="flex w-full justify-center items-center gap-2">
            <button
               onClick={() => moveToLeft(index)}
               className="border border-black w-7 h-7 aspect-square rounded-full"
            >
               <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
               onClick={() => moveToRight(index)}
               className="border border-black w-7 h-7 aspect-square rounded-full"
            >
               <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button
               onClick={() => removeProduct(index)}
               className="text-3xl text-red-600"
            >
               <FontAwesomeIcon icon={faCircleXmark} />
            </button>
         </div>
      </div>
   );
}

export default memo(ProductCard);
