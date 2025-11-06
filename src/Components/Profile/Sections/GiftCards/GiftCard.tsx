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
            className={`relative h-28 md:h-14 flex flex-col md:flex-row justify-around items-center border rounded-lg shadow-xl active:scale-95 active:shadow-inner ${giftCard.used === false ? " text-black" : " text-gray-400"}`}
         >
            <h1 className="font-semibold lg:text-xl">{giftCard.subject}</h1>
            <p className="font-semibold lg:text-xl">
               Discount: {giftCard.dicount}%
            </p>
         </button>
      </>
   );
}
export default GiftCard;
