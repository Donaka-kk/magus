import {
  faStar,
  faStarHalfStroke,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as faEmptyStar,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Card2 = ({
  name,
  image,
  score,
  price,
  available,
  NO,
  sales,
  discount,
}) => {
  const nav = useNavigate();
  //
  const floatPart = score - Math.floor(score);
  const fullStars = Array.from({ length: score }, (_, index) => (
    // style={{ color: "#FFD43B" }}
    <FontAwesomeIcon key={index} icon={faStar} />
  ));
  const emptyStars = Array.from(
    { length: Math.floor(5 - score) },
    (_, index) => <FontAwesomeIcon key={index} icon={faEmptyStar} />
  );

  return (
    <div className="w-full rounded-2xl bg-gray-300">
      <div className="relative w-full h-5/12 px-4 py-2 flex justify-center">
        <img
          src={image}
          alt=""
          className="w-full sm:w-[80%] h-full object-cover"
        />
        {discount && (
          <div className="absolute top-2 right-4 w-14 h-14 bg-red-500 rounded-full flex justify-center items-center text-lg font-semibold">
            <FontAwesomeIcon icon={faTag} />
            {discount + "%"}
          </div>
        )}
      </div>
      <div className="h-7/12 flex flex-col justify-between px-5 text-sm sm:text-lg md:text-xl">
        <div className="h-full flex flex-col justify-around">
          <p className=" font-semibold">{name}</p>
          <div className="flex gap-3">
            <p className={`font-semibold ${discount && " line-through"}`}>
              ${price}
            </p>
            {discount && (
              <span className="ml-3 no-underline">
                {price - (discount * price) / 100}
              </span>
            )}
          </div>
          <p className="">
            {available ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#2e8f2c" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faCircleXmark}
                style={{ color: "#991515" }}
              />
            )}
            {available ? " Available" : " Unavailable"}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm sm:text-base gap-1">
            <span className=""> Sales : {sales}</span>
            <div>
              {fullStars}
              {floatPart > 0 ? (
                <FontAwesomeIcon icon={faStarHalfStroke} />
              ) : null}
              {emptyStars}
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={() => nav(`/product?NO=${NO}`)}
            className="bg-gray-300 border border-black px-3 py-1 rounded-md hover:bg-gray-500 active:scale-95 mb-2 text-sm sm:text-base"
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
