import BlogsList from "./BlogsList.tsx";

import { BlogType } from "../../Types/BlogType.tsx";
import { useNavigate } from "react-router-dom";

interface BlogsWrapperProps {
   blogs: BlogType[];
}
function BlogsWrapper({ blogs }: BlogsWrapperProps) {
   const nav = useNavigate();
   return (
      <div className="min-w-screen min-h-screen bg-background">
         <div className="Container p-2 md:p-4">
            <div className="w-full flex justify-center gap-5">
               <button
                  onClick={() => nav("/admin/panel")}
                  className="p-2 border border-black rounded-xl"
               >
                  Back to panel
               </button>
               <button
                  onClick={() => nav("/admin/panel/blogupsert")}
                  className="p-2 border border-black rounded-xl"
               >
                  Add new Blog
               </button>
            </div>
            <BlogsList blogs={blogs} />
         </div>
      </div>
   );
}
export default BlogsWrapper;
