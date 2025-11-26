import axios from "axios";
import HeroSectionSlides from "../AdminComponents/HeroSection/HeroSectionSlides.tsx";

import { useMutation, useQuery } from "@tanstack/react-query";
import { NewHeroSectionDummyData } from "../Components/API/HeroSectionDummyData.tsx";

function HeroSection() {
   const { data, isPending, isError } = useQuery({
      queryKey: ["HeroSectionSlides"],
      queryFn: async () => {
         const response = await axios.get<string[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         return NewHeroSectionDummyData || response.data;
      },
   });

   const editHeroSection = useMutation({
      mutationKey: ["editHeroSectionSlides"],
      mutationFn: async (newSlides: string[]) => {
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
         <HeroSectionSlides
            slides={data}
            toEditHeroSection={editHeroSection.mutate}
         />
      </div>
   );
}

export default HeroSection;
