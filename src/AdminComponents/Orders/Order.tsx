import { memo } from "react";
import { OrderType } from "../../Types/OrderType";

interface OrderProps {
   order: OrderType;
   toOpenModal: (order: OrderType) => void;
}

function Order({ order, toOpenModal }: OrderProps) {
   console.log("Order");
   return (
      <div className="flex flex-col gap-2 p-2 border rounded-xl shadow-xl">
         <div className="flex justify-between w-full">
            <span>{order.customerName}</span>
            <span>{order.customerId}</span>
         </div>
         <div className="flex justify-between w-full">
            <span>{order.totalItems} items</span>
            <span>{order.totalPrice}$</span>
         </div>
         <p>{order.status}</p>
         <div className="flex flex-col flex-1 border border-black p-1">
            {order.items[0] && (
               <p className="flex justify-between">
                  <span>{order.items[0].product.name}</span>
                  <span>x{order.items[0].count}</span>
               </p>
            )}
            {order.items[1] && (
               <p className="flex justify-between">
                  <span>{order.items[1].product.name}</span>
                  <span>x{order.items[1].count}</span>
               </p>
            )}
            {order.items[2] && (
               <p className="flex justify-between">
                  <span>{order.items[2].product.name}</span>
                  <span>x{order.items[2].count}</span>
               </p>
            )}
            {order.items[3] && (
               <p className="text-center text-gray-400 h-fit">more...</p>
            )}
         </div>
         <button
            onClick={() => toOpenModal(order)}
            className="p-1 border border-black"
         >
            More info
         </button>
      </div>
   );
}

export default memo(Order);
