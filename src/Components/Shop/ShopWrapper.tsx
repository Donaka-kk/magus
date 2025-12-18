import ShowCase from "./ShowCase.tsx";
import Categories from "./Categories.tsx";
import Paginator from "../../AdminComponents/Pagination/Paginator.tsx";

import { CategoryType } from "../../Types/CategoryType.ts";
import { PageType } from "../../Types/PageType.tsx";

interface ShopWrapperProps {
   page: PageType | undefined;
   error: Error | null;
   nextPage: () => void;
   prevPage: () => void;
   categories: CategoryType[];
   handleSearch: (searchedText: string) => void;
   handleChangeCategory: (newCategory: CategoryType) => void;
   goToPage: (page: number) => void;
}

function ShopWrapper({
   page,
   error,
   nextPage,
   prevPage,
   categories,
   handleSearch,
   handleChangeCategory,
   goToPage,
}: ShopWrapperProps) {
   return (
      <div className="w-full min-h-screen bg-background">
         <div className="relative flex flex-row p-5 gap-5">
            <div className="w-full flex flex-col justify-between">
               {page && (
                  <>
                     <ShowCase products={page.data} />
                     <Paginator
                        currentPage={page.pageNumber}
                        totalPages={page.totalPages}
                        goToPage={goToPage}
                        nextPage={nextPage}
                        prevPage={prevPage}
                     />
                  </>
               )}
               {error && <div>...ERROR</div>}
            </div>
            <div className="sticky top-28 h-fit flex flex-col gap-5 w-2/5 text-sm md:w-2/6 md:text-base lg:w-3/12 lg:text-lg">
               {categories && (
                  <Categories
                     categories={categories}
                     toChangeCategory={handleChangeCategory}
                     toHandleSearch={handleSearch}
                  />
               )}
            </div>
         </div>
      </div>
   );
}

export default ShopWrapper;
