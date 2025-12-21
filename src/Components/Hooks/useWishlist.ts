import axios from "axios";
import toast from "react-hot-toast";

import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useUser } from "../../Context/User.tsx";
import { ProductSchemeType } from "../../Types/ProductType";
import { DummyWishList } from "../API/WishlistDummyData.tsx";

export const useWishlist = (product: ProductSchemeType) => {
   const { user } = useUser();
   const queryClient = useQueryClient();

   const { data: wishlist = [] } = useQuery({
      queryKey: ["wishlist"],
      queryFn: async () => {
         if (!user) {
            // ⬅️ read guest wishlist from cache
            return queryClient.getQueryData<[]>(["wishlist"]) ?? [];
         }
         const response = await axios.get<[]>(
            `https://reqres.in/api/users/${product.id}`,
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         //change this to response before build
         return DummyWishList || response;
      },
      initialData: [],
   });

   const isInWishlist = wishlist.some((item) => item.id === product.id);

   const mutation = useMutation({
      mutationFn: async () => {
         //sending user info and productid and isInWishlist
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

   const editWishlist = () => {
      let action: "added" | "removed" = "added";
      if (user) {
         mutation.mutate();
         return;
      }
      queryClient.setQueryData(["wishlist"], (old: any[] = []) => {
         const exists = old.find((item) => item.id === product.id);
         if (exists) {
            const updated = old.filter(
               (wishListProduct) => wishListProduct.id !== product.id
            );
            action = "removed";
            return updated;
         } else {
            const updated = [...old, product];
            action = "added";
            return updated;
         }
      });
      toast.success(
         `${product.name} successfully ${action === "added" ? "added to" : "removed from"} your wishlist`
      );
   };

   return { editWishlist, isPending: mutation.isPending, isInWishlist };
};
