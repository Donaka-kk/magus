import Card2 from "../Carousel/Card2.tsx";
import { ProductType } from "../../Types/ProductType";
interface SpecialOffersProps {
   SpecialOffers: ProductType[];
}
const SpecialOffers = ({ SpecialOffers }: SpecialOffersProps) => {
   return (
      <div className="w-full">
         <div className="flex w-full justify-center">
            <h1 className="text-center font-bold text-3xl my-5 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
               Special Offers For High Rating Products
            </h1>
         </div>
         <div className="flex flex-col items-center md:flex-row w-full gap-4">
            {SpecialOffers.map((product, index) => {
               return <Card2 key={index} product={product} />;
            })}
         </div>
      </div>
   );
};

export default SpecialOffers;
