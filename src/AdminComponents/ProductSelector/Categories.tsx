import { CategoryType } from "../../Types/CategoryType";

interface CategoriesProps {
   categories: CategoryType[];
   handleChangeCategory: (category: string) => void;
}

function Categories({ categories, handleChangeCategory }: CategoriesProps) {
   return (
      <div className="flex flex-col">
         <label>Categories</label>
         <select
            onChange={(e) => handleChangeCategory(e.target.value)}
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
   );
}

export default Categories;
