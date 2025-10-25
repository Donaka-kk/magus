import {
   faInstagram,
   faTelegram,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
   faEnvelope,
   faLocationDot,
   faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactSocialMedia() {
   return (
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
   );
}
export default ContactSocialMedia;
