import PasswordLoginForm from "../Components/LoginForm/PasswordLoginForm";
import OneTimeLoginForm from "../Components/LoginForm/OneTimeLoginForm";
import axios from "axios";
import { UserContext } from "../Context/User";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
   const { user, updateUser } = UserContext();
   const [switchMode, setSwitchMode] = useState("password");
   const nav = useNavigate();

   const handleLogin = async (userData) => {
      try {
         // const data = await axios
         //    .post(
         //       "https://47cc28b5d9f6491c0e30d1fc16e1de93.serveo.net/api/v1/users/login",
         //       { username: "09111111111", password: "1" }
         //    )
         //    .then((response) => {
         //       return response;
         //    });
         // console.log(data);
         updateUser({ name: "qwerty", age: 26, role: "customer" });
         sessionStorage.setItem(
            "user",
            JSON.stringify({ name: "qwerty", age: 26, role: "customer" })
         );
         sessionStorage.setItem("cart", JSON.stringify({}));
         nav("/");
         return 0;
         // return data;
      } catch (error) {
         console.log(error.message);
      }
   };

   if (user) {
      return (
         <div className="flex flex-col justify-center items-center m-10 gap-5">
            <p className="text-3xl font-bold">You already logged in</p>
            <button
               onClick={() => nav("/")}
               className="px-4 py-2 border border-black rounded-md"
            >
               Go Home
            </button>
         </div>
      );
   }

   return (
      <div>
         <div className="max-w-screen h-full flex justify-center items-center my-20">
            {switchMode === "password" ? (
               <PasswordLoginForm
                  onSumbit={handleLogin}
                  switchMode={setSwitchMode}
               />
            ) : (
               <OneTimeLoginForm
                  onSubmit={handleLogin}
                  switchMode={setSwitchMode}
               />
            )}
         </div>
      </div>
   );
};

export default Login;
