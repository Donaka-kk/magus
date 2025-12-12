import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { ProductSchemeType } from "../../Types/ProductType";
import { dummyCategories } from "../../Components/API/CategoriesDummyData.tsx";

export function useGetCategories() {
   return useQuery({
      queryKey: ["Categories"],
      queryFn: async () => {
         const response = await axios.get<ProductSchemeType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return dummyCategories || response.data;
      },
   });
}
