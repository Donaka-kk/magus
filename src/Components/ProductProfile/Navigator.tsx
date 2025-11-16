interface NavigatorProps {
   handleAddToCart: () => void;
   handleAddToWishlist: () => void;
}
function Navigator({ handleAddToCart, handleAddToWishlist }: NavigatorProps) {
   return (
      <div className="flex justify-center w-full rounded-lg gap-4">
         <button
            onClick={() => handleAddToWishlist()}
            className="border-2 border-black rounded-md px-2 py-1 active:scale-95"
         >
            Add to wishlist
         </button>
         <button
            onClick={() => handleAddToCart()}
            className="border-2 border-black rounded-md px-2 py-1 active:scale-95"
         >
            Add To Cart
         </button>
      </div>
   );
}
export default Navigator;
