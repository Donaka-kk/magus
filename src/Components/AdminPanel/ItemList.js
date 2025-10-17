import Item from "./Item";
import { useNavigate } from "react-router-dom";

function ItemsList({ data, setShowPopUp, setSelectedItem }) {
   const nav = useNavigate();

   return (
      <div className="flex flex-col justify-center items-center gap-2 p-2">
         {data.map((item) => {
            return (
               <Item
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  setShowPopUp={setShowPopUp}
                  setSelectedItem={setSelectedItem}
               />
            );
         })}
         <div className="flex gap-2">
            <button
               onClick={() => nav("/admin/panel")}
               className=" border border-black px-2 py-1"
            >
               Back to panel
            </button>
            <button
               onClick={() => nav("/admin/panel/itemupsert")}
               className=" border border-black px-2 py-1"
            >
               Add Item
            </button>
         </div>
      </div>
   );
}
export default ItemsList;
