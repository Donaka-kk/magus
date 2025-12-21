import axios from "axios";
import ProductWrapper from "../Components/ProductProfile/ProductWrapper.tsx";

import { ProductSchemeType } from "../Types/ProductType.tsx";
import { useSearchParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ProductDummyData } from "../Components/API/ProductDummyData.tsx";
import { useCart } from "../Components/Hooks/useCart.ts";
import { useWishlist } from "../Components/Hooks/useWishlist.ts";

const Product = () => {
   const [params] = useSearchParams();
   const id = params.get("id");

   const { data } = useSuspenseQuery({
      queryKey: ["Product", id],
      queryFn: async () => {
         const response = await axios.get<ProductSchemeType>(
            `https://reqres.in/api/users/${id}`,
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         //change this to response before build
         return ProductDummyData || response;
      },
   });

   const { handleAdd: handleAddToCart, isPending: isCartPending } = useCart(
      data.name,
      data.id
   );
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
