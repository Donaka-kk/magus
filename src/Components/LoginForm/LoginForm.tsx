import { useEffect, useState } from "react";
import { UseMutationResult } from "@tanstack/react-query";

interface LoginFormProps {
   method: "password" | "oneTimePassword";
   setMethod: (method: "password" | "oneTimePassword") => void;
   passwordLoginMutation: UseMutationResult<any, Error, any>;
   sendOTPMutation: UseMutationResult<any, Error, any>;
   verifyOPTMutation: UseMutationResult<any, Error, any>;
   message: string;
   setMessage: (message: string) => void;
}

const LoginForm = ({
   method,
   setMethod,
   passwordLoginMutation,
   sendOTPMutation,
   verifyOPTMutation,
   message,
   setMessage,
}: LoginFormProps) => {
   const [username, setUsername] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const [phoneNumber, setPhoneNumber] = useState<string>("");
   const [code, setCode] = useState<string>("");
   const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
   const isPassword = method === "password";

   useEffect(() => {
      setMessage("");

      if (method === "password") {
         // reset OTP state
         setPhoneNumber("");
         setCode("");
         setIsCodeSent(false);
      } else {
         // reset password state
         setUsername("");
         setPassword("");
      }
   }, [method]);

   return (
      <div className="relative flex w-[800px] sm:h-[400px] h-[450px] border-2 m-5 border-black rounded-lg overflow-hidden">
         {/* FORMS SIDE */}
         <div
            className={`relative w-full sm:w-1/2 h-full transition-transform duration-1000 ease-in-out
          ${isPassword ? "translate-x-0" : "sm:translate-x-full"}`}
         >
            {/* PASSWORD LOGIN */}
            <div
               className={`absolute inset-0 p-3 transition-all duration-1000
            ${isPassword ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40 sm:-translate-x-10 pointer-events-none"}`}
            >
               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                     passwordLoginMutation.mutate({ username, password });
                  }}
                  className="flex flex-col w-full h-full"
               >
                  <h2 className="text-2xl font-bold text-center m-5">
                     Sign in to 3Davinci
                  </h2>

                  <label>Username</label>
                  <input
                     required
                     autoFocus
                     className="rounded-md border border-black p-1"
                     onChange={(e) => setUsername(e.target.value)}
                  />

                  <label className="mt-2">Password</label>
                  <input
                     type="password"
                     required
                     className="rounded-md border border-black p-1"
                     onChange={(e) => setPassword(e.target.value)}
                  />
                  <p
                     onClick={() => setMethod("oneTimePassword")}
                     className="underline hover:cursor-pointer"
                  >
                     Don't have account ?
                  </p>
                  <div className="flex flex-col items-center justify-center gap-2 mt-auto">
                     <div className="text-red-600 text-center">{message}</div>
                     <button
                        type="submit"
                        className="w-32 h-10 border-2 border-black rounded-lg cursor-pointer active:scale-90 transition-transform"
                     >
                        Log in{" "}
                     </button>
                  </div>
               </form>
            </div>

            {/* OTP LOGIN */}
            <div
               className={`absolute inset-0 p-3 transition-all duration-1000
            ${!isPassword ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40 sm:translate-x-10 pointer-events-none"}`}
            >
               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                     if (isCodeSent) {
                        verifyOPTMutation.mutate({
                           phoneNumber,
                           code,
                        });
                     } else {
                        sendOTPMutation.mutate(
                           { phoneNumber },
                           { onSuccess: () => setIsCodeSent(true) }
                        );
                     }
                  }}
                  className="flex flex-col w-full h-full"
               >
                  <h2 className="text-2xl font-bold text-center m-5">
                     Sign in to 3Davinci
                  </h2>

                  <label>Phone Number</label>
                  <input
                     onChange={(e) => setPhoneNumber(e.target.value)}
                     className="rounded-md border border-black p-1"
                  />

                  <label
                     className={`${isCodeSent ? "text-black" : "text-gray-500"}`}
                  >
                     Code
                  </label>
                  <input
                     onChange={(e) => setCode(e.target.value)}
                     type="password"
                     className={`rounded-md border p-1 ${isCodeSent ? "border-black" : "border-gray-500"}`}
                     disabled={!isCodeSent}
                  />

                  <p
                     onClick={() => setMethod("password")}
                     className="underline hover:cursor-pointer"
                  >
                     Already have account ?
                  </p>
                  <div className="flex flex-col items-center justify-center gap-2 mt-auto">
                     <div className="text-red-600 text-center">{message}</div>
                     <button
                        type="submit"
                        value="Sign up"
                        className="w-32 h-10 border-2 border-black rounded-lg cursor-pointer active:scale-90 transition-transform"
                     >
                        {isCodeSent ? "log in" : "Send code"}
                     </button>
                  </div>
               </form>
            </div>
         </div>

         {/* INFO PANEL */}
         <div
            className={`hidden sm:flex w-1/2 h-full bg-cyan-500 transition-transform duration-1000 ease-in-out
          ${isPassword ? "translate-x-0" : "-translate-x-full"}`}
         >
            <div className="flex flex-col justify-center items-center w-full p-10 gap-4 text-center">
               {isPassword ? (
                  <>
                     <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-yellow-600 to-secondary bg-clip-text text-transparent">
                        Hello friend!
                     </h2>
                     <p>Enter your details and start your journey</p>
                     <button
                        onClick={() => setMethod("oneTimePassword")}
                        className="border-2 border-black px-4 py-2 rounded-lg"
                     >
                        Enter with one-time password
                     </button>
                  </>
               ) : (
                  <>
                     <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-yellow-600 to-secondary bg-clip-text text-transparent">
                        Welcome back!
                     </h2>
                     <p>Please login with your personal info</p>
                     <button
                        onClick={() => setMethod("password")}
                        className="border-2 border-black px-4 py-2 rounded-lg"
                     >
                        Enter with your own password
                     </button>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default LoginForm;
