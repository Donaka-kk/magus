import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "../Components/ContactForm/ContactForm.tsx";
import ContactSocialMedia from "../Components/ContactSocialMedia/ContactSocialMedia.tsx";

const Contact = () => {
   const [message, setMessage] = useState();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const handleSubmit = async (event, contactPost) => {
      event.preventDefault();
      try {
         await axios
            .patch(
               "https://reqres.in/api/user/12",
               JSON.stringify({
                  updatedAt: "string",
               }),
               // change the input of request before build => contactPost
               {
                  headers: {
                     "x-api-key": "reqres-free-v1",
                  },
               }
            )
            .then((response) => {
               if (response?.status === 200) {
                  setMessage({
                     status: "succeed",
                     text: "Message successfully sent",
                  });
               } else {
                  setMessage({
                     status: "failed",
                     text: "Sending message failed",
                  });
               }
            });
      } catch (error) {
         console.log(error.message);
      }
   };

   return (
      <div>
         <div>
            <h1 className="font-bold text-4xl text-center my-10">Contact us</h1>
         </div>

         <div className="flex flex-col md:flex-row items-center">
            <ContactForm handleSubmit={handleSubmit} message={message} />
            <ContactSocialMedia />
         </div>
      </div>
   );
};

export default Contact;
