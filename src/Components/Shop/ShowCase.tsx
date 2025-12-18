import Card2 from "../Carousel/Card2.tsx";
import LoadingComponent from "../Layout/LoadingComponent.js";

import { ProductSchemeType } from "../../Types/ProductType.tsx";

interface ShowCaseProps {
   products: ProductSchemeType[];
}

function ShowCase({ products }: ShowCaseProps) {
   return (
      <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 scroll-smooth">
            {products &&
               products.map((product, index) => {
                  return <Card2 key={index} product={product} />;
               })}
         </div>
      </div>
   );
}
export default ShowCase;
