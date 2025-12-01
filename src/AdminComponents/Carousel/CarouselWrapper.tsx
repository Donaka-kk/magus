import CardList from "../CardList/CardList.tsx";
import ProductSelector from "../ProductSelector/ProductSelector.tsx";

import { useState } from "react";
import { ProductSchemeType } from "../../Types/ProductType.tsx";

interface CarouselWrapperProps {
   products: ProductSchemeType[];
   toEditList: (productsIds: number[]) => void;
}

function CarouselWrapper({ products, toEditList }: CarouselWrapperProps) {
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

export default CarouselWrapper;
