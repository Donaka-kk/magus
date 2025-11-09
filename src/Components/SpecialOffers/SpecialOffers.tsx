import Card2 from "../Carousel/Card2.tsx";
import Card3 from "../Cards/Card3.tsx";

import { ProductSchemeType } from "../../Types/ProductType";
import { useBreakPoint } from "./UseBreakPoint.tsx";
interface SpecialOffersProps {
   SpecialOffers: ProductSchemeType[];
}
const SpecialOffers = ({ SpecialOffers }: SpecialOffersProps) => {
   const breakpoint = useBreakPoint();
   //
   const firstGrid = SpecialOffers.slice(0, breakpoint);
   const secondGrid = SpecialOffers.slice(breakpoint, 5);
   //
   return (
      <div className="w-full">
         <div className="flex w-full justify-center">
            <h1 className="text-center font-bold text-3xl my-5 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
               Special Offers For High Rating Products
            </h1>
         </div>
         <div className="w-full grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:justify-center sm:gap-4 p-2">
            {/* <div className="w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 justify-center gap-2 p-2"> */}
            {/* {SpecialOffers.map((product, index) => {
               return <Card3 key={index} product={product} />;
            })} */}
            {firstGrid.map((product, index) => {
               return <Card3 key={index} product={product} />;
            })}
         </div>
         <div className="flex flex-row justify-center gap-2 p-2">
            {secondGrid.map((product, index) => {
               return <Card3 key={index} product={product} />;
            })}
         </div>
      </div>
   );
};

export default SpecialOffers;
