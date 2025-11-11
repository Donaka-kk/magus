import OneTimeLoginForm from "../Components/LoginForm/OneTimeLoginForm";
import PasswordLoginForm from "../Components/LoginForm/PasswordLoginForm";
import { useUser } from "../Context/User.tsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Admin() {
   const { user, updateUser } = useUser();
   const [switchMode, setSwitchMode] = useState("password");
   const nav = useNavigate();

   useEffect(() => {
      if (user?.role === "admin") {
         nav("/admin/panel", { replace: true });
      }
   }, [user, nav]);

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
         updateUser({ name: "qwerty", age: 26, role: "admin" });
         sessionStorage.setItem(
            "user",
            JSON.stringify({ name: "qwerty", age: 26, role: "admin" })
         );
         nav("/admin/panel");
         // return data;
         return 0;
      } catch (error) {
         console.log(error.message);
      }
   };

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
                  onSumbit={handleLogin}
                  switchMode={setSwitchMode}
               />
            )}
         </div>
      </div>
   );
}

export default Admin;
