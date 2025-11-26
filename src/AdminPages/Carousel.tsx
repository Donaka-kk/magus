import axios from "axios";
import CarouselCards from "../AdminComponents/Carousel/CarouselCards.tsx";

import { useQuery, useMutation } from "@tanstack/react-query";
import { ProductSchemeType } from "../Types/ProductType";
import { CarouselDummyData } from "../Components/API/CarouselDummyData.tsx";

function Carousel() {
   const { data, isPending, isError } = useQuery({
      queryKey: ["CarouselProducts"],
      queryFn: async () => {
         const response = await axios.get<ProductSchemeType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         return CarouselDummyData || response.data;
      },
   });

   const editCarousel = useMutation({
      mutationKey: ["editCarousel"],
      mutationFn: async (newSlides: ProductSchemeType[]) => {
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
         <CarouselCards products={data} toEditCarousel={editCarousel.mutate} />
      </div>
   );
}

export default Carousel;
