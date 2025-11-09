import ItemsList from "../Components/AdminPanel/ItemList.js";
import ApprovalPopUp from "../Components/Layout/ApprovalPopUp.js";
import NotifyPopup from "../Components/Layout/NotifyPopUp.tsx";
import axios from "axios";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductSchemeType } from "../Types/ProductType.js";
import { CarouselDummyData } from "../Components/API/CarouselDummyData.tsx";

function Items() {
   const [showPopUp, setShowPopUp] = useState(false);
   const [selectedItem, setSelectedItem] = useState(null);
   const [notifyPopUp, setNotifyPopUp] = useState<string | null>();

   const handleDeleteItem = () => {
      if (!selectedItem) return;
      setShowPopUp(false);
      setNotifyPopUp("successfully deleted");
   };

   const { data } = useQuery({
      queryKey: ["AllProducts"],
      queryFn: async () => {
         const response = await axios.get<ProductSchemeType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         //change this to response before build
         return CarouselDummyData || response;
      },
   });

   return (
      <div>
         <div>
            {notifyPopUp && (
               <NotifyPopup
                  subject={notifyPopUp}
                  handleClosingPopUp={() => setNotifyPopUp(null)}
               />
            )}
         </div>
         {data && (
            <ItemsList
               data={data}
               setShowPopUp={setShowPopUp}
               setSelectedItem={setSelectedItem}
            />
         )}
         {showPopUp && (
            <ApprovalPopUp
               text="are you sure you want to delete this item ?"
               showPopUp={setShowPopUp}
               handleDeleteItem={handleDeleteItem}
            />
         )}
      </div>
   );
}
export default Items;
