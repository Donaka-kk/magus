import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { ProductSchemeType } from "../../Types/ProductType.tsx";
import { CarouselDummyData } from "../../Components/API/CarouselDummyData.tsx";

export function useGetProducts(category: string) {
   return useQuery({
      queryKey: ["Products", category],
      queryFn: async () => {
         const response = await axios.get<ProductSchemeType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return CarouselDummyData || response.data;
      },
      enabled: !!category,
   });
}
