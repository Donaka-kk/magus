import Item from "./Item.tsx";

import { OrderType } from "../../Types/OrderType.tsx";
import { UseMutationResult } from "@tanstack/react-query";

interface OrderPopUpProps {
   toClose: () => void;
   changeStatus: UseMutationResult<any, Error, number>;
   order: OrderType;
}

function OrderPopUp({ toClose, order, changeStatus }: OrderPopUpProps) {
   console.log("OrderPopUp");
   return (
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center z-20">
         <div
            onClick={() => toClose()}
            className="absolute w-full h-full bg-transparent06"
         />
         <div className="flex flex-col relative w-9/12 sm:w-7/12 md:w-96 bg-white p-2 gap-2 text-sm md:text-base">
            <div>
               <h1 className="text-center text-xl font-semibold">
                  Order {order.id}
               </h1>
               <div className="flex justify-between w-full">
                  <span>{order.customerName}</span>
                  <span>{order.customerId}</span>
               </div>
               <div className="flex justify-between w-full">
                  <span>{order.totalItems} items</span>
                  <span>{order.totalPrice}$</span>
               </div>
               <div className="flex justify-between w-full">
                  <span>{order.discount}</span>
                  <span>paidPrice?</span>
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
            </div>
            <div className="flex justify-center gap-4">
               <button onClick={toClose} className="p-1 border border-black">
                  Close
               </button>
               {order.status === "processing" && (
                  <button
                     disabled={changeStatus.isPending}
                     onClick={() =>
                        changeStatus.mutate(order.id, {
                           onSuccess: () => {
                              toClose();
                           },
                        })
                     }
                     className="p-1 border border-black"
                  >
                     {changeStatus.isPending
                        ? "Updating..."
                        : "Move to shipped"}
                  </button>
               )}
               {order.status === "shipped" && (
                  <button
                     disabled={changeStatus.isPending}
                     onClick={() =>
                        changeStatus.mutate(order.id, {
                           onSuccess: () => {
                              toClose();
                           },
                        })
                     }
                     className="p-1 border border-black"
                  >
                     {changeStatus.isPending
                        ? "Updating..."
                        : "Move to delivered"}
                  </button>
               )}
            </div>
         </div>
      </div>
   );
}

export default OrderPopUp;
