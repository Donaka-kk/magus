import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../utilities/logo-no-background.webp";

const NavBar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const closeSideNav = () => {
    setShowSideNav(false);
  };
  const nav = useNavigate();

  return (
    <div className="w-full h-full flex flex-row items-center justify-between ">
      <div className="flex items-center ml-[10%] py-4 gap-5 text-2xl">
        <button
          onClick={() => {
            nav("/");
            window.scrollTo(0, 0);
          }}
        >
          <img src={Logo} alt="logo" className="w-20" />
        </button>
        <button
          onClick={() =>
            alert("You are not logged in, Can not show your cart !")
          }
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button
          onClick={() =>
            alert("You are not logged in, Can not show your profile !")
          }
        >
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>

      {/* for tablet & desktop users */}
      <div className="hidden md:flex h-full mr-[10%] font-semibold text-base lg:text-xl xl:text-2xl items-center">
        <ul className="flex flex-row gap-6 items-center text-black">
          <li
            onClick={() => nav("/")}
            className="border-b-2 border-transparent hover:border-black hover:cursor-pointer active:scale-95"
          >
            <div className="relative z-20 p-1">Home</div>
          </li>
          <li
            onClick={() => nav("/shop")}
            className="border-b-2 border-transparent hover:border-black hover:cursor-pointer active:scale-95"
          >
            <div className="relative z-20 p-1">Shop</div>
          </li>
          <li
            onClick={() => nav("/aboutus")}
            className="border-b-2 border-transparent hover:border-black hover:cursor-pointer active:scale-95"
          >
            <div className="relative z-20 p-1">About us</div>
          </li>
          <li
            onClick={() => nav("/contact")}
            className="border-b-2 border-transparent hover:border-black hover:cursor-pointer active:scale-95"
          >
            <div className="relative z-20 p-1">Contact</div>
          </li>
        </ul>
      </div>
      {/* for mobile users */}
      <div className="md:hidden h-full mr-10 font-semibold flex items-center">
        <button
          onClick={() => {
            setShowSideNav((prev) => !prev);
          }}
          className={`z-20 ${
            showSideNav
              ? `fixed top-3 right-5 text-white text-4xl`
              : `relative text-5xl`
          }`}
        >
          {showSideNav ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <div
          className={`fixed w-56 h-screen top-0 right-0 bg-transparent08 pt-2 border-l-2 z-10 border-black ${
            showSideNav ? `translate-x-0` : `translate-x-full`
          } ease-in-out duration-[1000ms]`}
        >
          <ul className="w-full h-full flex flex-col items-center text-xl gap-4 mt-12 text-white">
            <li
              onClick={() => {
                closeSideNav();
                nav("/");
              }}
              className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
            >
              Home
            </li>
            <li
              onClick={() => {
                closeSideNav();
                nav("/shop");
              }}
              className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
            >
              Shop
            </li>
            <li
              onClick={() => {
                closeSideNav();
                nav("/aboutus");
              }}
              className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
            >
              About us
            </li>
            <li
              onClick={() => {
                closeSideNav();
                nav("/contact");
              }}
              className="border-b-2 border-transparent hover:border-white hover:cursor-pointer active:scale-95"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
