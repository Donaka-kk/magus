import axios from "axios";
import AboutUsWrapper from "../AdminComponents/AboutUs/AboutUsWrapper.tsx";

import { useMutation, useQuery } from "@tanstack/react-query";
import { AboutUsDummyData } from "../Components/API/AboutUsDummyData.tsx";
import { PostType } from "../Types/PostType.ts";

function AboutUs() {
   console.log("AboutUs");
   const { data, isPending, isError } = useQuery({
      queryKey: ["AboutUsPosts"],
      queryFn: async () => {
         const response = await axios.get<PostType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         return AboutUsDummyData || response.data;
      },
   });

   const editPosts = useMutation({
      mutationKey: ["editHeroSectionSlides"],
      mutationFn: async (newSlides: PostType[]) => {
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
         //will show a popup
         console.log("HeroSection updated successfully");
      },
   });

   if (isPending) return <div>...loading</div>;
   if (isError) return <div>...failed</div>;

   return (
      <div>
         <AboutUsWrapper toEditPosts={editPosts.mutate} posts={data} />
      </div>
   );
}

export default AboutUs;
