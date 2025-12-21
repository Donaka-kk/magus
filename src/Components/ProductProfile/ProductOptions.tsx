import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCaretDown,
   faCircle,
   faMinus,
   faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

type Dropdown = "color" | "size" | null;

interface ProductOptionsProps {
   sizes: string[];
   colors: string[];
   quantity: number;
   price: number;
   handleChangeSize: (size: string) => void;
   selectedSize: string;
   handleChangeColor: (color: string) => void;
   selectedColor: string;
   handleChangeQuantity: (quantity: number) => void;
}

function ProductOptions({
   sizes,
   colors,
   quantity,
   price,
   handleChangeSize,
   selectedSize,
   handleChangeColor,
   selectedColor,
   handleChangeQuantity,
}: ProductOptionsProps) {
   const [openDropdown, setOpenDropdown] = useState<Dropdown>(null);

   const closeDropdowns = () => setOpenDropdown(null);

   const toggleDropdown = (name: Dropdown) =>
      setOpenDropdown((prev) => (prev === name ? null : name));

   useEffect(() => {
      const handleClick = () => closeDropdowns();
      const handleKeyDown = (e: KeyboardEvent) =>
         e.key === "Escape" && closeDropdowns();

      document.addEventListener("click", handleClick);
      document.addEventListener("keydown", handleKeyDown);

      return () => {
         document.removeEventListener("click", handleClick);
         document.removeEventListener("keydown", handleKeyDown);
      };
   }, []);

   return (
      <div className="w-full flex flex-row justify-around gap-2">
         <div className="Color w-24">
            <h1>Color</h1>
            <div className="relative">
               <div onClick={(e) => e.stopPropagation()}>
                  <button
                     onClick={() => toggleDropdown("color")}
                     className="relative z-10 flex flex-row items-center justify-around bg-secondary w-full p-2 gap-2 rounded-2xl group h-12"
                  >
                     <span
                        className="text-3xl"
                        style={{ color: selectedColor }}
                     >
                        <FontAwesomeIcon icon={faCircle} />
                     </span>
                     <span className="text-lg group-hover:scale-110">
                        <FontAwesomeIcon icon={faCaretDown} />
                     </span>
                  </button>
               </div>
               <div
                  className={`absolute z-0 top-3 w-full flex flex-col gap-2 duration-500 overflow-hidden rounded-2xl bg-primary ${openDropdown === "color" ? "pt-10 pb-2" : "h-0"}`}
                  style={
                     openDropdown === "color"
                        ? {
                             height: `${colors.length * 36 + (colors.length - 1) * 8 + 52}px`,
                          }
                        : { height: "0px" }
                  }
               >
                  {colors.map((color, index) => {
                     return (
                        <button
                           key={index}
                           className="active:scale-95 text-3xl"
                           style={{ color: color }}
                           onClick={() => {
                              handleChangeColor(color);
                              setOpenDropdown(null);
                           }}
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
               <div onClick={(e) => e.stopPropagation()}>
                  <button
                     onClick={() => toggleDropdown("size")}
                     className="relative z-10 flex flex-row items-center justify-around bg-secondary w-full p-2 gap-2 rounded-2xl group h-12"
                  >
                     <span className="text-xl">{selectedSize}</span>
                     <span className="text-lg group-hover:scale-110">
                        <FontAwesomeIcon icon={faCaretDown} />
                     </span>
                  </button>
               </div>
               <div
                  className={`absolute z-0 top-3 w-full flex flex-col gap-2 duration-500 overflow-hidden rounded-2xl bg-primary ${openDropdown === "size" ? "pt-10 pb-2" : "h-0"}`}
                  style={
                     openDropdown === "size"
                        ? {
                             height: `${sizes.length * 28 + (sizes.length - 1) * 8 + 52}px`,
                          }
                        : { height: "0px" }
                  }
               >
                  {sizes.map((size, index) => {
                     return (
                        <button
                           key={index}
                           className="active:scale-95 text-xl"
                           onClick={() => {
                              handleChangeSize(size);
                              setOpenDropdown(null);
                           }}
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
               <button onClick={() => handleChangeQuantity(quantity - 1)}>
                  <FontAwesomeIcon icon={faMinus} />
               </button>
               <input
                  value={quantity}
                  type="number"
                  className="no-spinner w-full text-center bg-transparent"
                  onChange={(e) => {
                     const value = Number(e.target.value);
                     if (isNaN(value)) return;
                     handleChangeQuantity(value);
                  }}
               />
               <button onClick={() => handleChangeQuantity(quantity + 1)}>
                  <FontAwesomeIcon icon={faPlus} />
               </button>
            </div>
         </div>
         <div className="Total w-24">
            <h1>Total</h1>
            <div className="text-center bg-secondary w-full p-2 gap-2 rounded-xl h-12 text-xl">
               <p>${price * quantity}</p>
            </div>
         </div>
      </div>
   );
}
export default ProductOptions;
