import { useState } from "react";
import { useGetCategories } from "../Hooks/useGetCategories.ts";
import { useGetProducts } from "../Hooks/useGetProducts.ts";
import { useAddProducts } from "../Hooks/useAddProducts.ts";

interface NewPostFormProps {
   toClose: () => void;
}

function ProductSelector({ toClose }: NewPostFormProps) {
   const [selectedCategory, setSelectedCategory] = useState("");
   const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

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

   const addProductMutation = useAddProducts(toClose);

   const toggleProduct = (productId: number) => {
      setSelectedProducts(
         (prev) =>
            prev.includes(productId)
               ? prev.filter((id) => id !== productId) // remove
               : [...prev, productId] // add
      );
   };

   const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      addProductMutation.mutate(selectedProducts);
   };

   return (
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center z-20">
         <div
            onClick={() => toClose()}
            className="absolute w-full h-full bg-transparent06"
         />
         {categoriesPending && <div>...loading</div>}
         {categoriesError && <div>...failed</div>}
         {categories && (
            <form
               onSubmit={(event) => onSubmit(event)}
               className="relative flex flex-col w-8/12 h-8/12 bg-white gap-4 p-4 z-10 overflow-y-auto"
            >
               <h2 className="text-center font-semibold text-lg">
                  Select Products
               </h2>
               <div className="flex flex-col">
                  <label>Categories</label>
                  <select
                     onChange={(e) => setSelectedCategory(e.target.value)}
                     className="border border-black outline-none p-1"
                  >
                     <option value="">Select the category</option>
                     {categories?.map((category) => (
                        <option key={category.id} value={category.title}>
                           {category.title}
                        </option>
                     ))}
                  </select>
               </div>
               <div className="flex flex-col flex-1 overflow-y-auto">
                  <label>Products</label>
                  {selectedCategory && productsPending && <div>...loading</div>}
                  {selectedCategory && productsError && <div>...failed</div>}
                  {products?.map((product) => {
                     return (
                        <label
                           key={product.id}
                           className="flex gap-2 items-center"
                        >
                           <input
                              type="checkbox"
                              value={product.id}
                              checked={selectedProducts.includes(product.id)}
                              onChange={() => toggleProduct(product.id)}
                           />
                           {product.name}
                        </label>
                     );
                  })}
               </div>
               <div className="flex justify-center gap-4">
                  <button type="button" onClick={() => toClose()}>
                     Cancel
                  </button>
                  <button type="submit">Add Product</button>
               </div>
            </form>
         )}
      </div>
   );
}

export default ProductSelector;
