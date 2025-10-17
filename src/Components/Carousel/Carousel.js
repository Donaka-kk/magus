import React, { useState, useEffect } from "react";
import Card1 from "./Card1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Carousel = ({ data , header  }) => {
  const nav = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState();
  const [availableBullet, setAvailableBullet] = useState();

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % (availableBullet + 1);
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex + availableBullet) % (availableBullet + 1);
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const HandleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(100);
        setAvailableBullet(data.length - 1);
        setCurrentIndex(0);
      } else if (window.innerWidth < 1024) {
        setCardWidth(49.5);
        setAvailableBullet(data.length - 2);
        setCurrentIndex(0);
      } else if (window.innerWidth < 1920) {
        setCardWidth(32.666);
        setAvailableBullet(data.length - 3);
        setCurrentIndex(0);
      }
    };
    if (window.innerWidth < 640) {
      setCardWidth(100);
      setAvailableBullet(data.length - 1);
    } else if (window.innerWidth < 1024) {
      setCardWidth(49.5);
      setAvailableBullet(data.length - 2);
    } else {
      setCardWidth(32.666);
      setAvailableBullet(data.length - 3);
    }

    window.addEventListener("resize", HandleResize);
    return () => {
      window.removeEventListener("resize", HandleResize);
    };
  }, [data.length]);
  //640 - 768 - 1024 - 1536

  return (
    <div>
      <h1 className="text-center font-bold text-3xl py-5">
        {header}
      </h1>
      <div className="flex justify-between items-center relative pb-10 px-2 gap-2">
        <button
          className="relative w-12 h-12 text-3xl // lg:w-16 lg:h-16 lg:text-5xl  bg-gray-800 text-white rounded-full"
          onClick={prevSlide}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-[1%]"
            style={{
              transform: `translateX(-${
                currentIndex * cardWidth + currentIndex
              }%)`,
            }}
          >
            {data &&
              data.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                  style={{ flex: `0 0 ${cardWidth}%` }}
                >
                  <Card1
                    name={slide.name}
                    image={slide.image}
                    score={slide.score}
                    price={slide.price}
                    available={slide.available}
                    NO={slide.NO}
                    sales={slide.sales}
                    discount={slide.discount}
                  />
                </div>
              ))}
          </div>
        </div>

        <button
          className="relative w-12 h-12 text-3xl // lg:w-16 lg:h-16 lg:text-5xl  bg-gray-800 text-white rounded-full"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>

        <div className="absolute bottom-4 left-0 w-full flex justify-center">
          {data &&
            data.map((_, index) => (
              <button
                key={index}
                className={`mx-1 w-3 h-3 rounded-full focus:outline-none ${
                  index === currentIndex ? "bg-secondary" : "bg-gray-400"
                } ${index > availableBullet && " hidden "}`}
                onClick={() => goToSlide(index)}
              />
            ))}
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => nav("/shop")}
          className="border border-black rounded-sm px-3 py-1"
        >
          Show All Products
        </button>
      </div>
    </div>
  );
};

export default Carousel;
