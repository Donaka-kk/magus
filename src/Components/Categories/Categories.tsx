import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import LoadingComponent from "../Layout/LoadingComponent";
import { CategoryType } from "../../Types/CategoryType";
interface CategorieProps {
   categories: CategoryType[];
   toHandleSearch: (searchText: string) => void;
   toChangeCategory: (newCategory: string) => void;
   categoriesPending: boolean;
   categoriesError: boolean;
}
const Categories = ({
   categories,
   toChangeCategory,
   toHandleSearch,
   categoriesPending,
   categoriesError,
}: CategorieProps) => {
   const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
      categories[0]
   );
   const [searchString, setSearchString] = useState<string>("");
   const searchInput = useRef<HTMLInputElement>(null);
   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
         toHandleSearch(searchString);
         setSelectedCategory("All");
         searchInput.current?.blur();
      }
   };

   if (categoriesPending) return <LoadingComponent failed={false} />;
   if (categoriesError) return <LoadingComponent failed={true} />;

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
                  setSelectedCategory("All");
                  toHandleSearch(searchString);
               }}
               className="absolute ml-2 active:scale-95"
            >
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
         {categories && (
            <div className="flex flex-col justify-end items-center gap-2">
               {categories?.map((element, index) => {
                  return (
                     <button
                        key={index}
                        onClick={() => {
                           toChangeCategory(element);
                           setSelectedCategory(element);
                        }}
                        className={`w-full rounded-md active:scale-95 ${selectedCategory === element && " bg-gray-600 text-white"}`}
                     >
                        {element}
                     </button>
                  );
               })}
            </div>
         )}
      </div>
   );
};

export default Categories;
