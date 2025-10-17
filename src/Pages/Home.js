import { useEffect, useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import Comments from "../Components/Comments/Comments";
import Discount from "../Components/Discounts/Discount";
//import { CustomerContext } from "../Context/Customer";

const Home = () => {
   //const { user } = CustomerContext();

   const carouselData = [
      {
         name: "daste bil",
         id: "345",
         image: "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww",
      },
      {
         name: "daste khar",
         id: "376",
         image: "https://media.gcflearnfree.org/ctassets/topics/246/share_flower_fullsize.jpg",
      },
      {
         name: "bilbilak",
         id: "311",
         image: "https://qph.cf2.quoracdn.net/main-qimg-ba8b216716993a583db507c3674ad133-lq",
      },
      {
         name: "daste tabar",
         id: "393",
         image: "https://deepai.org/static/images/cyberpunkdolphin.png",
      },
      {
         name: "teflis",
         id: "332",
         image: "https://th.bing.com/th/id/OIG.6FAdXQzRaUrN53Nayj7d",
      },
      {
         name: "tooraj",
         id: "376",
         image: "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg",
      },
   ];

   const [discountItems, setDiscountItems] = useState();
   const [carouselItems, setCarouselItems] = useState(carouselData);

   useEffect(() => {
      window.scrollTo(0, 0);
      const fetchCarouselData = async () => {
         setCarouselItems(carouselData);
         setDiscountItems(carouselData);
      };
      fetchCarouselData();
   }, []);

   return (
      <div className="h-full bg-backGround text-primary">
         <div className="w-full">
            {carouselItems && (
               <Carousel
                  data={carouselItems}
                  header={"Most Popular Products"}
               />
            )}
         </div>

         <div className="w-full flex flex-col items-center justify-center mt-5">
            <Discount data={discountItems} />
         </div>

         <div className="">
            <Comments />
         </div>
      </div>
   );
};

export default Home;
