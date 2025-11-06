import PasswordLoginForm from "../Components/LoginForm/PasswordLoginForm";
import OneTimeLoginForm from "../Components/LoginForm/OneTimeLoginForm";
import axios from "axios";
import { useUser } from "../Context/User.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Login = () => {
   const { user, updateUser } = useUser();
   const [switchMode, setSwitchMode] = useState("password");
   const queryClient = useQueryClient();
   const nav = useNavigate();

   const userLogin = useMutation({
      mutationKey: ["user"],
      mutationFn: async (user: {
         username: string;
         password: string;
         method: string;
         codeRequired: boolean;
      }) => {
         // next line should change to post later
         const response = await axios.patch(
            "https://reqres.in/api/users/1",
            JSON.stringify({
               data: {
                  id: 123,
                  email: "string",
                  first_name: "string",
                  last_name: "string",
                  avatar: "string",
               },
            }),
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         return response;
      },
      onSuccess: (data) => {
         const user = {
            firstname: "Qwertyuiop",
            lastname: "asodiwerweryn",
            image: "https://cdn.web.imagine.art/imagine-frontend/assets/images/ai-image-generator-hero-image.png",
            age: 26,
            role: "customer",
            phoneNumber: 989123456789,
            address: "siktir abad sofla , kooche shahid siktirian",
            email: "an@gmail.com",
         };
         queryClient.setQueryData(["user"], user);
         updateUser(user);
         window.scrollTo({ top: 0, behavior: "smooth" });
         nav("/");
      },
   });

   if (user) {
      return (
         <div className="flex flex-col justify-center items-center gap-5 p-5">
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
         <div className="max-w-screen h-full flex justify-center items-center my-20 p-5">
            {switchMode === "password" ? (
               <PasswordLoginForm
                  onSumbit={userLogin.mutate}
                  switchMode={setSwitchMode}
               />
            ) : (
               <OneTimeLoginForm
                  onSubmit={userLogin.mutate}
                  switchMode={setSwitchMode}
               />
            )}
         </div>
      </div>
   );
};

export default Login;
