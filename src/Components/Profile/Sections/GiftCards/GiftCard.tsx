import { GiftCardType } from "../../../../Types/GiftCardType.tsx";

interface GiftCardProps {
   giftCard: GiftCardType;
   createPopUp: (giftCard: GiftCardType) => void;
}

function GiftCard({ giftCard, createPopUp }: GiftCardProps) {
   return (
      <button
         onClick={() => createPopUp(giftCard)}
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
   );
}
export default GiftCard;
