import axios from "axios";
import HeroSectionWrapper from "../AdminComponents/HeroSection/HeroSectionWrapper.tsx";

import {
   useMutation,
   useQueryClient,
   useSuspenseQuery,
} from "@tanstack/react-query";
import { NewHeroSectionDummyData } from "../Components/API/HeroSectionDummyData.tsx";
import { SlideType } from "../Types/SlideType.tsx";

function HeroSection() {
   const queryClient = useQueryClient();
   const { data } = useSuspenseQuery({
      queryKey: ["HeroSectionSlides"],
      queryFn: async () => {
         const response = await axios.get<SlideType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return NewHeroSectionDummyData || response.data;
      },
   });

   const editHeroSection = useMutation({
      mutationFn: async (newSlides: SlideType[]) => {
         const response = await axios.put(
            "https://reqres.in/api/users/2",
            newSlides,
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return response.data;
      },
      onSuccess() {
         queryClient.invalidateQueries({ queryKey: ["HeroSectionSlides"] });
      },
   });

   return (
      <HeroSectionWrapper
         toEditHeroSection={editHeroSection.mutate}
         slides={data}
      />
   );
}

export default HeroSection;
