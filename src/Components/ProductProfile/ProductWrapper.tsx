import ImageCarousel from "./ImageCarousel.tsx";
import BasicInfo from "./BasicInfo.tsx";
import AdditionalInfo from "./AdditionalInfo.tsx";
import ProductOptions from "./ProductOptions.tsx";
import Navigator from "./Navigator.tsx";

import { ProductSchemeType } from "../../Types/ProductType";
import { ImageCarouselDummyData } from "../API/ImageCarouselDummyData.tsx";
interface ProductWrapperProps {
   product: ProductSchemeType;
   handleChangeSize: (size: string) => void;
   handleChangeColor: (color: string) => void;
   handleAddToCart: () => void;
   handleAddToWishlist: () => void;
}

function ProductWrapper({
   product,
   handleChangeSize,
   handleChangeColor,
   handleAddToCart,
   handleAddToWishlist,
}: ProductWrapperProps) {
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
               product={product}
               handleChangeColor={handleChangeColor}
               handleChangeSize={handleChangeSize}
            />
            <Navigator
               handleAddToCart={handleAddToCart}
               handleAddToWishlist={handleAddToWishlist}
            />
         </div>
      </div>
   );
}
export default ProductWrapper;
