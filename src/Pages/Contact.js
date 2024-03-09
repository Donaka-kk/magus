// import bgImage1 from "../utilities/horse1.jpg";
// import bgImage2 from "../utilities/horse2.avif";
// import bgImage3 from "../utilities/horse3.avif";
// import bgImage4 from "../utilities/horse4.avif";
// import bgImage5 from "../utilities/horse5.png";
// import bgImage6 from "../utilities/horse6.avif";
import bgImage7 from "../utilities/horse7.avif";
// import bgImage8 from "../utilities/horse8.avif";

import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jszsh9e", "template_wdu128g", form.current, {
        publicKey: "27fs09Sd0eYc0EFob",
      })
      .then(
        () => {
          alert(
            "Your message successfully has been sent to Magus Tracee Support"
          );
        },
        () => {
          alert("Something went wrong , try again later");
        }
      );

    e.target.reset();
  };

  return (
    <div className="">
      <div>
        {/* 3 , 6 , 7 , 8 */}
        <img
          src={bgImage7}
          alt="backgroundImage"
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
      </div>

      <div>
        <h1 className="font-bold text-4xl text-center my-10">Contact us</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/4 border-b-2 md:border-none border-gray-600 py-5 md:mb-10">
          <h1 className="text-center font-semibold text-2xl md:text-3xl mb-5">
            Get In Touch
          </h1>
          <form
            ref={form}
            className="flex flex-col justify-center items-center gap-2"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              className="w-8/12 bg-transparent border border-black rounded-sm px-2 py-2 outline-none"
              placeholder="Full name"
              required
            ></input>

            <input
              type="number"
              name="user_phone"
              className="w-8/12 bg-transparent border border-black rounded-sm px-2 py-2 outline-none"
              placeholder="Phone number"
              required
            ></input>

            <input
              type="email"
              name="user_email"
              className="w-8/12 bg-transparent border border-black rounded-sm px-2 py-2 outline-none"
              placeholder="Email"
              required
            ></input>

            <textarea
              name="user_message"
              className="w-8/12 h-[112px] bg-transparent border border-black rounded-sm px-2 py-2 outline-none resize-none"
              placeholder="Message"
              required
            />
            <button className="w-fit px-2 py-2 font-semibold border-2 border-black rounded-lg">
              SEND NOW
            </button>
          </form>
        </div>

        <div className="w-full md:w-2/4 flex flex-col justify-center items-center py-5 mb-10">
          <h1 className="text-center font-semibold text-2xl md:text-3xl mb-5">
            Talk To Us
          </h1>
          <div className="flex w-9/12 p-2 gap-2">
            <div className="text-2xl">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">EMAIL</h2>
              <p className="text-lg">qwerty@gmail.com</p>
            </div>
          </div>

          <div className="flex w-9/12 p-2 gap-2">
            <div className="text-2xl">
              <FontAwesomeIcon icon={faPhoneVolume} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Phone Number</h2>
              <p className="text-lg">021 - 123456789</p>
            </div>
          </div>

          <div className="flex w-9/12 p-2 gap-2 mb-5">
            <div className="text-2xl">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Location</h2>
              <p className="text-lg">Karaj , daste bil.ST , NO123</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <h1 className="font-semibold text-xl">Follow Us</h1>
            <div className="flex gap-4 text-3xl">
              <a href="https://www.Instagram.com" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://t.me" rel="noreferrer">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a href="https://twitter.com" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
