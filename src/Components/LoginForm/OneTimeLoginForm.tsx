import { useState } from "react";

interface OneTimeLoginFormProps {
   onSubmit: (phoneNumber: string, password: string) => void;
   switchMode: (mode: "password" | "one-time") => void;
   message: string;
}

function OneTimeLoginForm({
   onSubmit,
   switchMode,
   message,
}: OneTimeLoginFormProps) {
   const [phoneNumber, setPhoneNumber] = useState("");
   const [code, setCode] = useState("");

   const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
   const [isCodeFocused, setIsCodeFocused] = useState(false);
   const [isCodeSent, setIsCodeSent] = useState(false);

   const handleLogin = async () => {
      onSubmit(phoneNumber, code);
      setIsCodeSent(true);
   };

   return (
      <div className="w-[600px] h-fit flex flex-col justify-between items-center border-2 border-black rounded-md p-5 gap-5">
         <form
            onSubmit={(event) => {
               event.preventDefault();
               handleLogin();
            }}
            className="flex flex-col w-full h-fit gap-7"
         >
            <p className="text-2xl font-bold text-center">
               Sign in with one-time code
            </p>
            <div className="relative">
               <label
                  className={`absolute duration-300 z-0 top-[5px] left-2 bg-white px-2 font-bold${isPhoneNumberFocused || phoneNumber !== "" ? " -translate-y-4 z-20" : ""}`}
               >
                  Phone Number
               </label>
               <input
                  type="text"
                  spellCheck={false}
                  required
                  maxLength={50}
                  className={`relative w-full text-sm outline-none z-10 bg-transparent p-2 border-2 border-gray-400 font-semibold ${isCodeSent ? "text-gray-400" : ""}`}
                  onFocus={() => setIsPhoneNumberFocused(true)}
                  onBlur={() => setIsPhoneNumberFocused(false)}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  readOnly={isCodeSent}
                  autoFocus={true}
               />
            </div>
            <div className="relative">
               <label
                  className={`absolute duration-300 z-0 top-[5px] left-2 bg-white px-2 font-bold ${(isCodeFocused || code !== "") && isCodeSent ? "-translate-y-4 z-20" : ""} ${isCodeSent ? "" : "text-gray-400"}`}
               >
                  Code
               </label>
               <input
                  type="password"
                  spellCheck={false}
                  required
                  maxLength={50}
                  className={`relative w-full text-sm outline-none z-10 bg-transparent p-2 border-2 border-gray-400`}
                  onFocus={() => {
                     setIsCodeFocused(true);
                  }}
                  onBlur={() => {
                     setIsCodeFocused(false);
                  }}
                  onChange={(e) => setCode(e.target.value)}
                  readOnly={!isCodeSent}
               />
            </div>
            <div className="text-red-600 text-center text-lg font-bold">
               {message}
            </div>
            <div className="flex flex-col w-full justify-center items-center rounded-lg">
               <input
                  type="submit"
                  value={`${isCodeSent ? "Log in" : "Send the code"}`}
                  className="w-32 h-10 border-2 border-black text-myBlue rounded-lg text-lg active:scale-90 hover:cursor-pointer"
               />
            </div>
         </form>
         <button
            onClick={() => switchMode("password")}
            className="border border-black px-4 py-2"
         >
            Sign in with your password
         </button>
      </div>
   );
}
export default OneTimeLoginForm;
