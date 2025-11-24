import Blog from "./Blog.tsx";

import { BlogType } from "../../Types/BlogType.tsx";

interface BlogListProps {
   blogs: BlogType[];
}

function BlogsList({ blogs }: BlogListProps) {
   return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
         {blogs.map((blog, index) => {
            return <Blog key={index} blog={blog} />;
         })}
      </div>
   );
}
export default BlogsList;
