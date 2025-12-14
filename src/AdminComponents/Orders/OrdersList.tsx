import Order from "./Order.tsx";

import { memo } from "react";
import { OrderType } from "../../Types/OrderType";

interface OrderListProps {
   orders: OrderType[];
   toOpenModal: (order: OrderType) => void;
}

function OrdersList({ orders, toOpenModal }: OrderListProps) {
   console.log("OrdersList");
   return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
         {orders.map((order) => {
            return (
               <Order key={order.id} order={order} toOpenModal={toOpenModal} />
            );
         })}
      </div>
   );
}

export default memo(OrdersList);
