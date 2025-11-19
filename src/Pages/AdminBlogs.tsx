import axios from "axios";
import BlogsWrapper from "../Components/AdminPanel/Blogs/BlogsWrapper.tsx";

import { useQuery } from "@tanstack/react-query";
import { BlogsDummyData } from "../Components/API/BlogsDummyData.tsx";
import { BlogType } from "../Types/BlogType.tsx";

function AdminBlogs() {
   const { data, isPending, isError } = useQuery({
      queryKey: ["Blogs"],
      queryFn: async () => {
         const response = await axios.get<BlogType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         //change this to response before build
         return BlogsDummyData || response;
      },
   });

   if (isPending) return <div>...loading</div>;
   if (isError) return <div>...failed</div>;

   return <BlogsWrapper blogs={data} />;
}
export default AdminBlogs;
