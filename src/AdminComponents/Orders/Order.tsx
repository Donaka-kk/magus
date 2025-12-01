import { useState, memo } from "react";
import { OrderType } from "../../Types/OrderType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface OrderProps {
   order: OrderType;
   toOpenModal: (order: OrderType) => void;
}

function Order({ order, toOpenModal }: OrderProps) {
   const [showDates, setShowDates] = useState<boolean>(false);

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
         <div className="relative">
            <div className="relative h-8" />
            <div className="absolute top-0 left-0 w-full flex flex-row justify-between border border-black rounded-lg p-1 bg-red-300">
               <div
                  className={`w-full flex flex-col overflow-hidden gap-1 duration-200 ${showDates ? "h-20" : "h-6"}`}
               >
                  <p className="">Order date : {order.purchaseDate}</p>
                  <p className="">Shipped date : {order.shippedDate}</p>
                  <p className="">Delivered date : {order.deliveredDate}</p>
               </div>
               <div>
                  {showDates ? (
                     <button onClick={() => setShowDates(false)}>
                        <FontAwesomeIcon icon={faChevronUp} />
                     </button>
                  ) : (
                     <button onClick={() => setShowDates(true)}>
                        <FontAwesomeIcon icon={faChevronDown} />
                     </button>
                  )}
               </div>
            </div>
         </div>

         <div className="flex flex-col flex-1">
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
