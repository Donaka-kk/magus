import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ShopNavigatorType {
   currentPage: number;
   allPages: number;
   nextPage: () => void;
   prevPage: () => void;
}

function ShopNavigator({
   currentPage,
   allPages,
   nextPage,
   prevPage,
}: ShopNavigatorType) {
   return (
      <div className="w-full h-7 flex justify-center text-sm sm:text-base products-center gap-2 mt-3">
         <button
            onClick={() => prevPage()}
            className={`px-1 border border-black rounded-sm ${currentPage > 1 ? " active:scale-95" : " opacity-50"}`}
            disabled={!(currentPage > 1)}
         >
            <FontAwesomeIcon icon={faArrowLeft} />
         </button>
         <p className="text-sm sm:text-base lg:text-large">
            Page {currentPage} from {allPages}
         </p>
         <button
            onClick={() => nextPage()}
            className={`px-1 border border-black rounded-sm ${currentPage < allPages ? " active:scale-95" : " opacity-50"}`}
            disabled={!(currentPage < allPages)}
         >
            <FontAwesomeIcon icon={faArrowRight} />
         </button>
      </div>
   );
}
export default ShopNavigator;
