import axios from "axios";
import ProductsWrapper from "../AdminComponents/Products/ProductsWrapper.tsx";

import { useQuery } from "@tanstack/react-query";
import { CarouselDummyData } from "../Components/API/CarouselDummyData.tsx";
import { ProductSchemeType } from "../Types/ProductType.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function AdminProducts() {
   console.log("AdminProduct");
   const queryClient = useQueryClient();

   const handleDelete = (productId: number, productName: string) => {
      if (productId === 0) return;
      deletion.mutate({ productId, productName });
   };

   const deletion = useMutation({
      mutationKey: ["req"],
      mutationFn: async (data: { productId: number; productName: string }) => {
         console.log("deleting...");
         const response = await axios.post<ProductSchemeType[]>(
            "https://reqres.in/api/login",
            JSON.stringify({
               email: "eve.holt@reqres.in",
               password: "cityslicka",
            }),
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
                  "Content-Type": "application/json",
               },
            }
         );
         return response;
      },
      onSuccess: async () => {
         console.log("invalidation...");
         await queryClient.invalidateQueries({ queryKey: ["AllProducts"] });
      },
   });

   const { data, isPending, isError } = useQuery({
      queryKey: ["AllProducts"],
      queryFn: async () => {
         const response = await axios.get<ProductSchemeType[]>(
            "https://reqres.in/api/users/1",
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         //change this to response before build
         return CarouselDummyData || response;
      },
   });

   if (isPending) return <div>...loading</div>;
   if (isError) return <div>...failed</div>;

   return (
      <ProductsWrapper
         products={data}
         handleDelete={handleDelete}
         deletion={deletion}
      />
   );
}
export default AdminProducts;
