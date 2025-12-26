import { CommentType } from "../../Types/CommentType";
import RatingStars from "../Rating/RatingStars.tsx";

interface CommentProps {
   comment: any;
}

function Comment({ comment }: CommentProps) {
   return (
      <div className="flex gap-2 p-2">
         <img
            src={comment.authorImage}
            alt={"user-image"}
            className="w-20 h-20 rounded-full"
         />
         <div className="w-full flex flex-col pt-2">
            <div className="flex justify-between">
               <p className="font-semibold text-lg">{comment.authorFullName}</p>
               <RatingStars score={comment.AllProductsCommentsScores[0]} />
            </div>
            <div className="flex gap-2 pl-2 text-gray-500">
               <p className="">{comment.time}</p>
               <p className="">{comment.date}</p>
            </div>
            <div>
               <p className="pl-2">{comment.message}</p>
            </div>
         </div>
      </div>
   );
}
export default Comment;
