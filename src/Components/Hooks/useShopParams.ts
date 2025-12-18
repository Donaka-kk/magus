import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export function useShopParams() {
   const [searchParams, setSearchParams] = useSearchParams();

   const updateSearchParams = useCallback(
      (update: Record<string, string>) => {
         const next = new URLSearchParams(searchParams);
         Object.entries(update).forEach(([key, value]) => {
            next.set(key, value);
         });
         setSearchParams(next, { replace: true });
      },
      [searchParams, setSearchParams]
   );

   const rawPage = Number(searchParams.get("page"));
   const page = rawPage > 0 ? rawPage : 1;

   const category = searchParams.get("category") ?? "All";

   const goToPage = useCallback(
      (page: number) => {
         updateSearchParams({ page: String(page) });
         window.scrollTo({ top: 0, behavior: "smooth" });
      },
      [updateSearchParams]
   );

   const changeCategory = useCallback(
      (category: string) => {
         updateSearchParams({ category, page: "1" });
      },
      [updateSearchParams]
   );

   return {
      page,
      category,
      goToPage,
      changeCategory,
   };
}
