import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faShapes,
   faFileLines,
   faRightFromBracket,
   faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../Context/User";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
   const { updateUser } = UserContext();
   const nav = useNavigate();

   const handleLogOut = () => {
      sessionStorage.clear("user");
      updateUser(null);
      nav("/admin");
   };

   return (
      <div className="relative">
         <div className="border border-black p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6">
            <button
               onClick={() => nav("items")}
               className="w-full h-full active:scale-95 border border-black p-2 hover:scale-105"
            >
               <FontAwesomeIcon icon={faShapes} />

               <h1>Items</h1>
            </button>
            <button
               onClick={() => nav("blogs")}
               className="w-full h-full active:scale-95 border border-black p-2 hover:scale-105"
            >
               <FontAwesomeIcon icon={faFileLines} />
               <h1>Blogs</h1>
            </button>
            <button
               onClick={() => nav("")}
               className="w-full h-full active:scale-95 border border-black p-2 hover:scale-105"
            >
               <FontAwesomeIcon icon={faChartLine} />
               <h1>sales</h1>
            </button>
            <button
               onClick={() => handleLogOut("addItem")}
               className="w-full h-full active:scale-95 border border-black p-2 hover:scale-105"
            >
               <FontAwesomeIcon icon={faRightFromBracket} />
               <h1>Log out</h1>
            </button>
         </div>
      </div>
   );
}
export default AdminPanel;
