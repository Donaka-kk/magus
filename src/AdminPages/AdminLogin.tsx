import axios from "axios";
import LoginForm from "../Components/LoginForm/LoginForm.tsx";

import { useUser } from "../Context/User.tsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fakeData } from "../AdminComponents/DummyDatas/AdminLogin.tsx";
import { useMutation } from "@tanstack/react-query";

function AdminLogin() {
   const { user, updateUser } = useUser();
   const [message, setMessage] = useState("");
   const [method, setMethod] = useState<"password" | "oneTimePassword">(
      "password"
   );
   const nav = useNavigate();

   useEffect(() => {
      if (user?.role === "admin") {
         nav("/admin/panel", { replace: true });
      }
   }, [user, nav]);

   const passwordLoginMutation = useMutation({
      mutationFn: async (payload: any) => {
         console.log(payload);
         const response = await axios.post(
            "https://reqres.in/api/login",
            {
               email: "eve.holt@reqres.in",
               password: "cityslicka",
            },
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return response.data;
      },
      onSuccess() {
         updateUser(fakeData);
         nav("/admin/panel");
      },
      onError() {
         setMessage("Invalid username or password");
      },
   });

   const sendOTPMutation = useMutation({
      mutationFn: async (payload: any) => {
         console.log(payload);
         const response = await axios.post(
            "https://reqres.in/api/login",
            {
               email: "eve.holt@reqres.in",
               password: "cityslicka",
            },
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return response.data;
      },
      onSuccess() {
         setMessage("Code has been sent to your phone number");
      },
      onError() {
         setMessage("Failed to send code");
      },
   });

   const verifyOPTMutation = useMutation({
      mutationFn: async (payload: any) => {
         console.log(payload);
         const response = await axios.post(
            method === "password"
               ? "https://reqres.in/api/login"
               : "https://reqres.in/api/login",
            {
               email: "eve.holt@reqres.in",
               password: "cityslicka",
            },
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return response.data;
      },
      onSuccess() {
         updateUser(fakeData);
         nav("/admin/panel");
      },
      onError() {
         setMessage("Invalid code");
      },
   });

   return (
      <div className="max-w-screen min-h-screen flex justify-center items-center bg-background">
         <LoginForm
            method={method}
            setMethod={setMethod}
            passwordLoginMutation={passwordLoginMutation}
            sendOTPMutation={sendOTPMutation}
            verifyOPTMutation={verifyOPTMutation}
            message={message}
            setMessage={setMessage}
         />
      </div>
   );
}

export default AdminLogin;
