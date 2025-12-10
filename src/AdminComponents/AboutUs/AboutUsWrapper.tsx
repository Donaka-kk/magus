import PostForm from "./PostForm.tsx";
import deepEqual from "fast-deep-equal";
import PostsList from "./PostsList.tsx";

import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostType } from "../../Types/PostType";

interface AboutUsWrapperProps {
   posts: PostType[];
   toEditPosts: (newPosts: PostType[]) => void;
}

function AboutUsWrapper({ posts, toEditPosts }: AboutUsWrapperProps) {
   const [showPostForm, setShowPostForm] = useState<boolean>(false);
   const [postsArray, setPostsArray] = useState<PostType[]>(posts);
   const [selectedPost, setSelectedPost] = useState<PostType | undefined>(
      undefined
   );
   const nav = useNavigate();
   const hasChanged = !deepEqual(postsArray, posts);

   useEffect(() => {
      setPostsArray(posts);
   }, [posts]);
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
   const handleEditPost = useCallback(
      (post: PostType) => {
         setSelectedPost(post);
         setShowPostForm(true);
      },
      [setSelectedPost, setShowPostForm]
   );
   const handleRemovePost = useCallback(
      (index: number) => {
         const newArray = postsArray.filter((_, i) => i !== index);
         setPostsArray(newArray);
      },
      [postsArray]
   );

   return (
      <div className="flex flex-col py-4 px-2 md:px-4 gap-4 bg-background">
         <div className="flex justify-center w-full gap-2 md:gap-4 text-sm md:text-base">
            <button
               onClick={() => nav("/admin/panel")}
               className="border border-black p-2 rounded-lg shadow-lg active:shadow-inner active:scale-95"
            >
               Back to panel
            </button>
            <button
               onClick={() => setShowPostForm(true)}
               className="border border-black p-2 rounded-lg shadow-lg active:shadow-inner active:scale-95"
            >
               Add new post
            </button>
            <button
               onClick={handleDiscard}
               className={`border p-2 rounded-lg shadow-lg ${hasChanged ? "border-black text-black active:shadow-inner active:scale-95" : "border-gray-500 text-gray-500"}`}
               disabled={!hasChanged}
            >
               Discard Changes
            </button>
            <button
               onClick={() => toEditPosts(postsArray)}
               className={`border p-2 rounded-lg shadow-lg ${hasChanged ? "border-black text-black active:shadow-inner active:scale-95" : "border-gray-500 text-gray-500"}`}
               disabled={!hasChanged}
            >
               Save Changes
            </button>
         </div>
         {showPostForm && (
            <PostForm
               toClose={() => {
                  setSelectedPost(undefined);
                  setShowPostForm(false);
               }}
               post={selectedPost}
            />
         )}
         <div className="w-full">
            <PostsList
               posts={postsArray}
               handleMoveUp={handleMoveUp}
               handleMoveDown={handleMoveDown}
               handleEditPost={handleEditPost}
               handleRemovePost={handleRemovePost}
            />
         </div>
      </div>
   );
}

export default AboutUsWrapper;
