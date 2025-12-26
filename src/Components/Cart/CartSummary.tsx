import axios from "axios";

import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

interface CartSummaryProps {
   totalItems: number;
   totalPrice: number;
}

function CartSummary({ totalItems, totalPrice }: CartSummaryProps) {
   const [shippingMethid, setShippingMethod] = useState("Snap");
   const [promoCode, setPromoCode] = useState<string>();
   const [discount, setDiscount] = useState<number>(0);
   const [message, setMessage] = useState<string>("");

   const discountValidation = useMutation({
      mutationFn: async () => {
         console.log(promoCode);
         const discountAmount = 10;
         const response = await axios.post(
            "https://reqres.in/api/login",
            {
               email: "eve.holt@reqres.in",
               password: "cityslicka",
            },
            {
               headers: {
                  "x-api-key": process.env.REACT_APP_REQRES_KEY,
               },
            }
         );
         return discountAmount || response;
      },
      onSuccess(data) {
         setMessage("");
         setDiscount(data);
      },
      onError() {
         setMessage("Promo code not found or expired");
      },
   });

   return (
      <div className="sticky top-[16vh] flex flex-col h-fit items-center border-2 border-black p-6">
         <div className="flex flex-col w-full border-b-2 border-black pb-4 gap-2">
            <h1 className="w-full text-center font-bold text-xl">
               Order Summary
            </h1>
            <div>
               <p>Shipping method</p>
               <select
                  id="shipping"
                  value={shippingMethid}
                  onChange={(e) => setShippingMethod(e.target.value)}
                  className="w-full border border-black focus:outline-none"
               >
                  <option value="Snap">Snap</option>
                  <option value="Tipax">Tipax</option>
               </select>
            </div>
            <div className="flex gap-2">
               <input
                  className="w-1/2 border border-black pl-1"
                  placeholder="Promo code"
                  onChange={(e) => setPromoCode(e.target.value)}
               />
               <button
                  onClick={() => {
                     if (totalItems === 0) setMessage("Your cart is empty");
                     else if (!promoCode) setMessage("Enter promo code first");
                     else discountValidation.mutate();
                  }}
                  className="w-1/2 border border-black"
               >
                  Apply
               </button>
            </div>
            <p className="text-red-500 font-semibold text-center">{message}</p>
            <div className="flex flex-row w-full h-fit justify-between">
               <span>{totalItems} Items</span>
               <span>${totalPrice.toFixed(0)}</span>
            </div>
            <div className="flex flex-row w-full h-fit justify-between">
               <div className="flex gap-2">
                  <span>Discounts</span>
                  <button>
                     <FontAwesomeIcon icon={faCircleInfo} />
                  </button>
               </div>
               <span>${discount}</span>
            </div>
         </div>
         <div className="flex flex-row w-full h-fit justify-between">
            <span>Total</span>
            <span>${(totalPrice - discount).toFixed(0)}</span>
         </div>
         <button className="w-1/2 bg-black text-white my-4">Checkout</button>
      </div>
   );
}
export default CartSummary;
