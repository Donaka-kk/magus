import axios from "axios";
import ProductUpsertWrapper from "../AdminComponents/ProductUpsert/ProductUpsertWrapper.tsx";

import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ProductSchemeType, NewProductType } from "../Types/ProductType.tsx";
import {
   ProductUpsertDummyData,
   DummyCategories,
} from "../Components/API/ProductUpsertDummyData.tsx";

function ItemUpsert() {
   const [searchParams] = useSearchParams();
   const param = searchParams.get("id");

   const handleSubmit = (formData: NewProductType, isEdit: boolean) => {
      console.log(formData);
      console.log(isEdit);
   };

   const {
      data: categories,
      isPending: categoriesPending,
      isError: categoriesError,
   } = useQuery<string[]>({
      queryKey: ["Categories"],
      queryFn: async () => {
         const response = await axios.get<string[]>(
            `https://reqres.in/api/users`,
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         //change this to response before build
         return DummyCategories || response;
      },
   });

   const {
      data: product,
      isPending: productPending,
      isError: productError,
   } = useQuery<ProductSchemeType>({
      queryKey: ["Product", param],
      queryFn: async () => {
         const response = (await axios.get)<ProductSchemeType>(
            `https://reqres.in/api/users/${param}`,
            {
               headers: {
                  "x-api-key": "reqres-free-v1",
               },
            }
         );
         //change this to response before build
         return ProductUpsertDummyData || response;
      },
      enabled: !!param,
   });

   if ((param && productPending) || categoriesPending)
      return <div>...loading</div>;
   if ((param && productError) || categoriesError) return <div>...failed</div>;

   return (
      <ProductUpsertWrapper
         handleSubmit={handleSubmit}
         product={param ? product : undefined}
         categories={categories}
      />
   );
}
export default ItemUpsert;
