import axios from "axios";
import ProductWrapper from "../Components/ProductProfile/ProductWrapper.tsx";

import { useSearchParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useCart } from "../Components/Hooks/useCart.ts";
import { useWishlist } from "../Components/Hooks/useWishlist.ts";

const Product = () => {
   const [params] = useSearchParams();
   const id = params.get("id");

   const { data } = useSuspenseQuery({
      queryKey: ["Product", id],
      queryFn: async () => {
         const response = await axios.get(
            `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/AllProducts?id=eq.${id}&select=*,AllProductsComments(*,AllProductsCommentsScores(*)),AllProductsScore(*)`,
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

   const { handleAdd: handleAddToCart, isPending: isCartPending } =
      useCart(data);
   const {
      editWishlist: handleWishlistButton,
      isPending: isWishlistPending,
      isInWishlist,
   } = useWishlist(data);
   return (
      <ProductWrapper
         product={data}
         handleWishlistButton={handleWishlistButton}
         handleAddToCart={handleAddToCart}
         isInWishlist={isInWishlist}
         isWishlistPending={isWishlistPending}
         isCartPending={isCartPending}
      />
   );
};

export default Product;
