import axios from "axios";
import toast from "react-hot-toast";

import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useUser } from "../../Context/User.tsx";
import { ProductSchemeType } from "../../Types/ProductType.tsx";

export const useCart = (productScheme: ProductSchemeType) => {
   const { user } = useUser();
   const queryClient = useQueryClient();

   const mutation = useMutation({
      mutationFn: async (item: any) => {
         //
         const response = await axios.post(
            `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/items`,
            item,
            {
               headers: {
                  apikey: process.env.REACT_APP_SUPABASE_ANON_KEY!,
                  Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
               },
            }
         );
         return response.data;
      },
      onSuccess(_, variables) {
         toast.success(`${variables.name} successfully added to your cart`);
         queryClient.invalidateQueries({ queryKey: ["serverCart", user?.ID] });
      },
      onError: (_, variables) => {
         toast.error(`Failed to add ${variables.name} your cart`);
      },
   });

   const handleAdd = (size: string, color: string, quantity: number) => {
      const newItem = {
         name: productScheme.name,
         price: productScheme.price,
         image: productScheme.image,
         discount: productScheme.discount,
         category: productScheme.category,
         selectedColor: color,
         selectedSize: size,
         quantity: quantity,
         finalPrice:
            (productScheme.price * (100 - productScheme.discount)) / 100,
         cartID: user?.ID,
      };

      if (user) {
         mutation.mutate(newItem);
         return;
      }

      queryClient.setQueryData(["guestCart"], (old: any[] = []) => {
         const index = old.findIndex(
            (item) =>
               item.name === newItem.name &&
               item.selectedColor === newItem.selectedColor &&
               item.selectedSize === newItem.selectedSize
         );
         if (index !== -1) {
            return old.map((item, i) =>
               i === index
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
            );
         }

         return [...old, { ...newItem, id: old.length + 1 }];
      });
      toast.success(
         `${quantity} ${productScheme.name} successfully added to your cart`
      );
   };

   return { handleAdd, isPending: mutation.isPending };
};
