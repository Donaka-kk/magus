import ProductsList from "./ProductsList.tsx";
import ApprovalPopUp from "../../Layout/ApprovalPopUp.tsx";
import NotifyPopUp from "../../Layout/NotifyPopUp.tsx";

import { ProductSchemeType } from "../../../Types/ProductType.tsx";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

interface ProductsWrapperProps {
   products: ProductSchemeType[];
   handleDelete: (productId: number, productName: string) => void;
   deletingStatus: string;
   toCloseNotify: () => void;
}
function ProductsWrapper({
   products,
   handleDelete,
   deletingStatus,
   toCloseNotify,
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
               toClose={() =>
                  setApproval({
                     message: "",
                     productName: "",
                     productId: 0,
                  })
               }
               onConfirm={() =>
                  handleDelete(approval.productId, approval.productName)
               }
            />
         )}
         {deletingStatus && (
            <NotifyPopUp subject={deletingStatus} toClose={toCloseNotify} />
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
