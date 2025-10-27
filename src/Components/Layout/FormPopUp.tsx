import { useState } from "react";
import { MessageType } from "../../Types/MessageType";
import { NewTicketType } from "../../Types/TicketType";
interface FormPopUpProps {
   handleClosingPopUp: () => void;
   message?: MessageType;
   createNewTicket: (data: NewTicketType) => void;
}
function FormPopUp({
   createNewTicket,
   handleClosingPopUp,
   message,
}: FormPopUpProps) {
   const [subject, setSubject] = useState<string>("");
   const [text, setText] = useState<string>("");
   return (
      <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-10">
         <form
            onSubmit={(event) => {
               event.preventDefault();
               createNewTicket({ subject, text });
            }}
            className="relative border border-black p-5 flex flex-col gap-5 bg-white z-30"
         >
            <label>Subject</label>
            <input onChange={(event) => setSubject(event.target.value)} />
            <label>message</label>
            <input onChange={(event) => setText(event.target.value)} />
            <p
               className={`${message?.status === "succeed" ? "text-green-500" : "text-red-500"}`}
            >
               {message?.text}
            </p>
            <div className="flex justify-center gap-5">
               <button
                  type="button"
                  onClick={() => handleClosingPopUp()}
                  className=" border border-black px-2 py-1 active:scale-95"
               >
                  cancel
               </button>
               <button
                  type="submit"
                  className=" border border-black px-2 py-1 active:scale-95"
               >
                  Confirm
               </button>
            </div>
         </form>
         <div
            onClick={() => handleClosingPopUp()}
            className="absolute w-full h-full bg-transparent06 z-20"
         />
      </div>
   );
}
export default FormPopUp;
