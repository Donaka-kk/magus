import { Link, useNavigate } from "react-router-dom";
import Logo from "../../utilities/logo-no-background.webp";

const Footer = () => {
  const nav = useNavigate();
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-5 justify-around items-center py-5 border-t-2 border-black ">
      <div className="flex items-center gap-5 font-semibold text-sm md:text-base">
        <Link
          to="/"
          className="border-b-2 border-transparent hover:border-black active:scale-95"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="border-b-2 border-transparent hover:border-black active:scale-95"
        >
          Shop
        </Link>
        <Link
          to="/aboutus"
          className="border-b-2 border-transparent hover:border-black active:scale-95"
        >
          About us
        </Link>
        <Link
          to="/contact"
          className="border-b-2 border-transparent hover:border-black active:scale-95"
        >
          Contact
        </Link>
      </div>

      <div>
        <button
          onClick={() => {
            nav("/");
            window.scrollTo(0, 0);
          }}
        >
          <img src={Logo} alt="logo" className="w-20" />
        </button>
      </div>

      <div className="flex items-center text-sm md:text-base">
        <p>Copyright © 2024 Magus Tracee Store</p>
      </div>
    </div>
  );
};

export default Footer;
