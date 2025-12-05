import SpecialOrderPopUp from "./SpecialOrderPopUp.tsx";
import Paginator from "../Pagination/Paginator.tsx";
import SpecialOrderList from "./SpecialOrderList.tsx";

import { PageType } from "../../Types/PageType.tsx";
import { SpecialOrderType } from "../../Types/SpecialOrderType.tsx";
import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";

interface SpecialOrdersWrapperProps {
   page: PageType;
   nextPage: () => void;
   prevPage: () => void;
}

function OrdersWrapper({
   page,
   nextPage,
   prevPage,
}: SpecialOrdersWrapperProps) {
   const [showModal, setShowModal] = useState<boolean>(false);
   const [Order, setOrder] = useState<SpecialOrderType | null>(null);
   const nav = useNavigate();

   const toOpenModal = useCallback((order: SpecialOrderType) => {
      setShowModal(true);
      setOrder(order);
   }, []);

   return (
      <div className="flex flex-col gap-2 md:gap-4 p-2 md:p-4">
         <div className="w-full text-center flex gap-2 justify-center">
            <button
               onClick={() => nav("/admin/panel")}
               className="p-2 border border-black rounded-xl"
            >
               Back to panel
            </button>
            <button
               onClick={() =>
                  nav("/admin/panel/specialorders?section=processing")
               }
               className="p-2 border border-black rounded-xl"
            >
               "Processing" Orders
            </button>
            <button
               onClick={() => nav("/admin/panel/specialorders?section=shipped")}
               className="p-2 border border-black rounded-xl"
            >
               "Shipped" Orders
            </button>
            <button
               onClick={() =>
                  nav("/admin/panel/specialorders?section=delivered")
               }
               className="p-2 border border-black rounded-xl"
            >
               "Delivered" Orders
            </button>
         </div>
         {showModal && Order && (
            <SpecialOrderPopUp
               order={Order}
               toClose={() => setShowModal(false)}
            />
         )}
         <SpecialOrderList orders={page.data} toOpenModal={toOpenModal} />
         <Paginator
            currentPage={page.pageNumber}
            totalPages={page.totalPages}
            nextPage={nextPage}
            prevPage={prevPage}
         />
      </div>
   );
}

export default OrdersWrapper;
