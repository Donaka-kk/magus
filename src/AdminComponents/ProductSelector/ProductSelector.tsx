import Categories from "./Categories.tsx";
import ProductsList from "./ProductsList.tsx";
import LoadingComponent from "../../Components/Layout/LoadingComponent.js";

import { useCallback, useEffect, useState } from "react";
import { useGetCategories } from "../Hooks/useGetCategories.ts";
import { useGetProducts } from "../Hooks/useGetProducts.ts";
import { useAddProducts } from "../Hooks/useAddProducts.ts";
import { ResponseMessageType } from "../../Types/ResponseMessageType.tsx";

interface NewPostFormProps {
   toClose: () => void;
}

function ProductSelector({ toClose }: NewPostFormProps) {
   const [selectedCategory, setSelectedCategory] = useState<string>("");
   const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
   const [message, setMessage] = useState<ResponseMessageType | null>(null);

   useEffect(() => {
      setSelectedProducts([]);
   }, [selectedCategory]);

   const {
      data: categories,
      isPending: categoriesPending,
      isError: categoriesError,
   } = useGetCategories();

   const {
      data: products,
      isPending: productsPending,
      isError: productsError,
   } = useGetProducts(selectedCategory);

   const addProductMutation = useAddProducts(
      toClose,
      setMessage,
      "CarouselProducts"
   );

   const toggleProduct = (productId: number) => {
      setSelectedProducts(
         (prev) =>
            prev?.includes(productId)
               ? prev.filter((id) => id !== productId) // remove
               : [...prev, productId] // add
      );
   };

   const handleChangeCategory = useCallback(
      (newCategory: string) => {
         setSelectedCategory(newCategory);
      },
      [setSelectedCategory]
   );

   const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (selectedProducts.length > 0)
         addProductMutation.mutate(selectedProducts);
   };

   return (
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center z-20">
         <div
            onClick={toClose}
            className="absolute w-full h-full bg-transparent06"
         />
         <div className="relative w-8/12 h-8/12 bg-white z-10">
            {categoriesPending && <LoadingComponent failed={false} />}
            {categoriesError && <LoadingComponent failed={true} />}
            {categories && (
               <form
                  onSubmit={(event) => onSubmit(event)}
                  className="w-full h-full flex flex-col gap-4 p-4"
               >
                  <h2 className="text-center font-semibold text-lg">
                     Select Products
                  </h2>
                  <Categories
                     categories={categories}
                     handleChangeCategory={handleChangeCategory}
                  />
                  {selectedCategory && productsPending && <div>...loading</div>}
                  {selectedCategory && productsError && <div>...failed</div>}
                  <div className="flex flex-1 min-h-0">
                     {products && (
                        <ProductsList
                           products={products}
                           selectedProducts={selectedProducts}
                           toggleProduct={toggleProduct}
                        />
                     )}
                  </div>
                  {message && (
                     <p
                        className={`text-xl font-bold text-center ${message.successful ? "text-green-500" : "text-red-500"}`}
                     >
                        {message.text}
                     </p>
                  )}
                  <div className="flex justify-center gap-4">
                     <button
                        type="button"
                        onClick={toClose}
                        className="border border-black p-1"
                     >
                        Cancel
                     </button>
                     <button
                        type="submit"
                        className={`border p-1 ${selectedProducts.length !== 0 ? "border-black text-black" : "border-gray-500 text-gray-500"}`}
                        disabled={selectedProducts.length === 0}
                     >
                        Add Product
                     </button>
                  </div>
               </form>
            )}
         </div>
      </div>
   );
}

export default ProductSelector;
