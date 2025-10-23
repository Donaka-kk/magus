import { useEffect, useState } from "react";
import { GiftCardType } from "../../../../Types/GiftCardType.tsx";
import LoadingComponent from "../../../Layout/LoadingComponent";
import GiftCard from "./GiftCard.tsx";
import NotifyingPopUp from "../../../Layout/NotifyingPopUp.tsx";

interface GiftCards {
   giftCards: GiftCardType[];
}

function GiftCards({ giftCards }: GiftCards) {
   const [status, setStatus] = useState<"loading" | "failed" | "succeed">(
      "loading"
   );
   const [popUp, setPopUp] = useState<React.ReactNode>(null);
   const createPopUp = (giftCard: GiftCardType) => {
      setPopUp(
         <NotifyingPopUp
            subject={giftCard.subject}
            text={`for purchases between ${giftCard.minimalPurchase}$ and ${giftCard.maximalPurchase}$ you have ${giftCard.dicount}% discount from ${giftCard.beginningDate} until ${giftCard.expirationDate}  :)`}
            code={giftCard.code}
            handleClosingPopUp={() => setPopUp(null)}
         />
      );
   };

   useEffect(() => {
      if (!giftCards) {
         setStatus("loading");
         const timer = setTimeout(() => {
            setStatus("failed");
         }, 5000);
         return () => clearTimeout(timer);
      } else {
         setStatus("succeed");
      }
   }, [giftCards]);
   if (status === "loading") {
      return <LoadingComponent failed={false} />;
   }

   if (status === "failed") {
      return <LoadingComponent failed={true} />;
   }
   return (
      <div>
         {popUp}
         <div className="flex flex-col w-full h-full gap-2">
            {giftCards?.map((giftCard, index) => {
               return (
                  <GiftCard
                     key={index}
                     giftCard={giftCard}
                     createPopUp={createPopUp}
                  />
               );
            })}
         </div>
      </div>
   );
}
export default GiftCards;
