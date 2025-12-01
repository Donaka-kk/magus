import CardList from "../CardList/CardList.tsx";
import ProductSelector from "../ProductSelector/ProductSelector.tsx";

import { useState } from "react";
import { ProductSchemeType } from "../../Types/ProductType.tsx";

interface SpecialOffersWrapperProps {
   products: ProductSchemeType[];
   toEditList: (products: number[]) => void;
}

function SpecialOffersWrapper({
   products,
   toEditList,
}: SpecialOffersWrapperProps) {
   const [addProductForm, setAddProductForm] = useState<boolean>(false);
   return (
      <div>
         {addProductForm && (
            <ProductSelector toClose={() => setAddProductForm(false)} />
         )}
         <CardList
            products={products}
            toEditList={toEditList}
            toOpenForm={() => setAddProductForm(true)}
         />
      </div>
   );
}

export default SpecialOffersWrapper;
