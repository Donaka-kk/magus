import { OrderType } from "../../../../Types/OrderType";
import { ItemType } from "../../../../Types/ItemType";

interface OrderProps {
   order: OrderType;
   createPopUp: (order: OrderType) => void;
}
function Order({ order, createPopUp }: OrderProps) {
   return (
      <div
         onClick={() => createPopUp(order)}
         className="flex flex-row justify-between items-center border-2 border-black hover:cursor-pointer active:scale-90"
      >
         <p>Purchase date : {order.purchaseDate}</p>
         <p>Total items : {order.totalItems}</p>
         <p>Total price : {order.totalPrice}</p>
         <p>Discount : {order.discount}</p>
         <p>Status : {order.status}</p>
      </div>
   );
}
export default Order;
