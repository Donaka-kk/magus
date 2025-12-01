import ProductCard from "./ProductCard.tsx";
import deepEqual from "fast-deep-equal";

import { useCallback, useState } from "react";
import { ProductSchemeType } from "../../Types/ProductType.tsx";
import { useNavigate } from "react-router-dom";

interface CardListProps {
   products: ProductSchemeType[];
   toEditList: (products: number[]) => void;
   toOpenForm: () => void;
}

function CardList({ products, toEditList, toOpenForm }: CardListProps) {
   const [productsArray, setProductsArray] =
      useState<ProductSchemeType[]>(products);
   const nav = useNavigate();
   const hasChanged = !deepEqual(productsArray, products);

   const handleDiscard = useCallback(() => {
      setProductsArray(products);
   }, []);
   const handleMoveToLeft = useCallback((index: number) => {
      if (index === 0) return;
      const newArray = [...productsArray];
      [newArray[index - 1], newArray[index]] = [
         newArray[index],
         newArray[index - 1],
      ];
      setProductsArray(newArray);
   }, []);
   const handleMoveToRight = useCallback((index: number) => {
      if (index === productsArray.length - 1) return;
      const newArray = [...productsArray];
      [newArray[index + 1], newArray[index]] = [
         newArray[index],
         newArray[index + 1],
      ];
      setProductsArray(newArray);
   }, []);
   const handleRemoveProduct = useCallback(
      (index: number) => {
         const newArray = productsArray.filter((_, i) => i !== index);
         setProductsArray(newArray);
      },
      [productsArray]
   );

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
               onClick={toOpenForm}
               className="border border-black p-1 rounded-lg"
            >
               Add Product Card
            </button>
            <button
               onClick={handleDiscard}
               className={`border p-1 rounded-lg ${hasChanged ? "border-black text-black" : "border-gray-500 text-gray-500"}`}
               disabled={!hasChanged}
            >
               Discard Changes
            </button>
            <button
               onClick={() =>
                  toEditList(productsArray.map((product) => product.id))
               }
               className={`border p-1 rounded-lg ${hasChanged ? "border-black text-black" : "border-gray-500 text-gray-500"}`}
               disabled={!hasChanged}
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
                     removeProduct={handleRemoveProduct}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default CardList;
