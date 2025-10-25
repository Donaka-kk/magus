import Carousel from "../Components/Carousel/Carousel";
import Comments from "../Components/Comments/Comments";
import Discount from "../Components/Discounts/Discount";
import { CarouselDummyData } from "../Components/API/CarouselDummyData.tsx";
import { DiscountDummyData } from "../Components/API/DiscountDummyData.tsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
   const { data: carouselData, isPending: carouselDataPending } = useQuery({
      queryKey: ["carouselData"],
      queryFn: async () => {
         const response = await axios.get("https://reqres.in/api/users/1", {
            headers: {
               "x-api-key": "reqres-free-v1",
            },
         });
         //change this to response before build
         return CarouselDummyData;
      },
   });

   const { data: discountData, isPending: discountDataPending } = useQuery({
      queryKey: ["discountData"],
      queryFn: async () => {
         const response = await axios.get("https://reqres.in/api/users/1", {
            headers: {
               "x-api-key": "reqres-free-v1",
            },
         });
         //change this to response before build
         return DiscountDummyData;
      },
   });

   return (
      <div className="h-full bg-backGround text-primary">
         <div className="w-full">
            {!carouselDataPending && (
               <Carousel data={carouselData} header={"Most Popular Products"} />
            )}
         </div>

         <div className="w-full flex flex-col items-center justify-center mt-5">
            {!discountDataPending && <Discount data={discountData} />}
         </div>

         <div className="">
            <Comments />
         </div>
      </div>
   );
};

export default Home;
