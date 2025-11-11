import { useNavigate, useSearchParams } from "react-router-dom";
import LoadingComponent from "../Components/Layout/LoadingComponent";
import { useEffect, useState } from "react";
import axios from "axios";

function ItemUpsert() {
   const [searchParams] = useSearchParams();
   const [isLoading, setIsLoading] = useState(false);

   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [image, setImage] = useState("");

   const param = searchParams.get("id");
   const nav = useNavigate();

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log({
         name: name,
         price: price,
         image: image,
      });
   };

   useEffect(() => {
      const getData = () => {
         if (param !== null) {
            setIsLoading(true);
            try {
               const request = axios
                  .get("https://reqres.in/api/users/1", {
                     headers: {
                        "x-api-key": "reqres-free-v1",
                     },
                  })
                  .then((response) => {
                     if (response.status <= 200) {
                        setName("an");
                        setPrice("100$");
                        setImage("123");
                        setIsLoading(false);
                     }
                  });
               return request;
            } catch (error) {
               console.log(error);
            }
         }
      };
      getData();
   }, [param]);

   return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
         {isLoading ? (
            <LoadingComponent />
         ) : (
            <>
               <form
                  onSubmit={(event) => handleSubmit(event)}
                  className="flex flex-col w-10/12 p-4 gap-2 border border-black "
               >
                  <div className="w-full flex justify-center items-center">
                     <h1>{param ? "Edit item" : "Add item"}</h1>
                  </div>
                  <label>name</label>
                  <input
                     onChange={(e) => {
                        setName(e.target.value);
                     }}
                     defaultValue={name}
                     className="w-full border border-black p-1"
                  />
                  <label>price</label>
                  <input
                     onChange={(e) => {
                        setPrice(e.target.value);
                     }}
                     defaultValue={price}
                     className="w-full border border-black p-1"
                  />
                  <label>image</label>
                  <input
                     onChange={(e) => {
                        setImage(e.target.value);
                     }}
                     defaultValue={image}
                     className="w-full border border-black p-1"
                  />
                  <div className="w-full flex justify-center items-center gap-2 p-2">
                     <button
                        type="button"
                        className="px-2 py-1 border border-black w-fit h-fit"
                        onClick={() => nav("/admin/panel/items")}
                     >
                        Cancel
                     </button>
                     <button
                        type="submit"
                        className="px-2 py-1 border border-black w-fit h-fit"
                     >
                        Submit
                     </button>
                  </div>
               </form>
            </>
         )}
      </div>
   );
}
export default ItemUpsert;
