import ProductsList from "./ProductsList.tsx";
import ApprovalPopUp from "../../Components/Layout/ApprovalPopUp.tsx";
import NotifyPopUp from "../../Components/Layout/NotifyPopUp.tsx";

import { ProductSchemeType } from "../../Types/ProductType.tsx";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { UseMutationResult } from "@tanstack/react-query";

interface ProductsWrapperProps {
   products: ProductSchemeType[];
   handleDelete: (productId: number, productName: string) => void;
   deletion: UseMutationResult<
      any,
      unknown,
      { productId: number; productName: string },
      unknown
   >;
}
function ProductsWrapper({
   products,
   handleDelete,
   deletion,
}: ProductsWrapperProps) {
   const nav = useNavigate();
   const [approval, setApproval] = useState<{
      message: string;
      productName: string;
      productId: number;
   } | null>(null);

   const onDeleteRequest = useCallback((name: string, id: number) => {
      setApproval({
         message: `Are you sure you want to delete ${name}?`,
         productName: name,
         productId: id,
      });
   }, []);

   console.log("ProductWrapper");
   return (
      <div className="min-w-screen min-h-screen bg-background">
         {approval?.message && (
            <ApprovalPopUp
               message={approval?.message}
               toClose={() => setApproval(null)}
               onConfirm={() =>
                  handleDelete(approval.productId, approval.productName)
               }
            />
         )}
         {(deletion.isSuccess || deletion.isError) && (
            <NotifyPopUp
               subject={
                  deletion.isSuccess ? "Deletion Successful" : "Deletion Failed"
               }
               toClose={() => deletion.reset()}
            />
         )}
         <div className="Container p-2 md:p-4">
            <div className="w-full flex justify-center gap-5">
               <button
                  onClick={() => nav("/admin/panel")}
                  className="p-2 border border-black rounded-xl"
               >
                  Back to panel
               </button>
               <button
                  onClick={() => nav("/admin/panel/productupsert")}
                  className="p-2 border border-black rounded-xl"
               >
                  Add new Product
               </button>
            </div>
            <ProductsList
               products={products}
               onDeleteRequest={onDeleteRequest}
            />
         </div>
      </div>
   );
}
export default ProductsWrapper;
