import CardList from "../CardList/CardList.tsx";
import ProductSelector from "../ProductSelector/ProductSelector.tsx";
import deepEqual from "fast-deep-equal";

import { useState } from "react";
import { ProductSchemeType } from "../../Types/ProductType.tsx";
import { useNavigate } from "react-router-dom";

interface SpecialOffersWrapperProps {
   products: ProductSchemeType[];
   toEditList: (products: number[]) => void;
}

function SpecialOffersWrapper({
   products,
   toEditList,
}: SpecialOffersWrapperProps) {
   const [productsArray, setProductsArray] =
      useState<ProductSchemeType[]>(products);
   const [showModal, setShowModal] = useState<boolean>(false);
   const hasChanged = !deepEqual(productsArray, products);
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
   const handleRemoveProduct = (index: number) => {
      const newArray = productsArray.filter((_, i) => i !== index);
      setProductsArray(newArray);
   };

   return (
      <div className="w-full min-h-screen flex flex-col py-4 px-2 md:px-4 gap-4 bg-background">
         <div className="flex justify-center w-full gap-2 md:gap-4 text-sm md:text-base">
            <button
               onClick={() => nav("/admin/panel")}
               className="border border-black p-2 rounded-lg shadow-lg active:shadow-inner active:scale-95"
            >
               Back to panel
            </button>
            <button
               onClick={() => setShowModal(true)}
               className="border border-black p-2 rounded-lg shadow-lg active:shadow-inner active:scale-95"
            >
               Add Product Card
            </button>
            <button
               onClick={handleDiscard}
               className={`border p-2 rounded-lg shadow-lg ${hasChanged ? "border-black text-black active:shadow-inner active:scale-95" : "border-gray-500 text-gray-500"}`}
               disabled={!hasChanged}
            >
               Discard Changes
            </button>
            <button
               onClick={() =>
                  toEditList(productsArray.map((product) => product.id))
               }
               className={`border p-2 rounded-lg shadow-lg ${hasChanged ? "border-black text-black active:shadow-inner active:scale-95" : "border-gray-500 text-gray-500"}`}
               disabled={!hasChanged}
            >
               Save Changes
            </button>
         </div>
         {showModal && <ProductSelector toClose={() => setShowModal(false)} />}
         <CardList
            products={productsArray}
            handleMoveToLeft={handleMoveToLeft}
            handleMoveToRight={handleMoveToRight}
            handleRemoveProduct={handleRemoveProduct}
         />
      </div>
   );
}

export default SpecialOffersWrapper;
