import axios from "axios";

import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";

interface NewPostFormProps {
   toClose: () => void;
}

function PostForm({ toClose }: NewPostFormProps) {
   console.log("PostForm");
   const queryClient = useQueryClient();
   const [title, setTitle] = useState<string>("");
   const [image, setImage] = useState<File | null>(null);
   const [text, setText] = useState<string>("");

   const addNewPost = useMutation({
      mutationKey: ["addNewAboutUsPost"],
      mutationFn: async (newPost: {
         title: string;
         image: File | null;
         text: string;
      }) => {
         const response = await axios.post(
            "https://reqres.in/api/users",
            {
               name: "morpheus",
               job: "leader",
            },
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         return response.data;
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["AboutUsPosts"] });
         toClose();
      },
      onError: (error) => {
         console.error("Error adding new slide:", error);
      },
   });

   const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      addNewPost.mutate({
         title: title,
         image: image,
         text: text,
      });
   };

   return (
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center z-20">
         <div
            onClick={() => toClose()}
            className="absolute w-full h-full bg-transparent06"
         />
         <form
            onSubmit={(event) => onSubmit(event)}
            className="relative flex flex-col w-8/12 h-8/12 bg-white gap-4 p-4 z-10 overflow-y-auto"
         >
            <h2 className="text-center font-semibold text-lg">Add New Slide</h2>
            <div className="flex flex-col">
               <label htmlFor="slideImage">Post Image</label>
               <input
                  type="file"
                  required
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
               />
            </div>
            {image && (
               <img
                  src={URL.createObjectURL(image)}
                  alt="postImage"
                  className="w-96"
               />
            )}
            <div className="flex flex-col">
               <label>Title</label>
               <input
                  type="text"
                  required
                  placeholder="Enter title"
                  className="outline-none border p-1"
                  onChange={(e) => setTitle(e.target.value)}
               />
            </div>
            <div className="flex flex-col flex-1">
               <label>Text</label>
               <textarea
                  required
                  placeholder="Enter text"
                  className="outline-none border p-1 w-full min-h-40 h-full resize-none"
                  onChange={(e) => setText(e.target.value)}
               />
            </div>
            <div className="flex justify-center gap-4">
               <button type="button" onClick={() => toClose()}>
                  Cancel
               </button>
               <button type="submit">Add Slide</button>
            </div>
         </form>
      </div>
   );
}

export default PostForm;
