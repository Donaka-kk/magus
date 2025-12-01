import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { ProductSchemeType } from "../../Types/ProductType";
import { dummyCategories } from "../../Components/API/CategoriesDummyData.tsx";

export function useGetCategories() {
   console.log("useGetCategories called");
   return useQuery({
      queryKey: ["Categories"],
      queryFn: async () => {
         const response = await axios.get<ProductSchemeType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         return dummyCategories || response.data;
      },
   });
}
