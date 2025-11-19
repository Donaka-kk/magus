import axios from "axios";
import ProductsWrapper from "../Components/AdminPanel/Products/ProductsWrapper.tsx";

import { useQuery } from "@tanstack/react-query";
import { CarouselDummyData } from "../Components/API/CarouselDummyData.tsx";
import { ProductSchemeType } from "../Types/ProductType.js";
import { useState } from "react";

function AdminProducts() {
   const [deletingStatus, setDeletingStatus] = useState<string>("");
   const handleDelete = (productId: number, productName: string) => {
      if (productId === 0) return;
      console.log("deleting...");
      setDeletingStatus(`${productName} deleted!`);
   };

   console.log("AdminProduct");
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
         deletingStatus={deletingStatus}
         toCloseNotify={() => setDeletingStatus("")}
      />
   );
}
export default AdminProducts;
