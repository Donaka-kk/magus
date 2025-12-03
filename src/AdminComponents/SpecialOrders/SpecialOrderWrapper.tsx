import SpecialOrder from "./SpecialOrder.tsx";
import SpecialOrderPopUp from "./SpecialOrderPopUp.tsx";

import { SpecialOrderType } from "../../Types/SpecialOrderType.tsx";
import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";

interface SpecialOrdersWrapperProps {
   orders: SpecialOrderType[];
}

function OrdersWrapper({ orders }: SpecialOrdersWrapperProps) {
   const [showModal, setShowModal] = useState<boolean>(false);
   const [selectedOrder, setSelectedOrder] = useState<SpecialOrderType | null>(
      null
   );
   const nav = useNavigate();
   const toOpenModal = useCallback((order: SpecialOrderType) => {
      console.log(order);
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
               onClick={() =>
                  nav("/admin/panel/specialorders?section=proccessing")
               }
               className="p-2 border border-black rounded-xl"
            >
               "Proccessing" Orders
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
         {showModal && selectedOrder && (
            <SpecialOrderPopUp
               order={selectedOrder}
               toClose={() => setShowModal(false)}
            />
         )}
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {orders.map((order) => {
               return (
                  <SpecialOrder
                     key={order.id}
                     order={order}
                     toOpenModal={toOpenModal}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default OrdersWrapper;
