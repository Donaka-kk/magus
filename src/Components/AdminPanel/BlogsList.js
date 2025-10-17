import Blog from "./Blog";
import { useNavigate } from "react-router-dom";

function BlogsList({ data }) {
   const nav = useNavigate();

   return (
      <div className="flex flex-col justify-center items-center gap-2 p-2">
         {data.map((blog) => {
            return (
               <Blog
                  key={blog.id}
                  image={blog.image}
                  title={blog.title}
                  summary={blog.summary}
                  id={blog.id}
               />
            );
         })}
         <div className="flex gap-2">
            <button
               onClick={() => nav("/admin/panel")}
               className=" border border-black px-2 py-1"
            >
               Back to panel
            </button>
            <button
               onClick={() => nav("/admin/panel/blogupsert")}
               className=" border border-black px-2 py-1"
            >
               Add Blog
            </button>
         </div>
      </div>
   );
}
export default BlogsList;
