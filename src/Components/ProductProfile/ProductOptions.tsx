interface ProductScheme {
   id: string | number;
   name: string;
   price: number;
   score: number;
   image: string;
   discount: number | null;
   available: boolean;
   sales: number;
   category: string;
   colors: string[];
   selectedColor: string;
   sizes: string[];
   selectedSize: string;
}

interface ProductOptionsProps {
   product: ProductScheme;
   handleChangeSize: (size: string) => void;
   handleChangeColor: (color: string) => void;
}

function ProductOptions({
   product,
   handleChangeSize,
   handleChangeColor,
}: ProductOptionsProps) {
   if (!product) return;
   return (
      <div>
         <h1>Product Options</h1>
         <div>
            <h1>colors :</h1>
            {product.colors.map((color, index) => {
               return (
                  <button
                     key={index}
                     className={`active:scale-95 w-10 h-10  ${color === product.selectedColor ? " border-2 border-black" : " border-2 border-gray-400"}`}
                     style={{ backgroundColor: color }}
                     onClick={() => {
                        handleChangeColor(color);
                     }}
                  />
               );
            })}
         </div>
         <div>
            <h1>sizes :</h1>
            {product.sizes.map((size, index) => {
               return (
                  <button
                     key={index}
                     className={`active:scale-95 rounded-lg p-1 ${size === product.selectedSize ? "border-2 border-black" : "border-2 border-gray-400 "}`}
                     onClick={() => {
                        handleChangeSize(size);
                     }}
                  >
                     {size}
                  </button>
               );
            })}
         </div>
      </div>
   );
}
export default ProductOptions;
