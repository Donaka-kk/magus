import { useSearchParams } from "react-router-dom";
import LoadingComponent from "../Components/Layout/LoadingComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemForm from "../Components/ItemUpsert/ItemForm";

function ItemUpsert() {
   const [searchParams] = useSearchParams();
   const [isLoading, setIsLoading] = useState(false);
   const [loadMessage, setLoadMessage] = useState();
   const [item, setItem] = useState({
      name: "",
      price: "",
      image: "",
      category: "",
      colors: [],
      sizez: [],
   });

   const [allCategories, setAllCategories] = useState([]);
   const param = searchParams.get("id");

   const handleAdd = async (item) => {
      try {
         const response = await axios.post(
            "https://reqres.in/api/login",
            // item
            {
               username: item.name,
               email: item.price,
               password: item.category,
            },
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         return response;
      } catch (error) {
         setLoadMessage({ successfull: false, text: error.message });
      }
   };

   const handleEdit = async (item) => {
      try {
         console.log(item);
         const response = await axios.post(
            "https://reqres.in/api/login",
            // item
            {
               username: item.name,
               email: item.price,
               password: item.category,
            },
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         return response;
      } catch (error) {
         setLoadMessage({ successfull: false, text: error.message });
      }
   };

   useEffect(() => {
      const getData = async () => {
         //get all categories data
         try {
            await axios
               .get("https://reqres.in/api/users", {
                  headers: {
                     "x-api-key": "reqres-free-v1",
                  },
               })
               .then((response) => {
                  if (response.status <= 200) {
                     setAllCategories(response.data.data);
                  } else {
                     setLoadMessage({
                        successfull: false,
                        text: "Failed to load categories",
                     });
                  }
               });
         } catch (error) {
            setLoadMessage(error);
         }
         //get item data
         if (param !== null) {
            setIsLoading(true);
            try {
               await axios
                  .get("https://reqres.in/api/users", {
                     headers: {
                        "x-api-key": "reqres-free-v1",
                     },
                  })
                  .then((response) => {
                     if (response.status <= 200) {
                        setItem({
                           name: "an",
                           price: "100$",
                           image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg",
                           category: "George",
                           colors: ["#c1e663", "#63e6dc", "#e33838"],
                           sizes: ["sm", "lg"],
                        });
                        setIsLoading(false);
                     }
                  });
            } catch (error) {
               setLoadMessage(error);
            }
         }
      };
      getData();
   }, [param]);

   return (
      <div className="min-w-screen min-h-screen flex justify-center items-center md:p-5">
         {isLoading ? (
            <LoadingComponent />
         ) : (
            <div className="flex justify-center items-center w-full md:w-7/12">
               <ItemForm
                  item={item}
                  allCategories={allCategories}
                  param={param}
                  loadMessage={loadMessage}
                  handleAdd={handleAdd}
                  handleEdit={handleEdit}
               />
            </div>
         )}
      </div>
   );
}
export default ItemUpsert;
