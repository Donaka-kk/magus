import { OrderType } from "../../Types/OrderType";
interface NotifyingPopUpProps {
   subject: string;
   text?: string;
   code?: string;
   order?: OrderType;
   status?: string;
   toClose: () => void;
}

function NotifyPopUp({
   subject,
   text,
   code,
   order,
   status,
   toClose,
}: NotifyingPopUpProps) {
   return (
      <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-10">
         <div className="relative border border-black p-5 flex flex-col gap-5 bg-white z-30">
            <p>{subject}</p>
            <p>{text && text}</p>
            {status && <p>Status: {status}</p>}
            {code && <p>Code: {code}</p>}
            {order && (
               <div className="flex flex-col gap-2">
                  {order.items.map((item, index) => {
                     return (
                        <div
                           className="flex flex-row justify-around items-center"
                           key={index}
                        >
                           <span className="flex items-center gap-2">
                              <img
                                 src={item.product.image}
                                 alt={"productImage"}
                                 className="w-10 h-10"
                              />
                              {item.product.name}
                           </span>
                           <span>Count: {item.count}</span>
                        </div>
                     );
                  })}
               </div>
            )}
         </div>
         <div
            onClick={() => toClose()}
            className="absolute w-full h-full bg-transparent06 z-20"
         />
      </div>
   );
}
export default NotifyPopUp;
