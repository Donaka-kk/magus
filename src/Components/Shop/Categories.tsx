import LoadingComponent from "../Layout/LoadingComponent";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { CategoryType } from "../../Types/CategoryType";

interface CategorieProps {
   categories: CategoryType[];
   toHandleSearch: (searchText: string) => void;
   toChangeCategory: (newCategory: CategoryType) => void;
}
const Categories = ({
   categories,
   toChangeCategory,
   toHandleSearch,
}: CategorieProps) => {
   const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
      categories[0]
   );
   const [searchString, setSearchString] = useState<string>("");
   const searchInput = useRef<HTMLInputElement>(null);
   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
         toHandleSearch(searchString);
         setSelectedCategory({ title: "All", id: 999 });
         searchInput.current?.blur();
      }
   };

   return (
      <div className="flex flex-col gap-2">
         <div className="relative flex items-center">
            <input
               placeholder="search"
               className="w-full text-sm outline-none bg-inherit pl-6 md:pl-8 md:text-lg rounded-full bg-backGround border-2 border-black"
               onKeyDown={handleKeyDown}
               onChange={(event) => setSearchString(event.target.value)}
               ref={searchInput}
               defaultValue={searchString}
            />
            <button
               onClick={() => {
                  setSelectedCategory({ title: "All", id: 998 });
                  toHandleSearch(searchString);
               }}
               className="absolute ml-2 active:scale-95"
            >
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
         <div className="flex flex-col justify-end items-center gap-2">
            {categories && (
               <>
                  {categories?.map((category) => {
                     return (
                        <button
                           key={category.id}
                           onClick={() => {
                              toChangeCategory(category);
                              setSelectedCategory(category);
                           }}
                           className={`w-full rounded-md active:scale-95 ${selectedCategory.id === category.id && " bg-gray-600 text-white"}`}
                        >
                           {category.title}
                        </button>
                     );
                  })}
               </>
            )}
         </div>
      </div>
   );
};

export default Categories;
