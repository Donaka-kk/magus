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
            className="flex flex-row justify-between items-center border-2 border-black hover:cursor-pointer active:scale-90"
         >
            <p>Purchase date : {order.purchaseDate}</p>
            <p>Total items : {order.totalItems}</p>
            <p>Total price : {order.totalPrice}</p>
            <p>Discount : {order.discount}</p>
            <p>Status : {order.status}</p>
         </div>
      </>
   );
}
export default Order;
