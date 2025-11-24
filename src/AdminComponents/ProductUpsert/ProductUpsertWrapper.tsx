import ProductForm from "./ProductForm.tsx";

import {
   ProductSchemeType,
   NewProductType,
} from "../../../Types/ProductType.tsx";

interface ProductUpsertWrapperProps {
   product?: ProductSchemeType;
   handleSubmit: (formData: NewProductType, isEdit: boolean) => void;
   categories: string[];
}

function ProductUpsertWrapper({
   handleSubmit,
   product,
   categories,
}: ProductUpsertWrapperProps) {
   return (
      <div className="bg-background flex justify-center">
         <div className="w-full md:w-8/12 p-2 md:p-4">
            <ProductForm
               handleSubmit={handleSubmit}
               product={product}
               categories={categories}
            />
         </div>
      </div>
   );
}
export default ProductUpsertWrapper;
