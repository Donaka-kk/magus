import Item from "./Item.tsx";

import { OrderType } from "../../Types/OrderType.tsx";

interface OrderPopUpProps {
   toClose: () => void;
   order: OrderType;
}

function OrderPopUp({ toClose, order }: OrderPopUpProps) {
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
            <div className="flex justify-between w-full">
               <span>{order.totalItems} items</span>
               <span>{order.totalPrice}$</span>
            </div>
            <p>{order.status}</p>
            <p className="">Order date : {order.purchaseDate}</p>
            <p className="">Shipped date : {order.shippedDate}</p>
            <p className="">Delivered date : {order.deliveredDate}</p>
            <div className="flex flex-col gap-2 p-1 border border-black max-h-96 overflow-auto">
               {order.items.map((item) => {
                  return <Item key={item.product.id} item={item} />;
               })}
            </div>
            <button onClick={toClose} className="p-1 border border-black">
               Close
            </button>
         </div>
      </div>
   );
}

export default OrderPopUp;
