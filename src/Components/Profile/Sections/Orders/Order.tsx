import NotifyPopUp from "../../../Layout/NotifyPopUp.tsx";

import { OrderType } from "../../../../Types/OrderType.tsx";
import { useState } from "react";

interface OrderProps {
   order: OrderType;
}

function Order({ order }: OrderProps) {
   const [notifyPopUp, setNotifyPopUp] = useState<OrderType>();

   return (
      <>
         {notifyPopUp && (
            <NotifyPopUp
               subject={`Purchase on date : ${order.purchaseDate}`}
               order={order}
               handleClosingPopUp={() => setNotifyPopUp(undefined)}
            />
         )}
         <div
            onClick={() => setNotifyPopUp(order)}
            className="h-24 md:h-14 flex flex-col md:flex-row justify-around items-center border rounded-lg shadow-xl active:scale-95 active:shadow-inner text-sm md:text-base p-1"
         >
            <p className="full md:w-2/4 text-center">
               Purchase date: {order.purchaseDate}
            </p>
            <p className="full md:w-1/4 text-center">
               Total price: {order.totalPrice}$
            </p>
            <p className="full md:w-1/4 text-center">Status: {order.status}</p>
         </div>
      </>
   );
}
export default Order;
