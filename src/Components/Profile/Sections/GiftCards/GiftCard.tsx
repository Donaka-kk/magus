import { useState } from "react";
import { GiftCardType } from "../../../../Types/GiftCardType.tsx";
import NotifyPopUp from "../../../Layout/NotifyPopUp.tsx";

interface GiftCardProps {
   giftCard: GiftCardType;
}

function GiftCard({ giftCard }: GiftCardProps) {
   const [notifyPopUp, setNotifyPopUp] = useState<GiftCardType>();
   return (
      <>
         {notifyPopUp && (
            <NotifyPopUp
               subject={giftCard.subject}
               text={giftCard.code}
               handleClosingPopUp={() => setNotifyPopUp(undefined)}
            />
         )}

         <button
            onClick={() => setNotifyPopUp(giftCard)}
            className={`relative flex flex-row justify-around items-center border-2 active:scale-95 border-black ${giftCard.used === false ? " text-black" : " text-gray-400"}`}
         >
            <h1 className="text-xl font-semibold">{giftCard.subject}</h1>
            <div className="text-sm p-2">
               <p>Discount: {giftCard.dicount}%</p>
               <p>
                  for purchases between {giftCard.minimalPurchase}$ and{" "}
                  {giftCard.maximalPurchase}$
               </p>
            </div>
         </button>
      </>
   );
}
export default GiftCard;
