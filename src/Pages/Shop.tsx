import axios from "axios";
import Categories from "../Components/Categories/Categories.tsx";
import ShowCase from "../Components/ShowCase/ShowCase";
import ShopNavigator from "../Components/ShopNavigator/ShopNavigator.tsx";

import { ShopPageOne } from "../Components/API/ShopDummyData.tsx";
import { ShopPageTwo } from "../Components/API/ShopDummyData.tsx";
import { ShopPageThree } from "../Components/API/ShopDummyData.tsx";
import { ShopPageFour } from "../Components/API/ShopDummyData.tsx";
import { ShopPageFive } from "../Components/API/ShopDummyData.tsx";
import { PageType } from "../Types/PageType.tsx";
import { dummyCategories } from "../Components/API/CategoriesDummyData.tsx";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Shop = () => {
   const [index, setIndex] = useState<number>(1);
   const { data, isPending, isError, fetchNextPage } =
      useInfiniteQuery<PageType>({
         queryKey: ["shopProducts"],
         queryFn: async ({ pageParam }) => {
            if (pageParam === 1) {
               return ShopPageOne;
            } else if (pageParam === 2) {
               return ShopPageTwo;
            } else if (pageParam === 3) {
               return ShopPageThree;
            } else if (pageParam === 4) {
               return ShopPageFour;
            } else {
               return ShopPageFive;
            }
         },
         initialPageParam: 1,
         getNextPageParam: (lastPage) => {
            if (lastPage.pageNumber >= lastPage.totalPages) return undefined;
            return lastPage.pageNumber + 1;
         },
      });
   const page: PageType = data?.pages[index - 1]!;

   const {
      data: categories,
      isPending: categoriesPending,
      isError: categoriesError,
   } = useQuery({
      queryKey: ["categories"],
      queryFn: async () => {
         const response = await axios.get("https://reqres.in/api/users/1", {
            headers: {
               "x-api-key": "reqres-free-v1",
            },
         });
         //change this to response before build
         return dummyCategories || response;
      },
   });

   const handleSearch = (searchText: string) => {
      console.log(searchText);
   };
   const handleChangeCategory = (newCategory: string) => {
      console.log(newCategory);
   };

   const nextPage = async () => {
      console.log(data);
      console.log(index);
      if (index < page.totalPages) {
         window.scrollTo({ top: 400, behavior: "smooth" });
         await fetchNextPage();
         setIndex((prev) => prev + 1);
      }
   };
   const prevPage = () => {
      if (index > 1) {
         window.scrollTo({ top: 400, behavior: "smooth" });
         setIndex((prev) => prev - 1);
      }
   };

   console.log(page);
   return (
      <div className="relative flex flex-row p-5 gap-5">
         <div className="w-full flex flex-col justify-between">
            {page && (
               <>
                  <ShowCase
                     products={page.data}
                     isPending={isPending}
                     isError={isError}
                  />
                  <ShopNavigator
                     currentPage={index}
                     allPages={data?.pages[0].totalPages!}
                     nextPage={nextPage}
                     prevPage={prevPage}
                  />
               </>
            )}
         </div>
         <div className="sticky top-28 h-fit flex flex-col gap-5 w-2/5 text-sm md:w-2/6 md:text-base lg:w-3/12 lg:text-lg">
            {categories && (
               <Categories
                  categories={categories}
                  toChangeCategory={handleChangeCategory}
                  toHandleSearch={handleSearch}
                  categoriesPending={categoriesPending}
                  categoriesError={categoriesError}
               />
            )}
         </div>
      </div>
   );
};

export default Shop;
