import SpecialOrder from "./SpecialOrder.tsx";

import { SpecialOrderType } from "../../Types/SpecialOrderType.tsx";
import { memo } from "react";

interface SpecialOrderListProps {
   orders: SpecialOrderType[];
   toOpenModal: (order: SpecialOrderType) => void;
}

function SpecialOrderList({ orders, toOpenModal }: SpecialOrderListProps) {
   return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
         {orders.map((order) => {
            return (
               <SpecialOrder
                  key={order.id}
                  order={order}
                  toOpenModal={toOpenModal}
               />
            );
         })}
      </div>
   );
}

export default memo(SpecialOrderList);
