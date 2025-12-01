import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { ProductSchemeType } from "../../Types/ProductType";
import { ShopPageOne } from "../../Components/API/ShopDummyData.tsx";

export function useGetProducts(category: string) {
   console.log("useGetProducts called");
   return useQuery({
      queryKey: ["Products", category],
      queryFn: async () => {
         const response = await axios.get<ProductSchemeType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         return ShopPageOne || response.data;
      },
      enabled: !!category,
   });
}
