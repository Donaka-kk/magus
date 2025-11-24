import Palette from "./Palette.tsx";
import SizeComponent from "./SizeComponent.tsx";

import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductSchemeType, NewProductType } from "../../../Types/ProductType";

interface ProductFormProps {
   handleSubmit: (formData: NewProductType, isEdit: boolean) => void;
   product?: ProductSchemeType;
   categories: string[];
}

function ProductForm({ handleSubmit, product, categories }: ProductFormProps) {
   const [name, setName] = useState<string>(product?.name || "");
   const [price, setPrice] = useState<number>(product?.price || 0);
   const [image, setImage] = useState<File | null>(null);
   const [category, setCategory] = useState<string>(product?.category || "");
   const [newCategory, setNewCategory] = useState<string>("");
   const [colors, setColors] = useState<string[]>(product?.colors || []);
   const [sizes, setSizes] = useState<string[]>(product?.sizes || []);

   const previewImage = image
      ? URL.createObjectURL(image)
      : (product?.image ?? null);

   const nav = useNavigate();

   const toHandleSubmit = (e: FormEvent) => {
      e.preventDefault();
      const formData = {
         name: name,
         price: price,
         image: image ?? product?.image!,
         category: category,
         newCategory: newCategory,
         colors: colors,
         sizes: sizes,
      };
      handleSubmit(formData, Boolean(product));
   };

   const handleAddingColor = (selectedColor: string) => {
      setColors([...colors, selectedColor]);
   };
   const handleDeletingColor = (selectedColor: string) => {
      var index = colors.indexOf(selectedColor);
      setColors((prevColors) => prevColors.filter((_, i) => i !== index));
   };

   const handleAddingSize = (selectedSize: string) => {
      setSizes([...sizes, selectedSize]);
   };
   const handleDeletingSize = (selectedSize: string) => {
      var index = sizes.indexOf(selectedSize);
      setSizes((prevSize) => prevSize.filter((_, i) => i !== index));
   };

   return (
      <form
         onSubmit={(e) => toHandleSubmit(e)}
         className="w-full flex flex-col p-2 md:p-4 gap-2 border border-black"
      >
         <h1 className="text-center font-semibold text-xl">
            {product ? "Edit item" : "Add item"}
         </h1>

         <label>name</label>
         <input
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-1"
            required
         />

         <label>price</label>
         <input
            type="number"
            defaultValue={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="border p-1"
            required
         />

         <div className="w-full">
            <Palette
               colors={colors}
               handleAddingColor={handleAddingColor}
               handleDeletingColor={handleDeletingColor}
            />
         </div>

         <div className="w-full">
            <SizeComponent
               sizes={sizes}
               handleAddingSize={handleAddingSize}
               handleDeletingSize={handleDeletingSize}
            />
         </div>

         <label>category</label>
         <select
            defaultValue={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-1"
         >
            <option value="">-- Select a category --</option>
            {categories &&
               categories.map((c) => (
                  <option key={c} value={c}>
                     {c}
                  </option>
               ))}
         </select>

         <label>New category</label>
         <input
            onChange={(e) => setNewCategory(e.target.value)}
            className="border p-1"
         />

         <label>image</label>
         <input
            type="file"
            accept="image/*"
            onChange={(e) => {
               if (e.target.files) setImage(e.target.files[0]);
            }}
            className="border p-1"
            required={!product}
         />

         {previewImage && (
            <img src={previewImage} alt="Blog" className="w-96 object-cover" />
         )}

         <div className="flex justify-center gap-2">
            <button
               type="button"
               onClick={() => nav("/admin/panel/adminproducts")}
               className="border p-1 border-gray-500 hover:font-semibold active:scale-95"
            >
               Cancel
            </button>
            <button
               type="submit"
               className="border p-1 border-gray-500 hover:font-semibold active:scale-95"
            >
               Submit
            </button>
         </div>
      </form>
   );
}
export default ProductForm;
