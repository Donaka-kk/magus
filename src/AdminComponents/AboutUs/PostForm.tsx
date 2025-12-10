import axios from "axios";

import { ResponseMessageType } from "../../Types/ResponseMessageType.tsx";
import { useEffect, useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { PostType } from "../../Types/PostType";

interface NewPostFormProps {
   toClose: () => void;
   post?: PostType;
}

function PostForm({ toClose, post }: NewPostFormProps) {
   const [message, setMessage] = useState<ResponseMessageType>();
   const queryClient = useQueryClient();
   const [title, setTitle] = useState<string>("");
   const [image, setImage] = useState<File | null>(null);
   const [text, setText] = useState<string>("");

   const imagePreview = image ? URL.createObjectURL(image) : post?.image;

   useEffect(() => {
      if (post) {
         setTitle(post.title);
         setText(post.text);
      }
   }, [post]);

   const useCreateMutation = (url: string, method: "post" | "put") =>
      useMutation({
         mutationFn: async (payload: {
            title: string;
            image: File | string | undefined;
            text: string;
         }) => {
            const response = await axios({
               url,
               method,
               data: payload,
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            });
            return response.data;
         },
         onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["AboutUsPosts"] });
            toClose();
         },
         onError: (error) => {
            setMessage({ text: error.message, successful: false });
         },
      });

   const addPost = useCreateMutation("https://reqres.in/api/users", "post");
   const editPost = useCreateMutation(
      `https://reqres.in/api/users/${post?.id}`,
      "put"
   );

   const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      const payload = { title: title, image: image ?? post?.image, text: text };
      if (post) {
         editPost.mutate(payload);
      } else {
         addPost.mutate(payload);
      }
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
            <h2 className="text-center font-semibold text-lg">
               {post ? "Edit post" : "Add new post"}
            </h2>
            <div className="flex flex-col">
               <label htmlFor="slideImage">Post Image</label>
               <input
                  type="file"
                  required={!post}
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
               />
            </div>
            {imagePreview && (
               <img src={imagePreview} alt="postImage" className="w-96" />
            )}
            <div className="flex flex-col">
               <label>Title</label>
               <input
                  type="text"
                  defaultValue={post?.title}
                  required
                  placeholder="Enter title"
                  className="outline-none border p-1"
                  onChange={(e) => setTitle(e.target.value)}
               />
            </div>
            <div className="flex flex-col flex-1">
               <label>Text</label>
               <textarea
                  defaultValue={post?.text}
                  required
                  placeholder="Enter text"
                  className="outline-none border p-1 w-full min-h-40 h-full resize-none"
                  onChange={(e) => setText(e.target.value)}
               />
            </div>
            <div>
               {message && (
                  <p
                     className={`text-xl font-bold text-center ${message.successful ? "text-green-500" : "text-red-500"}`}
                  >
                     {message.text}
                  </p>
               )}
            </div>
            <div className="flex justify-center gap-4">
               <button type="button" onClick={() => toClose()}>
                  Cancel
               </button>
               <button type="submit">{post ? "Edit post" : "Add post"}</button>
            </div>
         </form>
      </div>
   );
}

export default PostForm;
