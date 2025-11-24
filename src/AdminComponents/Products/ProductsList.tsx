import { memo } from "react";
import Product from "./Product.tsx";

import { ProductSchemeType } from "../../Types/ProductType.tsx";

interface ProductsListProps {
   products: ProductSchemeType[];
   onDeleteRequest: (productName: string, productId: number) => void;
}

function ProductsList({ products, onDeleteRequest }: ProductsListProps) {
   console.log("ProductList");
   return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
         {products.map((product) => {
            return (
               <Product
                  key={product.id}
                  product={product}
                  onDeleteRequest={onDeleteRequest}
               />
            );
         })}
      </div>
   );
}
export default memo(ProductsList);
