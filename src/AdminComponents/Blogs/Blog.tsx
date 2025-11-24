import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { BlogType } from "../../Types/BlogType";

interface BlogProps {
   blog: BlogType;
}

function Blog({ blog }: BlogProps) {
   const nav = useNavigate();
   return (
      <div className="border border-black w-full h-fit flex flex-col justify-center items-center p-2">
         <img
            src={blog.defaultImage}
            alt="blogImg"
            className="w-20 h-20 mr-2"
         />
         <div className="flex flex-col w-full">
            <h1 className="font-bold text-center">{blog.title}</h1>
            <p>{blog.summary}</p>
         </div>
         <div className="flex gap-2">
            <button
               onClick={() => nav("/workshop")}
               className="text-yellow-500"
            >
               <FontAwesomeIcon icon={faPen} />
            </button>
            <button className="text-red-600">
               <FontAwesomeIcon icon={faTrash} />
            </button>
         </div>
      </div>
   );
}
export default Blog;
