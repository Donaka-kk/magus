import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductSchemeType } from "../../Types/ProductType";
import {
   faCaretDown,
   faCircle,
   faMinus,
   faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface ProductOptionsProps {
   product: ProductSchemeType;
   handleChangeSize: (size: string) => void;
   handleChangeColor: (color: string) => void;
}

function ProductOptions({
   product,
   handleChangeSize,
   handleChangeColor,
}: ProductOptionsProps) {
   const [colorDropDown, setColorDropDown] = useState<boolean>(false);
   const [sizeDropDown, setSizeDropDown] = useState<boolean>(false);
   if (!product) return;
   return (
      <div className="w-full flex flex-row justify-around">
         <div className="Color w-24">
            <h1>Color</h1>
            <div className="relative">
               <button
                  onClick={() => setColorDropDown((prev) => !prev)}
                  className="relative z-10 flex flex-row items-center justify-around bg-secondary w-full p-2 gap-2 rounded-2xl group h-12"
               >
                  <span
                     className="text-3xl"
                     style={{ color: product.selectedColor }}
                  >
                     <FontAwesomeIcon icon={faCircle} />
                  </span>
                  <span className="text-lg group-hover:scale-110">
                     <FontAwesomeIcon icon={faCaretDown} />
                  </span>
               </button>
               <div
                  className={`absolute z-0 top-3 w-full flex flex-col gap-2 duration-500 overflow-hidden rounded-2xl bg-primary ${colorDropDown ? "pt-10 pb-2" : "h-0"}`}
                  style={
                     colorDropDown
                        ? {
                             height: `${product.colors.length * 36 + (product.colors.length - 1) * 8 + 52}px`,
                          }
                        : { height: "0px" }
                  }
               >
                  {product.colors.map((color, index) => {
                     return (
                        <button
                           key={index}
                           className="active:scale-95 text-3xl"
                           style={{ color: color }}
                           onClick={() => {}}
                        >
                           <FontAwesomeIcon icon={faCircle} />
                        </button>
                     );
                  })}
               </div>
            </div>
         </div>
         <div className="Size w-24">
            <h1>Size</h1>
            <div className="relative">
               <button
                  onClick={() => setSizeDropDown((prev) => !prev)}
                  className="relative z-10 flex flex-row items-center justify-around bg-secondary w-full p-2 gap-2 rounded-2xl group h-12"
               >
                  <span className="text-xl">{product.selectedSize}</span>
                  <span className="text-lg group-hover:scale-110">
                     <FontAwesomeIcon icon={faCaretDown} />
                  </span>
               </button>
               <div
                  className={`absolute z-0 top-3 w-full flex flex-col gap-2 duration-500 overflow-hidden rounded-2xl bg-primary ${sizeDropDown ? "pt-10 pb-2" : "h-0"}`}
                  style={
                     sizeDropDown
                        ? {
                             height: `${product.sizes.length * 28 + (product.sizes.length - 1) * 8 + 52}px`,
                          }
                        : { height: "0px" }
                  }
               >
                  {product.sizes.map((size, index) => {
                     return (
                        <button
                           key={index}
                           className="active:scale-95 text-xl"
                           onClick={() => {}}
                        >
                           {size}
                        </button>
                     );
                  })}
               </div>
            </div>
         </div>
         <div className="Quantity w-24">
            <h1>Quantity</h1>
            <div className="relative z-10 flex flex-row items-center justify-around bg-secondary w-full p-2 gap-2 rounded-xl h-12 text-xl">
               <button>
                  <FontAwesomeIcon icon={faMinus} />
               </button>
               <span>3</span>
               <button>
                  <FontAwesomeIcon icon={faPlus} />
               </button>
            </div>
         </div>
         <div className="Total w-24">
            <h1>Total</h1>
            <div className="text-center bg-secondary w-full p-2 gap-2 rounded-xl h-12 text-xl">
               <p>$123</p>
            </div>
         </div>
      </div>
   );
}
export default ProductOptions;
