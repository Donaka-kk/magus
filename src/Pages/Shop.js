import Categories from "../Components/Categories/Categories";
import ShowCase from "../Components/ShowCase/ShowCase";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingComponent from "../Components/Layout/LoadingComponent";

const dummyCategories = [
   "All",
   "Category1",
   "Category2",
   "Category3",
   "Category4",
   "Category5",
   "Category6",
   "Special Offers",
];
const dummyItems = [
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "1",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "2",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "3",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "4",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "5",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "6",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "7",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "8",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "9",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "10",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "11",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "12",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "13",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "14",
      sales: "1000",
      discount: "10",
   },
   {
      name: "ali",
      price: "2",
      image: "https://kryegjyshataboterorebektashiane.org/wp-content/uploads/2021/05/hz-ali-2-1.jpg",
      score: "4.5",
      available: "available",
      id: "15",
      sales: "1000",
      discount: "10",
   },
];

const Shop = () => {
   const [items, setItems] = useState(null);
   const [category, setCategory] = useState("All");
   const [searchedText, setSearchedText] = useState("");
   const [error, setError] = useState(null);
   //const { user } = CustomerContext();

   const handleSearch = (searchText) => {
      setSearchedText(searchText);
      console.log("handle Search");
   };
   const handleChangeCategory = (newCategory) => {
      if (newCategory !== category) {
         setCategory(newCategory);
         // fetchData(newCategory);
         console.log("change category");
      }
   };

   const fetchData = async (category, searchText) => {
      try {
         await axios
            .get("https://reqres.in/api/unknown", {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            })
            .then((response) => {
               setTimeout(() => {
                  // setData(response.data.data);
                  setItems(dummyItems);
               }, 2000);
            });
         //setData(response.data.data)
      } catch (error) {
         setError(error.message);
      }
   };

   useEffect(() => {
      fetchData(category, searchedText);
   }, [category, searchedText, fetchData]);

   return (
      <div>
         <div className="relative flex flex-row p-5 gap-5">
            <div className="w-full flex flex-col justify-between">
               <div className="flex flex-col md:flex-row font-semibold text-sm md:text-base lg:text-lg rounded-md bg-gray-400 py-2">
                  <p className="w-full flex justify-center text-center md:w-1/2 md:text-start">
                     Selected Category :{category}
                  </p>
                  <p className="w-full flex justify-center text-center md:w-1/2 md:text-start">
                     Total Products In This Category :{items?.length ?? 0}
                  </p>
               </div>
               {items ? (
                  <ShowCase items={items} error={error} />
               ) : (
                  <LoadingComponent failed={error} />
               )}
            </div>
            <div className="sticky top-28 h-fit flex flex-col gap-5 w-2/5 text-sm md:w-2/6 md:text-base lg:w-3/12 lg:text-lg">
               <Categories
                  categories={dummyCategories}
                  toChangeCategory={handleChangeCategory}
                  toHandleSearch={handleSearch}
               />
            </div>
         </div>
      </div>
   );
};

export default Shop;
