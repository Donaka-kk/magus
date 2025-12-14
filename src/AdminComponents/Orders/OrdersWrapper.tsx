import OrdersList from "./OrdersList.tsx";
import OrderPopUp from "./OrderPopUp.tsx";

import { PageType } from "../../Types/PageType.tsx";
import { OrderType } from "../../Types/OrderType.tsx";
import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import Paginator from "../Pagination/Paginator.tsx";
import { UseMutationResult } from "@tanstack/react-query";

interface OrdersWrapperProps {
   page: PageType;
   nextPage: () => void;
   prevPage: () => void;
   changeStatus: UseMutationResult<any, Error, number>;
   section: string | null;
}

function OrdersWrapper({
   page,
   nextPage,
   prevPage,
   changeStatus,
   section,
}: OrdersWrapperProps) {
   console.log("OrdersWrapper");
   const [showModal, setShowModal] = useState<boolean>(false);
   const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);
   const nav = useNavigate();
   const toOpenModal = useCallback((order: OrderType) => {
      setShowModal(true);
      setSelectedOrder(order);
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
               onClick={() => nav("/admin/panel/orders?section=processing")}
               className={`p-2 border border-black rounded-xl ${section === "processing" && "text-primary bg-secondary font-semibold"}`}
            >
               "Proccessing" Orders
            </button>
            <button
               onClick={() => nav("/admin/panel/orders?section=shipped")}
               className={`p-2 border border-black rounded-xl ${section === "shipped" && "text-primary bg-secondary font-semibold"}`}
            >
               "Shipped" Orders
            </button>
            <button
               onClick={() => nav("/admin/panel/orders?section=delivered")}
               className={`p-2 border border-black rounded-xl ${section === "delivered" && "text-primary bg-secondary font-semibold"}`}
            >
               "Delivered" Orders
            </button>
         </div>
         {showModal && selectedOrder && (
            <OrderPopUp
               order={selectedOrder}
               toClose={() => setShowModal(false)}
               changeStatus={changeStatus}
            />
         )}
         <OrdersList orders={page.data} toOpenModal={toOpenModal} />
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
