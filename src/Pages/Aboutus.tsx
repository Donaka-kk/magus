import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AboutUsDummyData } from "../Components/API/AboutUsDummyData.tsx";
import { useQuery } from "@tanstack/react-query";
import LoadingComponent from "../Components/Layout/LoadingComponent.js";
import AboutUsPost from "../Components/AboutUsPost/AboutUsPost.tsx";

const Aboutus = () => {
   const nav = useNavigate();

   const { data, isPending } = useQuery({
      queryKey: ["posts"],
      staleTime: Infinity,
      queryFn: async () => {
         await axios.get("https://reqres.in/api/users/1", {
            headers: {
               "x-api-key": "reqres-free-v1",
            },
         });
         //change this before build
         return AboutUsDummyData;
      },
   });

   return (
      <div>
         <div className="text-center">
            <h1 className="text-4xl font-bold my-10">About Us</h1>
         </div>
         {isPending ? (
            <LoadingComponent failed={false} />
         ) : (
            <>
               <div className="flex flex-col justify-center items-center gap-24 p-5 mb-3">
                  {data?.map((post, index) => {
                     return (
                        <AboutUsPost key={index} post={post} index={index} />
                     );
                  })}
               </div>
               <div className="text-center mb-8">
                  <button
                     onClick={() => nav("/contact")}
                     className="border-2 border-black rounded-sm px-3 py-1"
                  >
                     Feel Free To Contact Us
                  </button>
               </div>
            </>
         )}
      </div>
   );
};

export default Aboutus;
