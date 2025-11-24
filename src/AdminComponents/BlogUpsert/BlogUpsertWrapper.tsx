import BlogForm from "./BlogForm.tsx";

import { BlogType } from "../../Types/BlogType.tsx";

interface BlogUpsertWrapperProps {
   blog?: BlogType;
   handleSubmit: (formData: FormData, isEdit: boolean) => void;
}

function BlogUpsertWrapper({ handleSubmit, blog }: BlogUpsertWrapperProps) {
   return (
      <div className="w-screen min-h-screen bg-background p-2 md:p-4">
         <BlogForm handleSubmit={handleSubmit} blog={blog} />
      </div>
   );
}
export default BlogUpsertWrapper;
