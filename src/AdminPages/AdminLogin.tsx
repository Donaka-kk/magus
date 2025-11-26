import axios from "axios";
import OneTimeLoginForm from "../Components/LoginForm/OneTimeLoginForm.tsx";
import PasswordLoginForm from "../Components/LoginForm/PasswordLoginForm.tsx";

import { useUser } from "../Context/User.tsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fakeData } from "../AdminComponents/DummyDatas/AdminLogin.tsx";

function AdminLogin() {
   const { user, updateUser } = useUser();
   const [message, setMessage] = useState("");
   const [switchMode, setSwitchMode] = useState<"password" | "one-time">(
      "password"
   );
   const nav = useNavigate();

   useEffect(() => {
      if (user?.role === "admin") {
         nav("/admin/panel", { replace: true });
      }
   }, [user, nav]);

   const handlePasswordLogin = async (username: string, password: string) => {
      try {
         console.log(username, password);
         const response = await axios.post(
            "https://reqres.in/api/users",
            JSON.stringify({
               name: "morpheus",
               job: "leader",
            }),
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         if (response.status < 400) {
            updateUser(fakeData ?? response.data);
            nav("/admin/panel");
         } else {
            setMessage("Login failed with status: " + response.status);
         }
      } catch (error: any) {
         console.log(error.message);
      }
   };

   const handleOneTimeLogin = async (phoneNumber: string, code: string) => {
      const userInfo = code
         ? { phoneNumber: phoneNumber, code: code }
         : { phoneNumber: phoneNumber };
      try {
         const response = await axios.post(
            "https://reqres.in/api/login",
            {
               email: "eve.holt@reqres.in",
               password: "cityslicka",
            },
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         if (response.status < 400) {
            if (response.data.token) {
               updateUser(fakeData ?? response.data);
               nav("/admin/panel");
            } else {
               setMessage("Code sent to " + phoneNumber);
            }
         } else {
            setMessage("Login failed with status: " + response.status);
         }
      } catch (error: any) {
         console.log(error.message);
      }
   };

   return (
      <div>
         <div className="max-w-screen h-full flex justify-center items-center my-20">
            {switchMode === "password" ? (
               <PasswordLoginForm
                  onSubmit={handlePasswordLogin}
                  switchMode={setSwitchMode}
                  message={message}
               />
            ) : (
               <OneTimeLoginForm
                  onSubmit={handleOneTimeLogin}
                  switchMode={setSwitchMode}
                  message={message}
               />
            )}
         </div>
      </div>
   );
}

export default AdminLogin;
