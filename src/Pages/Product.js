// import bgImage1 from "../utilities/horse1.jpg";
// import bgImage2 from "../utilities/horse2.avif";
// import bgImage3 from "../utilities/horse3.avif";
// import bgImage4 from "../utilities/horse4.avif";
// import bgImage5 from "../utilities/horse5.png";
// import bgImage6 from "../utilities/horse6.avif";
import bgImage7 from "../utilities/horse7.avif";
// import bgImage8 from "../utilities/horse8.avif";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../SupaBase/SupaBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

const Product = () => {
  const [params] = useSearchParams();
  const [item, setItem] = useState();
  const [loading, setLoading] = useState("true");
  const nav = useNavigate();

  let floatPart;
  let fullStars;
  let emptyStars;

  if (item) {
    floatPart = item[0].score - Math.floor(item[0].score);
    fullStars = Array.from({ length: item[0].score }, (_, index) => (
      // style={{ color: "#FFD43B" }}
      <FontAwesomeIcon key={index} icon={faStar} />
    ));
    emptyStars = Array.from(
      { length: Math.floor(5 - item[0].score) },
      (_, index) => <FontAwesomeIcon key={index} icon={faEmptyStar} />
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const NO = params.get("NO");
    const test = async () => {
      const { data } = await supabase()
        .from("Product")
        .select("*")
        .eq("NO", NO);
      setItem(data);
      setLoading(false);
    };
    test();
  }, [params]);

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

      <div className="relative flex flex-col md:flex-row p-5 gap-5">
        <div className="w-full flex flex-col justify-between">
          {loading ? (
            <div className="w-full flex flex-col justify-around items-center gap-5 p-10">
              <h1 className="text-4xl font-bold animate-spin">
                <FontAwesomeIcon icon={faSpinner} />
              </h1>
              <h1 className="text-4xl font-bold">Loading ...</h1>
              <h1 className="text-2xl font-semibold">Please wait !</h1>
            </div>
          ) : (
            <div>
              {item ? (
                <div className="w-full flex flex-col justify-between items-center border border-black rounded-md">
                  <div className="w-full flex flex-col lg:flex-row justify-between p-5">
                    <div className="flex flex-col lg:flex-row items-center">
                      <img
                        src={item[0].image}
                        alt=""
                        className="w-72 h-72 md:w-80 md:h-80 xl:w-96 xl:h-96"
                      />
                      <div className="flex flex-col p-5 gap-5 text-xl lg:text-xl xl:text-2xl  font-semibold">
                        <p>{item[0].name}</p>
                        <p>Price : ${item[0].price}</p>
                        <p>Category : {item[0].category}</p>
                        <p>Product NO : {item[0].NO}</p>
                        <p>
                          Discount :{" "}
                          {item[0].discount === null
                            ? "None"
                            : item[0].discount + "%"}
                        </p>
                        <div>{item[0].available}</div>
                      </div>
                    </div>
                    <div className="flex flex-col border-2 border-black rounded-md h-fit p-2">
                      <div className="text-center">
                        {fullStars}
                        {floatPart > 0 ? (
                          <FontAwesomeIcon icon={faStarHalfStroke} />
                        ) : null}
                        {emptyStars}
                      </div>
                      <p className="text-center">Score : {item[0].score}</p>
                      <div className="flex gap-3 justify-between items-center">
                        <p>quality</p>
                        <div className="relative w-20 h-2 bg-gray-600">
                          <div
                            className={`absolute h-full bg-yellow-400`}
                            style={{ width: `${item[0].score * 20}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex gap-3 justify-between items-center">
                        <p>conformity</p>
                        <div className="relative w-20 h-2 bg-gray-600">
                          <div
                            className={`absolute h-full bg-yellow-400`}
                            style={{ width: `${item[0].score * 20}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex gap-3 justify-between items-center">
                        <p>intact</p>
                        <div className="relative w-20 h-2 bg-gray-600">
                          <div
                            className={`absolute h-full bg-yellow-400`}
                            style={{ width: `${item[0].score * 20}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex gap-3 justify-between items-center">
                        <p>price</p>
                        <div className="relative w-20 h-2 bg-gray-600">
                          <div
                            className={`absolute h-full bg-yellow-400`}
                            style={{ width: `${item[0].score * 20}%` }}
                          />
                        </div>
                      </div>
                      <p className="text-center">
                        Total Sales : {item[0].sales}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-10 mb-5">
                    <button
                      onClick={() => nav("/shop")}
                      className="border-2 border-black rounded-md px-2 py-1"
                    >
                      Back To Shop
                    </button>
                    <button
                      onClick={() => alert("You are not logged in !")}
                      className="border-2 border-black rounded-md px-2 py-1"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col justify-around items-center gap-5 p-10">
                  <h1 className="text-7xl font-bold">404</h1>
                  <h1 className="text-4xl font-semibold">
                    Product Not Found !
                  </h1>
                  <button
                    onClick={() => nav("/shop")}
                    className="px-4 py-2 border-2 border-black rounded-md"
                  >
                    Go to Shop
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="sticky top-10 h-fit flex flex-col gap-5">
          <div className="flex flex-col justify-center items-center w-full text-sm md:w-60 md:text-base xl:w-72 xl:text-lg gap-4 border-2 border-black rounded-md p-4">
            <p className="w-full text-center">You haven't logged in yet !</p>
            <button
              onClick={() => nav("/login")}
              className="px-2 py-1 border-2 border-black rounded-md"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
