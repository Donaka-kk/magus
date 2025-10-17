import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Item({ name, image, price, id, setShowPopUp, setSelectedItem }) {
   const nav = useNavigate();

   return (
      <div className="border border-black w-full h-fit flex flex-row justify-center items-center p-2">
         <img src={image} alt="blogImg" className="w-20 h-20 mr-2" />
         <div className="flex flex-col w-full">
            <h3>{name}</h3>
            <p>{price}$</p>
         </div>
         <div className="flex gap-5 text-xl">
            <button
               onClick={() => nav(`/admin/panel/itemupsert?id=${id}`)}
               className="text-yellow-500"
            >
               <FontAwesomeIcon icon={faPen} />
            </button>
            <button
               onClick={() => {
                  setShowPopUp(true);
                  setSelectedItem(id);
               }}
               className="text-red-600"
            >
               <FontAwesomeIcon icon={faTrash} />
            </button>
         </div>
      </div>
   );
}
export default Item;
