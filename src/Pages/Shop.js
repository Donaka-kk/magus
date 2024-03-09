// import bgImage1 from "../utilities/horse1.jpg";
// import bgImage2 from "../utilities/horse2.avif";
// import bgImage3 from "../utilities/horse3.avif";
// import bgImage4 from "../utilities/horse4.avif";
// import bgImage5 from "../utilities/horse5.png";
// import bgImage6 from "../utilities/horse6.avif";
import bgImage7 from "../utilities/horse7.avif";
// import bgImage8 from "../utilities/horse8.avif";

import supabase from "../SupaBase/SupaBase";
import Categories from "../Components/Categories/Categories";
import Card2 from "../Components/Carousel/Card2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Shop = () => {
  const [category, setCategory] = useState("All");
  const [items, setItems] = useState();
  const [page, setPage] = useState(0);
  const [disableNextBtn, setDisableNextBtn] = useState(false);
  const [disablePrevBtn, setDisablePrevBtn] = useState(true);
  const fetchData = async () => {
    if (category === "All") {
      const { data } = await supabase().from("Product").select("*");
      setItems(data);
    } else if (category === "Special Offers") {
      const { data } = await supabase().from("Discounts").select("*");
      setItems(data);
    } else {
      const { data } = await supabase()
        .from("Product")
        .select("*")
        .eq("category", category);
      setItems(data);
    }
  };

  const nextPage = () => {
    if ((page + 1) * 6 < items.length) {
      window.scrollTo(0, 400);
      const newPage = page + 1;
      setPage(newPage);
      setDisablePrevBtn(false);
    } else {
      setDisableNextBtn(true);
    }
  };
  const prevPage = () => {
    if (page * 6 !== 0) {
      window.scrollTo(0, 400);
      const newPage = page - 1;
      setPage(newPage);
      setDisableNextBtn(false);
    } else {
      setDisablePrevBtn(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, [category]);

  return (
    <div className="">
      <div className="">
        {/* 3 , 6 , 7 , 8 */}
        {/* sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]  */}
        <img
          src={bgImage7}
          alt="backgroundImage"
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
      </div>

      <div className="relative flex flex-row p-5 gap-5">
        <div className="w-full flex flex-col justify-between">
          <div className="flex flex-col md:flex-row font-semibold text-lg rounded-md bg-gray-400 py-2">
            <p className="w-full flex justify-center text-center md:w-1/2 md:text-start">
              Total Products In This Category :{items && items.length}
            </p>
            <p className="w-full flex justify-center text-center md:w-1/2 md:text-start">
              Selected Category :{category}
            </p>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2">
            {items &&
              items.slice(page * 6, (page + 1) * 6).map((element, index) => {
                return (
                  <Card2
                    key={index}
                    name={element.name}
                    price={element.price}
                    image={element.image}
                    score={element.score}
                    available={element.available}
                    NO={element.NO}
                    sales={element.sales}
                    discount={element.discount}
                  />
                );
              })}
          </div>
          <div className="w-full flex justify-center gap-2 mt-3">
            <button
              onClick={() => prevPage()}
              className="px-1 border border-black rounded-sm active:scale-95"
              disabled={disablePrevBtn}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <p>
              Page {page + 1} from {items ? Math.ceil(items.length / 6) : 1}
            </p>
            <button
              onClick={() => nextPage()}
              className="px-1 border border-black rounded-sm active:scale-95"
              disabled={disableNextBtn}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="sticky top-10 h-fit flex flex-col gap-5">
          <Categories toChangeCategory={setCategory} />
          <button
            onClick={() => setCategory("Special Offers")}
            className="px-2 py-2 bg-red-500 rounded-full"
          >
            SPECIAL OFFERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
