import axios from "axios";
import BlogUpsertWrapper from "../AdminComponents/BlogUpsert/BlogUpsertWrapper.tsx";

import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BlogType } from "../Types/BlogType.tsx";
import { BlogUpsertDummyData } from "../Components/API/BlogUpsertDummyData.tsx";

function ItemUpsert() {
   const [searchParams] = useSearchParams();
   const param = searchParams.get("id");

   const handleSubmit = (formData: FormData, isEdit: boolean) => {
      console.log(formData.get("title"));
      console.log(formData.get("summary"));
      console.log(formData.get("image"));
      console.log(formData.get("text"));
      console.log(isEdit);
   };

   const { data, isPending, isError } = useQuery<BlogType>({
      queryKey: ["Blog", param],
      queryFn: async () => {
         const response = await axios.get<BlogType>(
            `https://reqres.in/api/users/${param}`,
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         //change this to response before build
         return BlogUpsertDummyData || response;
      },
      enabled: !!param,
   });

   if (param && isPending) return <div>...loading</div>;
   if (param && isError) return <div>...failed</div>;

   return <BlogUpsertWrapper handleSubmit={handleSubmit} blog={data} />;
}
export default ItemUpsert;
