import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Blog({ id, image, title, summary }) {
   const nav = useNavigate();
   return (
      <div className="border border-black w-full h-fit flex flex-row justify-center items-center p-2">
         <img src={image} alt="blogImg" className="w-20 h-20 mr-2" />
         <div className="flex flex-col w-full">
            <h3>{title}</h3>
            <p>{summary}</p>
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
