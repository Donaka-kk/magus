import axios from "axios";
import ShopWrapper from "../Components/Shop/ShopWrapper.tsx";

import { PageType } from "../Types/PageType.tsx";
import { CategoryType } from "../Types/CategoryType.ts";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { useShopParams } from "../Components/Hooks/useShopParams.ts";

import { ShopCategories } from "../Components/API/CategoriesDummyData.tsx";
import { ShopPageOne } from "../Components/API/ShopDummyData.tsx";
import { ShopPageTwo } from "../Components/API/ShopDummyData.tsx";
import { ShopPageThree } from "../Components/API/ShopDummyData.tsx";
import { ShopPageFour } from "../Components/API/ShopDummyData.tsx";
import { ShopPageFive } from "../Components/API/ShopDummyData.tsx";

const Shop = () => {
   const { page, category, goToPage, changeCategory } = useShopParams();

   const { data: categories } = useSuspenseQuery<CategoryType[]>({
      queryKey: ["categories"],
      queryFn: async () => {
         const response = await axios.get<CategoryType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: { "x-api-key": process.env.REACT_APP_REQRES_KEY },
            }
         );
         //change this to response before build
         return ShopCategories || response;
      },
   });
   const { data, error } = useSuspenseQuery<PageType>({
      queryKey: ["ShopProducts", page],
      queryFn: async () => {
         const response = await axios.get<PageType>(
            `https://reqres.in/api/users/${page}`,
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );

         // For dummy data
         if (page === 1) return ShopPageOne || response;
         else if (page === 2) return ShopPageTwo;
         else if (page === 3) return ShopPageThree;
         else if (page === 4) return ShopPageFour;
         else return ShopPageFive;

         // When you switch to real API, just return response
         // The API will return a 404 or empty data if page doesn't exist
         //return response;
      },
   });

   useEffect(() => {
      console.log(category);
      if (category !== "all" && !categories.some((c) => c.title === category))
         changeCategory("all");
   }, [category, changeCategory, categories]);

   useEffect(() => {
      console.log(page);
      if (page < 1) {
         goToPage(1);
      }
   }, [page, goToPage]);

   const nextPage = useCallback(async () => {
      if (!data) return;

      if (page < data.totalPages) {
         goToPage(page + 1);
         window.scrollTo({ top: 0, behavior: "smooth" });
      }
   }, [page, data, goToPage]);

   const prevPage = useCallback(() => {
      if (page > 1) {
         window.scrollTo({ top: 0, behavior: "smooth" });
         goToPage(page - 1);
      }
   }, [page, goToPage]);

   const handleSearch = (searchText: string) => {
      console.log(searchText);
   };
   const handleChangeCategory = (newCategory: CategoryType) => {
      changeCategory(newCategory.title);
   };

   return (
      <ShopWrapper
         page={data}
         error={error}
         nextPage={nextPage}
         prevPage={prevPage}
         categories={categories}
         handleSearch={handleSearch}
         handleChangeCategory={handleChangeCategory}
         goToPage={goToPage}
      />
   );
};

export default Shop;
