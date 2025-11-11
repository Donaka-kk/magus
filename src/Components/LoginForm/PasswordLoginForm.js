import { useState } from "react";

function PasswordLoginForm({ onSumbit, switchMode }) {
   const [isUsernameFocused, setIsUsernameFocused] = useState(false);
   const [isPasswordFocused, setIsPasswordFocused] = useState(false);
   // const [message, setMessage] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = async () => {
      onSumbit({
         username: username,
         password: password,
         method: "password",
         codeRequired: false,
      });
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
               Sign in with password
            </p>
            <div className="relative">
               <label
                  className={`absolute duration-500 z-0 ${isUsernameFocused || username !== "" ? " -translate-y-5" : ""}`}
               >
                  Username
               </label>
               <input
                  type="text"
                  spellCheck={false}
                  required
                  maxLength={50}
                  className={`relative w-full text-sm outline-none z-10 bg-transparent p-1 ${isUsernameFocused || username !== "" ? "border-b border-black" : ""}`}
                  onFocus={() => setIsUsernameFocused(true)}
                  onBlur={() => setIsUsernameFocused(false)}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus={true}
               />
            </div>
            <div className="relative">
               <label
                  className={`absolute duration-500 ${isPasswordFocused || password !== "" ? "-translate-y-5" : ""}`}
               >
                  Password
               </label>
               <input
                  type="password"
                  spellCheck={false}
                  required
                  maxLength={50}
                  className={`relative w-full text-sm outline-none z-10 bg-transparent p-1 ${isPasswordFocused || password !== "" ? "border-b border-black" : ""}`}
                  onFocus={() => {
                     setIsPasswordFocused(true);
                  }}
                  onBlur={() => {
                     setIsPasswordFocused(false);
                  }}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </div>
            <div className="text-red-600 text-center text-lg font-bold">
               {message}
            </div>
            <div className="flex flex-col w-full justify-center items-center rounded-lg">
               <input
                  type="submit"
                  value="Log in"
                  className="w-32 h-10 border-2 border-black text-myBlue rounded-lg text-lg active:scale-90 hover:cursor-pointer"
               />
            </div>
         </form>
         <button
            onClick={() => switchMode("onetime")}
            className="border border-black px-4 py-2"
         >
            Sign in with one-time code
         </button>
      </div>
   );
}
export default PasswordLoginForm;
