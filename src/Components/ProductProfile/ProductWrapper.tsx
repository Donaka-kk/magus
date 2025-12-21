import ImageCarousel from "./ImageCarousel.tsx";
import BasicInfo from "./BasicInfo.tsx";
import AdditionalInfo from "./AdditionalInfo.tsx";
import ProductOptions from "./ProductOptions.tsx";
import Navigator from "./Navigator.tsx";

import { ProductSchemeType } from "../../Types/ProductType";
import { ImageCarouselDummyData } from "../API/ImageCarouselDummyData.tsx";
import { useState } from "react";

interface ProductWrapperProps {
   product: ProductSchemeType;
   handleAddToCart: (size: string, color: string, quantity: number) => void;
   handleWishlistButton: () => void;
   isInWishlist: boolean;
   isWishlistPending: boolean;
   isCartPending: boolean;
}

function ProductWrapper({
   product,
   handleAddToCart,
   handleWishlistButton,
   isInWishlist,
   isWishlistPending,
   isCartPending,
}: ProductWrapperProps) {
   const [selectedSize, setSelectedSize] = useState<string>(
      product.selectedSize
   );
   const [selectedColor, setSelectedColor] = useState<string>(
      product.selectedColor
   );
   const [quantity, setQuantity] = useState<number>(1);

   const handleChangeSize = (size: string) => {
      setSelectedSize(size);
   };
   const handleChangeColor = (color: string) => {
      setSelectedColor(color);
   };
   const handleChangeQuantity = (quantity: number) => {
      setQuantity(Math.max(1, Math.min(99, quantity)));
   };

   return (
      <div className="w-full flex flex-col md:flex-row gap-2 p-2 md:p-4">
         <div className="w-full md:w-1/2">
            <ImageCarousel
               images={ImageCarouselDummyData}
               discount={product.discount}
            />
         </div>
         <div className="w-full md:w-1/2 flex flex-col gap-2">
            <BasicInfo product={product} />
            <AdditionalInfo product={product} />
            <ProductOptions
               sizes={product.sizes}
               colors={product.colors}
               price={product.price}
               handleChangeSize={handleChangeSize}
               selectedSize={selectedSize}
               handleChangeColor={handleChangeColor}
               selectedColor={selectedColor}
               handleChangeQuantity={handleChangeQuantity}
               quantity={quantity}
            />
            <Navigator
               handleAddToCart={() => {
                  if (!product) return;
                  handleAddToCart(selectedSize, selectedColor, quantity);
               }}
               handleWishlistButton={handleWishlistButton}
               isInWishlist={isInWishlist}
               isWishlistPending={isWishlistPending}
               isCartPending={isCartPending}
            />
         </div>
      </div>
   );
}
export default ProductWrapper;
