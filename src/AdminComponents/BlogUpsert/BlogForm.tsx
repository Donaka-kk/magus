import React, { useState } from "react";
import { BlogType } from "../../Types/BlogType.tsx";
import { useNavigate } from "react-router-dom";

interface BlogFormProps {
   handleSubmit: (formData: FormData, isEdit: boolean) => void;
   blog?: BlogType;
}

function BlogForm({ blog, handleSubmit }: BlogFormProps) {
   const nav = useNavigate();

   const [title, setTitle] = useState<string>(blog?.title ?? "");
   const [summary, setSummary] = useState<string>(blog?.summary ?? "");
   const [defaultImage, setDefaultImage] = useState<File | null>(null);
   const [text, setText] = useState<string>(blog?.text ?? "");

   const previewImage = defaultImage
      ? URL.createObjectURL(defaultImage)
      : (blog?.defaultImage ?? null);

   const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const fd = new FormData();
      fd.append("title", title);
      fd.append("summary", summary);
      fd.append("text", text);

      if (defaultImage) {
         fd.append("image", defaultImage);
      } else if (blog?.defaultImage) {
         fd.append("image", blog.defaultImage);
      }
      handleSubmit(fd, Boolean(blog));
   };

   return (
      <div className="w-full h-full flex justify-center items-center">
         <form
            onSubmit={onSubmit}
            className="flex flex-col w-10/12 p-4 gap-4 border border-black"
         >
            <h1 className="text-center text-xl font-semibold">
               {blog ? "Edit Blog" : "Add Blog"}
            </h1>

            <label>Title</label>
            <input
               required
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               className="w-full border p-1"
            />

            <label>Summary</label>
            <input
               required
               value={summary}
               onChange={(e) => setSummary(e.target.value)}
               className="w-full border p-1"
            />

            <label>Image</label>
            {previewImage && (
               <img
                  src={previewImage}
                  alt="Blog"
                  className="w-96 object-cover"
               />
            )}

            <input
               type="file"
               accept="image/*"
               required={!blog}
               onChange={(e) => {
                  const f = e.target.files?.[0] ?? null;
                  setDefaultImage(f);
               }}
               className="w-full border p-1"
            />

            <label>Text</label>
            <textarea
               required
               value={text}
               onChange={(e) => setText(e.target.value)}
               className="w-full border p-1 min-h-[200px]"
            />

            <div className="flex justify-center gap-2 pt-2">
               <button
                  type="button"
                  onClick={() => nav("/admin/panel/adminblogs")}
                  className="px-3 py-1 border"
               >
                  Cancel
               </button>
               <button type="submit" className="px-3 py-1 border">
                  Submit
               </button>
            </div>
         </form>
      </div>
   );
}

export default BlogForm;
