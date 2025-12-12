import ProductCard from "./ProductCard.tsx";

import { ProductSchemeType } from "../../Types/ProductType.tsx";

interface CardListProps {
   products: ProductSchemeType[];
   handleMoveToLeft: (index: number) => void;
   handleMoveToRight: (index: number) => void;
   handleRemoveProduct: (index: number) => void;
}

function CardList({
   products,
   handleMoveToLeft,
   handleMoveToRight,
   handleRemoveProduct,
}: CardListProps) {
   return (
      <div className="flex flex-col p-2 md:p-4 gap-4">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {products.map((product, index) => {
               return (
                  <ProductCard
                     key={product.id}
                     product={product}
                     index={index}
                     moveToLeft={handleMoveToLeft}
                     moveToRight={handleMoveToRight}
                     removeProduct={handleRemoveProduct}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default CardList;
