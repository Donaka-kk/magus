import { SpecialOrderType } from "../../Types/SpecialOrderType";
import { useState, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface SpecialOrderProps {
   order: SpecialOrderType;
   toOpenModal: (order: SpecialOrderType) => void;
}

function SpecialOrder({ order, toOpenModal }: SpecialOrderProps) {
   const [showDates, setShowDates] = useState<boolean>(false);
   return (
      <div className="flex flex-col gap-2 p-2 border rounded-xl shadow-xl">
         <div className="flex justify-between w-full">
            <span>{order.customerName}</span>
            <span>{order.customerId}</span>
         </div>
         <p>{order.status}</p>
         <div className="relative">
            <div className="relative h-8" />
            <div className="absolute top-0 left-0 w-full flex flex-row justify-between border border-black rounded-lg p-1 bg-red-300">
               <div
                  className={`w-full flex flex-col overflow-hidden gap-1 duration-200 ${showDates ? "h-20" : "h-6"}`}
               >
                  <p className="">Order date : {order.orderedDate}</p>
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
         <img src={order.image} alt="specialOrderImage" />
         <p className="line-clamp-3">{order.description}</p>
         <button
            onClick={() => toOpenModal(order)}
            className="p-1 border border-black"
         >
            More info
         </button>
      </div>
   );
}

export default memo(SpecialOrder);
