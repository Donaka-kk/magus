import axios from "axios";
import CartWrapper from "../Components/Cart/CartWrapper.tsx";
import toast from "react-hot-toast";

import { useUser } from "../Context/User.tsx";
import { CartType } from "../Types/CartType.tsx";
import { useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { ItemType } from "../Types/ItemType.tsx";

function AuthenticatedCart({ userId }: { userId: number }) {
   const queryClient = useQueryClient();
   const { data: serverCart } = useSuspenseQuery<CartType>({
      queryKey: ["serverCart", userId],
      queryFn: async () => {
         const response = await axios.get(
            `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/Carts?id=eq.${userId}&select=*,items(*)`,
            {
               headers: {
                  apikey: process.env.REACT_APP_SUPABASE_ANON_KEY!,
                  Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
               },
            }
         );
         return response.data[0];
      },
   });

   const updateCartMutation = useMutation({
      mutationFn: async (items: ItemType[]) => {
         const headers = {
            apikey: process.env.REACT_APP_SUPABASE_ANON_KEY!,
            Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
         };
         await axios.delete(
            `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/items?cartID=eq.${userId}`,
            { headers }
         );
         await axios.post(
            `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/items?cartID=eq.${userId}`,
            items,
            { headers }
         );
      },
      onSuccess() {
         queryClient.invalidateQueries({ queryKey: ["serverCart", userId] });
         toast.success("Successfully updated your cart");
      },
      onError() {
         toast.error("Failed to update your cart");
      },
   });

   return (
      <CartWrapper
         cart={serverCart}
         onSave={(items) => updateCartMutation.mutate(items)}
         updatePending={updateCartMutation.isPending}
      />
   );
}

function GuestCart() {
   const queryClient = useQueryClient();

   const { data: guestItems = [] } = useQuery<ItemType[]>({
      queryKey: ["guestCart"],
      queryFn: () => [],
      initialData: [],
      enabled: false,
   });
   const cart: CartType = {
      items: guestItems,
      totalItems: guestItems.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: guestItems.reduce(
         (sum, i) => sum + i.finalPrice * i.quantity,
         0
      ),
   };

   const handleSave = (items: ItemType[]) => {
      queryClient.setQueryData<ItemType[]>(["guestCart"], items);
   };

   return <CartWrapper cart={cart} onSave={handleSave} />;
}

function Cart() {
   const { user } = useUser();

   if (user) {
      return <AuthenticatedCart userId={user.ID} />;
   }

   return <GuestCart />;
}
export default Cart;
