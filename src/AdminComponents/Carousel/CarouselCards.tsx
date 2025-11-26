import ProductCard from "./ProductCard.tsx";

import { useState } from "react";
import { ProductSchemeType } from "../../Types/ProductType.tsx";
import { useNavigate } from "react-router-dom";

interface CarouselCardsProps {
   products: ProductSchemeType[];
   toEditCarousel: (slides: ProductSchemeType[]) => void;
}

function CarouselCards({ products, toEditCarousel }: CarouselCardsProps) {
   const [productsArray, setProductsArray] =
      useState<ProductSchemeType[]>(products);
   const nav = useNavigate();

   const handleDiscard = () => {
      setProductsArray(products);
   };
   const handleMoveToLeft = (index: number) => {
      if (index === 0) return;
      const newArray = [...productsArray];
      [newArray[index - 1], newArray[index]] = [
         newArray[index],
         newArray[index - 1],
      ];
      setProductsArray(newArray);
   };
   const handleMoveToRight = (index: number) => {
      if (index === productsArray.length - 1) return;
      const newArray = [...productsArray];
      [newArray[index + 1], newArray[index]] = [
         newArray[index],
         newArray[index + 1],
      ];
      setProductsArray(newArray);
   };

   return (
      <div className="flex flex-col p-2 md:p-4 gap-4">
         <div className="flex justify-center w-full gap-4">
            <button
               onClick={() => nav("/admin/panel")}
               className="border border-black p-1 rounded-lg"
            >
               Back to panel
            </button>
            <button
               onClick={() => {}}
               className="border border-black p-1 rounded-lg"
            >
               Add Product Card
            </button>
            <button
               onClick={handleDiscard}
               className="border border-black p-1 rounded-lg"
            >
               Discard Changes
            </button>
            <button
               onClick={() => toEditCarousel(productsArray)}
               className="border border-black p-1 rounded-lg"
            >
               Save Changes
            </button>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {productsArray.map((product, index) => {
               return (
                  <ProductCard
                     key={product.id}
                     product={product}
                     index={index}
                     moveToLeft={handleMoveToLeft}
                     moveToRight={handleMoveToRight}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default CarouselCards;
