import { useState } from "react";
import ImagePreview from "./ImagePreview";
import { useNavigate } from "react-router-dom";
import Palette from "./Palette";
import SizeComponent from "./SizeComponent";

function ItemForm({
   item,
   allCategories,
   param,
   loadMessage,
   handleAdd,
   handleEdit,
}) {
   const [name, setName] = useState(item?.name || "");
   const [price, setPrice] = useState(item?.price || "");
   const [image, setImage] = useState(item?.image || null);
   const [category, setCategory] = useState(item?.category || "");
   const [colors, setColors] = useState(item?.colors || []);
   const [sizes, setSizes] = useState(item?.sizes || []);

   const nav = useNavigate();
   const [message, setMessage] = useState(
      loadMessage || {
         successfull: false,
         text: "",
      }
   );

   const handleSubmit = async (event) => {
      event.preventDefault();
      if (param) {
         await handleEdit({
            name: name,
            price: price,
            image: image,
            category: category,
         }).then((response) => {
            if (response?.status === 200) {
               setMessage({ successfull: true, text: "Successfully edited" });
            } else {
               setMessage({ successfull: false, text: "something went wrong" });
            }
         });
      } else {
         await handleAdd({
            name: name,
            price: price,
            image: image,
            category: category,
         }).then((response) => {
            if (response?.status === 200) {
               setMessage({ successfull: true, text: "Successfully added" });
            } else {
               setMessage({ successfull: false, text: "something went wrong" });
            }
         });
      }
   };

   const handleAddingColor = (selectedColor) => {
      setColors([...colors, selectedColor]);
   };
   const handleDeletingColor = (selectedColor) => {
      var index = colors.indexOf(selectedColor);
      setColors((prevColors) => prevColors.filter((_, i) => i !== index));
   };

   const handleAddingSize = (selectedSize) => {
      setSizes([...sizes, selectedSize]);
   };
   const handleDeletingSize = (selectedSize) => {
      var index = sizes.indexOf(selectedSize);
      setSizes((prevSize) => prevSize.filter((_, i) => i !== index));
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="w-full flex flex-col p-2 md:p-4 gap-2 md:border border-black"
      >
         <h1 className="text-center font-semibold text-xl">
            {param ? "Edit item" : "Add item"}
         </h1>

         <label>name</label>
         <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-1"
            required
         />

         <label>price</label>
         <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            defaultValue={item?.category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-1"
         >
            <option value="">-- Select a category --</option>
            {allCategories.map((c) => (
               <option key={c.id} value={c.first_name}>
                  {c.first_name}
               </option>
            ))}
         </select>

         <label>image</label>
         <input
            type="file"
            accept="image/*"
            onChange={(e) =>
               setImage(URL.createObjectURL(e.target.files[0]) || null)
            }
            className="border p-1"
         />

         <div className="flex justify-center items-center w-full">
            <ImagePreview image={image} />
         </div>

         <div className="flex justify-center gap-2">
            <button
               type="button"
               onClick={() => nav("/admin/panel/items")}
               className="border p-1 border-gray-500 hover:font-semibold active:scale-95"
            >
               Cancel
            </button>
            <button
               type="submit"
               className="border p-1 border-gray-500 hover:font-semibold active:scale-95"
            >
               {param ? "Edit" : "Add"}
            </button>
         </div>

         <p
            className={`text-center font-semibold ${
               message.successfull ? "text-green-500" : "text-red-500"
            }`}
         >
            {message.text}
         </p>
      </form>
   );
}
export default ItemForm;
