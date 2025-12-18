import Carousel from "../Components/Carousel/Carousel.tsx";
import Comments from "../Components/Comments/Comments";
import axios from "axios";
import SpecialOffers from "../Components/SpecialOffers/SpecialOffers.tsx";

import { CarouselDummyData } from "../Components/API/CarouselDummyData.tsx";
import { SpecialOffersDummyData } from "../Components/API/SpecialOffersDummyData.tsx";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../Types/ProductType.tsx";
import { ProductSchemeType } from "../Types/ProductType.tsx";

const Home = () => {
   const { data: carouselData, isPending: carouselDataPending } = useQuery<
      ProductType[]
   >({
      queryKey: ["carouselData"],
      queryFn: async () => {
         const response = await axios.get<ProductType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         //change this to response before build
         return CarouselDummyData || response;
      },
   });

   const { data: SpecialOffersData, isPending: SpecialOffersDataPending } =
      useQuery<ProductSchemeType[]>({
         queryKey: ["discountData"],
         queryFn: async () => {
            const response = await axios.get<ProductSchemeType[]>(
               "https://reqres.in/api/users/1",
               {
                  headers: {
                     "x-api-key": process.env.REACT_APP_REQRES_KEY,
                  },
               }
            );
            //change this to response before build
            return SpecialOffersDummyData || response;
         },
      });

   return (
      <div className="h-full bg-backGround text-primary bg-background">
         <div className="w-full p-4">
            {!carouselDataPending && <Carousel data={carouselData ?? []} />}
         </div>

         <div className="p-4">
            {!SpecialOffersDataPending && (
               <SpecialOffers SpecialOffers={SpecialOffersData ?? []} />
            )}
         </div>
         <div className="">
            <Comments />
         </div>
      </div>
   );
};

export default Home;
