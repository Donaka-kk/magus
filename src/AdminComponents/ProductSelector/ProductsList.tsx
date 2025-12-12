import { ProductSchemeType } from "../../Types/ProductType";

interface ProductsListProps {
   products: ProductSchemeType[];
   selectedProducts: number[];
   toggleProduct: (productID: number) => void;
}

function ProductsList({
   products,
   selectedProducts,
   toggleProduct,
}: ProductsListProps) {
   return (
      <div className="w-full h-full flex flex-col">
         <label>Products</label>
         <div className="w-full flex-1 border border-black p-1 gap-2 overflow-y-auto flex flex-col">
            {products?.map((product) => {
               return (
                  <label key={product.id} className="flex gap-2 items-center">
                     <input
                        type="checkbox"
                        value={product.id}
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => toggleProduct(product.id)}
                     />
                     {product.name}
                  </label>
               );
            })}
         </div>
      </div>
   );
}

export default ProductsList;
