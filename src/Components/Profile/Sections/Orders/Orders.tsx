import Order from "./Order.tsx";
import { OrderType } from "../../../../Types/OrderType";
import { useState } from "react";
import NotifyingPopUp from "../../../Layout/NotifyingPopUp.tsx";
import { ItemType } from "../../../../Types/ItemType.tsx";

interface OrdersProps {
   orders: OrderType[];
}

function Orders({ orders }: OrdersProps) {
   const [popUp, setPopUp] = useState<React.ReactNode>(null);
   const createPopUp = (order: OrderType) => {
      setPopUp(
         <NotifyingPopUp
            subject={`Purchase on date : ${order.purchaseDate}`}
            order={order}
            handleClosingPopUp={() => setPopUp(null)}
         />
      );
   };

   return (
      <div className="flex flex-col w-full h-full gap-2">
         {popUp}
         {orders.map((order, index) => {
            return (
               <Order key={index} order={order} createPopUp={createPopUp} />
            );
         })}
      </div>
   );
}
export default Orders;
