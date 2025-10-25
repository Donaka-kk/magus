import { useState } from "react";
import { MessageType } from "../../Types/MessageType";

import { ContactPostType } from "../../Types/ContactPostType";
interface ContactFormType {
   handleSubmit: (
      event: React.FormEvent<HTMLFormElement>,
      contactPost: ContactPostType
   ) => void;
   message?: MessageType;
}
function ContactForm({ handleSubmit, message }: ContactFormType) {
   const [author, setAuthor] = useState<string>("");
   const [phoneNumber, setPhoneNumber] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [text, setText] = useState<string>("");

   return (
      <div className="w-full md:w-2/4 border-b-2 md:border-none border-gray-600 py-5 md:mb-10">
         <h1 className="text-center font-semibold text-2xl md:text-3xl mb-5">
            Get In Touch
         </h1>
         <form
            className="flex flex-col justify-center items-center gap-2"
            onSubmit={(event) =>
               handleSubmit(event, {
                  author: author,
                  phoneNumber: phoneNumber,
                  email: email,
                  text: text,
               })
            }
         >
            <input
               type="text"
               className="w-8/12 bg-transparent border border-black rounded-sm px-2 py-2 outline-none"
               placeholder="Full name"
               required
               onChange={(event) => setAuthor(event.target.value)}
            />

            <input
               type="text"
               className="w-8/12 bg-transparent border border-black rounded-sm px-2 py-2 outline-none"
               placeholder="Phone number"
               required
               onChange={(event) => setPhoneNumber(event.target.value)}
            />

            <input
               type="email"
               className="w-8/12 bg-transparent border border-black rounded-sm px-2 py-2 outline-none"
               placeholder="Email"
               required
               onChange={(event) => setEmail(event.target.value)}
            />

            <textarea
               className="w-8/12 h-[112px] bg-transparent border border-black rounded-sm px-2 py-2 outline-none resize-none"
               placeholder="Message"
               required
               onChange={(event) => setText(event.target.value)}
            />
            <p
               className={`${message?.status === "succeed" ? "text-green-500" : "text-red-500"}`}
            >
               {message && message.text}
            </p>
            <button
               type="submit"
               className="w-fit px-2 py-2 font-semibold border-2 border-black rounded-lg"
            >
               Send now
            </button>
         </form>
      </div>
   );
}
export default ContactForm;
