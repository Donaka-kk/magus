import axios from "axios";
import SpecialOffersWrapper from "../AdminComponents/SpecialOffers/SpecialOffersWrapper.tsx";

import { useQuery, useMutation } from "@tanstack/react-query";
import { ProductSchemeType } from "../Types/ProductType";
import { SpecialOffersDummyData } from "../Components/API/SpecialOffersDummyData.tsx";

function SpecialOffers() {
   const { data, isPending, isError } = useQuery({
      queryKey: ["SpecialOffersProducts"],
      queryFn: async () => {
         const response = await axios.get<ProductSchemeType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         return SpecialOffersDummyData || response.data;
      },
   });

   const editSpecialOffers = useMutation({
      mutationKey: ["editSpecialOffers"],
      mutationFn: async (productsIds: number[]) => {
         console.log(productsIds);
         const response = await axios.put(
            "https://reqres.in/api/users/2",
            {
               name: "morpheus",
               job: "zion resident",
            },
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         return response.data;
      },
      onSuccess(data, variables, onMutateResult, context) {
         console.log("Carousel updated successfully:", data);
      },
   });

   if (isPending) return <div>...loading</div>;
   if (isError) return <div>...failed</div>;

   return (
      <div>
         <SpecialOffersWrapper
            products={data}
            toEditList={editSpecialOffers.mutate}
         />
      </div>
   );
}

export default SpecialOffers;
