import { SpecialOrderType } from "../../Types/SpecialOrderType.tsx";

interface SpecialOrderPopUpProps {
   toClose: () => void;
   order: SpecialOrderType;
}

function OrderPopUp({ toClose, order }: SpecialOrderPopUpProps) {
   return (
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center z-20">
         <div
            onClick={() => toClose()}
            className="absolute w-full h-full bg-transparent06"
         />
         <div className="flex flex-col gap-2 p-2 border rounded-xl shadow-xl z-10 bg-red-100">
            <div className="flex justify-between w-full">
               <span>{order.customerName}</span>
               <span>{order.customerId}</span>
            </div>
            <p>{order.status}</p>
            <p className="">Order date : {order.orderedDate}</p>
            <p className="">Shipped date : {order.shippedDate}</p>
            <p className="">Delivered date : {order.deliveredDate}</p>
            <img src={order.image} alt="specialOrderImage" className="w-40" />
            <p>{order.description}</p>
            <button onClick={toClose} className="p-1 border border-black">
               Close
            </button>
         </div>
      </div>
   );
}

export default OrderPopUp;
