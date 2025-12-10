import axios from "axios";
import AboutUsWrapper from "../AdminComponents/AboutUs/AboutUsWrapper.tsx";

import {
   useMutation,
   useQueryClient,
   useSuspenseQuery,
} from "@tanstack/react-query";
import { AboutUsDummyData } from "../Components/API/AboutUsDummyData.tsx";
import { PostType } from "../Types/PostType.ts";

function AboutUs() {
   const queryClient = useQueryClient();
   const { data } = useSuspenseQuery({
      queryKey: ["AboutUsPosts"],
      queryFn: async () => {
         const response = await axios.get<PostType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return AboutUsDummyData || response.data;
      },
   });

   const editPosts = useMutation({
      mutationFn: async (newPosts: PostType[]) => {
         const response = await axios.put(
            "https://reqres.in/api/users/2",
            newPosts,
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return response.data;
      },
      onSuccess() {
         queryClient.invalidateQueries({ queryKey: ["AboutUsPosts"] });
      },
   });
   return <AboutUsWrapper toEditPosts={editPosts.mutate} posts={data} />;
}

export default AboutUs;
