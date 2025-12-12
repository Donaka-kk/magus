import axios from "axios";
import CarouselWrapper from "../AdminComponents/Carousel/CarouselWrapper.tsx";

import { useSuspenseQuery, useMutation } from "@tanstack/react-query";
import { ProductSchemeType } from "../Types/ProductType";
import { CarouselDummyData } from "../Components/API/CarouselDummyData.tsx";

function Carousel() {
   const { data } = useSuspenseQuery({
      queryKey: ["CarouselProducts"],
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
   });

   const editCarousel = useMutation({
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
         console.log("Carousel updated successfully:", data);
      },
   });

   return <CarouselWrapper products={data} toEditList={editCarousel.mutate} />;
}
export default Carousel;
