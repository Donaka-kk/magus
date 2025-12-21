interface NavigatorProps {
   handleAddToCart: () => void;
   handleWishlistButton: () => void;
   isInWishlist: boolean;
   isWishlistPending: boolean;
   isCartPending: boolean;
}
function Navigator({
   handleAddToCart,
   handleWishlistButton,
   isInWishlist,
   isWishlistPending,
   isCartPending,
}: NavigatorProps) {
   return (
      <div className="flex justify-center w-full rounded-lg gap-4">
         <button
            onClick={handleWishlistButton}
            disabled={isWishlistPending}
            className={`border-2 rounded-md px-2 py-1 ${isWishlistPending ? "border-gray-500 text-gray-500" : "border-black text-black active:scale-95"} `}
         >
            {isWishlistPending
               ? "Add to wishlist"
               : isInWishlist
                 ? "Remove from wishlist"
                 : "Add to wishlist"}
         </button>
         <button
            onClick={() => handleAddToCart()}
            disabled={isCartPending}
            className={`border-2 rounded-md px-2 py-1 ${isCartPending ? "border-gray-500 text-gray-500" : "border-black text-black active:scale-95"} `}
         >
            {isCartPending ? "Updating" : "Add to cart"}
         </button>
      </div>
   );
}
export default Navigator;
