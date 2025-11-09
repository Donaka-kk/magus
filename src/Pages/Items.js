import { useEffect, useState } from "react";
import ItemsList from "../Components/AdminPanel/ItemList.js";
import axios from "axios";
import ApprovalPopUp from "../Components/Layout/ApprovalPopUp.js";

const dummyData = [
   {
      id: 123,
      name: "qwert",
      image: "https://paintings.pinotspalette.com/some-beach-tv.jpg?v=10033598",
      price: 100,
   },
   {
      id: 1234,
      name: "qw123ert",
      image: "https://www.dogseechew.in/storage/editor_61ef6aa53fc7d-joe-caione-qo-pif84vxg-unsplash-min.jpg",
      price: 200,
   },
   {
      id: 1235,
      name: "123124",
      image: "https://cdn.pixabay.com/photo/2021/10/01/15/02/flowers-6672715_1280.jpg",
      price: 300,
   },
   {
      id: 1236,
      name: "hjkghjk",
      image: "https://static.toiimg.com/photo/msid-66679081,width-96,height-65.cms",
      price: 400,
   },
];

function Items() {
   const [showPopUp, setShowPopUp] = useState(false);
   const [selectedItem, setSelectedItem] = useState(null);
   const [message, setMessage] = useState("");

   const handleDeleteItem = () => {
      if (!selectedItem) return;
      setShowPopUp(false);
      setMessage("successfully deleted");
   };

   useEffect(() => {
      const getData = async () => {
         try {
            // const data = await axios
            //    .post(
            //       "https://47cc28b5d9f6491c0e30d1fc16e1de93.serveo.net/api/v1/users/login",
            //       { username: "09111111111", password: "1" }
            //    )
            //    .then((response) => {
            //       return response;
            //    });
            // console.log(data);
            // return data;
            return 0;
         } catch (error) {
            console.log(error.message);
         }
      };
      getData();
   }, []);

   return (
      <div>
         <div>
            <p>{message}</p>
         </div>
         <ItemsList
            data={dummyData}
            setShowPopUp={setShowPopUp}
            setSelectedItem={setSelectedItem}
         />
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
