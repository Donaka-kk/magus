import { PostType } from "../../Types/PostType.tsx";
import {
   faChevronDown,
   faChevronUp,
   faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

interface PostProps {
   post: PostType;
   index: number;
   moveUp: (index: number) => void;
   moveDown: (index: number) => void;
   removePost: (index: number) => void;
}

function Post({ post, index, moveUp, moveDown, removePost }: PostProps) {
   console.log("Post");
   return (
      <div className="flex flex-col md:flex-row border border-black p-2 gap-2">
         <img
            src={post.image}
            alt="heroSectionSlide"
            className="min-h-52 max-h-52 flex-1 md:max-w-60 md:min-w-60 object-cover"
         />
         <div>
            <p className="font-semibold text-lg">{post.title}</p>
            <p className="line-clamp-3">{post.text}</p>
         </div>

         <div className="flex flex-row md:flex-col justify-center gap-2 flex-none w-full md:w-7">
            <button
               onClick={() => removePost(index)}
               className="text-2xl text-red-600"
            >
               <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <button
               onClick={() => moveUp(index)}
               className="border border-black w-7 aspect-square rounded-full"
            >
               <FontAwesomeIcon icon={faChevronUp} />
            </button>

            <button
               onClick={() => moveDown(index)}
               className="border border-black w-7 aspect-square rounded-full"
            >
               <FontAwesomeIcon icon={faChevronDown} />
            </button>
         </div>
      </div>
   );
}

export default memo(Post);
