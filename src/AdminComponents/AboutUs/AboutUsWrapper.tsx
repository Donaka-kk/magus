import Post from "./Post.tsx";
import PostForm from "./PostForm.tsx";
import deepEqual from "fast-deep-equal";

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostType } from "../../Types/PostType";

interface AboutUsWrapperProps {
   posts: PostType[];
   toEditPosts: (newPosts: PostType[]) => void;
}

function AboutUsWrapper({ posts, toEditPosts }: AboutUsWrapperProps) {
   console.log("AboutUsWrapper");
   const [newPostForm, setNewPostForm] = useState<boolean>(false);
   const [postsArray, setPostsArray] = useState<PostType[]>(posts);
   const nav = useNavigate();
   const hasChanged = !deepEqual(postsArray, posts);

   const handleDiscard = useCallback(() => {
      setPostsArray(posts);
   }, [posts]);
   const handleMoveUp = useCallback(
      (index: number) => {
         if (index === 0) return;
         const newArray = [...postsArray];
         [newArray[index - 1], newArray[index]] = [
            newArray[index],
            newArray[index - 1],
         ];
         setPostsArray(newArray);
      },
      [postsArray]
   );
   const handleMoveDown = useCallback(
      (index: number) => {
         if (index === postsArray.length - 1) return;
         const newArray = [...postsArray];
         [newArray[index + 1], newArray[index]] = [
            newArray[index],
            newArray[index + 1],
         ];
         setPostsArray(newArray);
      },
      [postsArray]
   );
   const handleRemoveSlide = useCallback(
      (index: number) => {
         const newArray = postsArray.filter((_, i) => i !== index);
         setPostsArray(newArray);
      },
      [postsArray]
   );

   return (
      <div className="flex flex-col p-2 md:p-4 gap-4">
         <div className="flex justify-center w-full gap-4">
            <button
               onClick={() => nav("/admin/panel")}
               className="border border-black p-1 rounded-lg"
            >
               Back to panel
            </button>
            <button
               onClick={() => setNewPostForm(true)}
               className="border border-black p-1 rounded-lg"
            >
               Add new post
            </button>
            <button
               onClick={handleDiscard}
               className={`border p-1 rounded-lg ${hasChanged ? "border-black text-black" : "border-gray-500 text-gray-500"}`}
               disabled={!hasChanged}
            >
               Discard Changes
            </button>
            <button
               onClick={() => toEditPosts(postsArray)}
               className={`border p-1 rounded-lg ${hasChanged ? "border-black text-black" : "border-gray-500 text-gray-500"}`}
               disabled={!hasChanged}
            >
               Save Changes
            </button>
         </div>
         {newPostForm && <PostForm toClose={() => setNewPostForm(false)} />}
         <div className="w-full flex flex-col gap-4">
            {postsArray.map((post, index) => (
               <Post
                  key={index}
                  post={post}
                  index={index}
                  moveUp={handleMoveUp}
                  moveDown={handleMoveDown}
                  removePost={handleRemoveSlide}
               />
            ))}
         </div>
      </div>
   );
}

export default AboutUsWrapper;
