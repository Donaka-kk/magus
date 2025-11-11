import axios from "axios";
import ProductInfo from "../Components/ProductProfile/ProductInfo.tsx";

import { useState } from "react";
import { ProductSchemeType } from "../Types/ProductType.tsx";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ProductDummyData } from "../Components/API/ProductDummyData.tsx";

const Product = () => {
   const [params] = useSearchParams();
   const [product, setProduct] = useState<ProductSchemeType | null>(null);
   const id = params.get("id");

   const handleChangeSize = (size: string) => {
      if (!product) return;
      setProduct({ ...product, selectedSize: size });
   };
   const handleChangeColor = (color: string) => {
      if (!product) return;
      setProduct({ ...product, selectedColor: color });
   };
   const handleAddToCart = () => {
      console.log("adding to cart");
   };

   const { data, isPending } = useQuery({
      queryKey: ["Product"],
      queryFn: async () => {
         const response = await axios.get<ProductSchemeType>(
            `https://reqres.in/api/users/${id}`,
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         //change this to response before build
         setProduct(ProductDummyData);
         return ProductDummyData || response;
      },
   });

   if (isPending) {
      return <div>...loading!</div>;
   }

   return (
      <div className="relative flex flex-row p-2 gap-2 md:p-4 md:gap-4 bg-background">
         <div className="flex">
            {data && (
               <ProductInfo
                  product={data}
                  handleChangeSize={handleChangeSize}
                  handleChangeColor={handleChangeColor}
                  handleAddToCart={handleAddToCart}
               />
            )}
         </div>
      </div>
   );
};

export default Product;
