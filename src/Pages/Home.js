import { useEffect, useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import Comments from "../Components/Comments/Comments";
import Discount from "../Components/Discounts/Discount";
import Introduction from "../Components/Introduction/Introduction";

// import bgImage1 from "../utilities/horse1.jpg";
// import bgImage2 from "../utilities/horse2.avif";
// import bgImage3 from "../utilities/horse3.avif";
// import bgImage4 from "../utilities/horse4.avif";
// import bgImage5 from "../utilities/horse5.png";
// import bgImage6 from "../utilities/horse6.avif";
import bgImage7 from "../utilities/horse7.avif";
import supabase from "../SupaBase/SupaBase";
import { useNavigate } from "react-router-dom";
// import bgImage8 from "../utilities/horse8.avif";

const Home = () => {
  const nav = useNavigate();

  // const carouselData = [
  //   {
  //     name: "daste bil",
  //     id: "345",
  //     image:
  //       "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww",
  //   },
  //   {
  //     name: "daste khar",
  //     id: "376",
  //     image:
  //       "https://media.gcflearnfree.org/ctassets/topics/246/share_flower_fullsize.jpg",
  //   },
  //   {
  //     name: "bilbilak",
  //     id: "311",
  //     image:
  //       "https://qph.cf2.quoracdn.net/main-qimg-ba8b216716993a583db507c3674ad133-lq",
  //   },
  //   {
  //     name: "daste tabar",
  //     id: "393",
  //     image: "https://deepai.org/static/images/cyberpunkdolphin.png",
  //   },
  //   {
  //     name: "teflis",
  //     id: "332",
  //     image: "https://th.bing.com/th/id/OIG.6FAdXQzRaUrN53Nayj7d",
  //   },
  //   {
  //     name: "tooraj",
  //     id: "376",
  //     image:
  //       "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg",
  //   },
  // ];

  const [discountItems, setDiscountItems] = useState();
  const [carouselItems, setCarouselItems] = useState();

  // const addProduct = async () => {
  //   await supabase().from("Popular").insert({
  //     name: "",
  //     image: "",
  //     score: 2,
  //     price: 200,
  //     available: true,
  //     NO: 4123,
  //     sales: 222,
  //     discount: null,
  //   });
  // };
  // <button
  //   onClick={() => {
  //     addProduct();
  //   }}
  // >
  //   ADD PRODUCT
  // </button>;

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchCarouselData = async () => {
      const { data } = await supabase().from("Product").select("*");
      setCarouselItems(data.slice(4, 10));
    };
    fetchCarouselData();

    const fetchData = async () => {
      const { data } = await supabase().from("Discounts").select("*");
      setDiscountItems(data);
    };
    fetchData();
  }, []);

  return (
    <div className="h-full">
      <div className="">
        {/* 3 , 6 , 7 , 8 */}
        {/* sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]  */}
        <img
          src={bgImage7}
          alt="backgroundImage"
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
      </div>

      <div className="w-full flex justify-center mt-5">
        <Introduction />
      </div>

      <div className="w-full my-10">
        <h1 className="text-center font-bold text-3xl my-3">
          Most Popular Products
        </h1>
        {carouselItems && <Carousel data={carouselItems} />}
        <div className="text-center">
          <button
            onClick={() => nav("/shop")}
            className="border border-black rounded-sm px-3 py-1"
          >
            Show All Products
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-5">
        <h1 className="text-center font-bold text-3xl my-5">
          Special Offers For High Rating Products
        </h1>
        <Discount data={discountItems} />
      </div>

      <div className="my-10">
        <Comments />
      </div>
    </div>
  );
};

export default Home;
