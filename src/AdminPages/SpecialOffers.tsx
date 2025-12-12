import axios from "axios";
import SpecialOffersWrapper from "../AdminComponents/SpecialOffers/SpecialOffersWrapper.tsx";

import { useSuspenseQuery, useMutation } from "@tanstack/react-query";
import { ProductSchemeType } from "../Types/ProductType";
import { SpecialOffersDummyData } from "../Components/API/SpecialOffersDummyData.tsx";

function SpecialOffers() {
   const { data } = useSuspenseQuery({
      queryKey: ["SpecialOffersProducts"],
      queryFn: async () => {
         const response = await axios.get<ProductSchemeType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return SpecialOffersDummyData || response.data;
      },
   });

   const editSpecialOffers = useMutation({
      mutationFn: async (productsIds: number[]) => {
         const response = await axios.put(
            "https://reqres.in/api/users/2",
            productsIds,
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return response.data;
      },
      onSuccess(data, variables, onMutateResult, context) {
         console.log("SpecialOffers updated successfully:", data);
      },
   });

   return (
      <SpecialOffersWrapper
         products={data}
         toEditList={editSpecialOffers.mutate}
      />
   );
}

export default SpecialOffers;
