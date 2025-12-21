import axios from "axios";
import toast from "react-hot-toast";

import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useUser } from "../../Context/User.tsx";

export const useCart = (productName: string, productId: number) => {
   const { user } = useUser();
   const queryClient = useQueryClient();

   const mutation = useMutation({
      mutationFn: async ({
         size,
         color,
         quantity,
      }: {
         size: string;
         color: string;
         quantity: number;
      }) => {
         const response = await axios.post(
            `https://reqres.in/api/login`,
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
         return response;
      },
      onSuccess() {
         toast.success("success");
      },
      onError() {
         toast.error("error");
      },
   });

   const handleAdd = (size: string, color: string, quantity: number) => {
      if (user) {
         mutation.mutate({ size, color, quantity });
         //somehow add the product to cache
      } else {
         queryClient.setQueryData(["cart"], (old: any[] = []) => {
            const updated = [
               ...old,
               {
                  id: productId,
                  size: size,
                  color: color,
                  quantity: quantity,
               },
            ];
            return updated;
         });
         toast.success(
            `${quantity} ${productName} successfully added to your cart`
         );
      }
   };

   return { handleAdd, isPending: mutation.isPending };
};
