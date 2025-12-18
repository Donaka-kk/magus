import {
   faChevronLeft,
   faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

interface PaginatorProps {
   currentPage: number;
   totalPages: number;
   goToPage: (page: number) => void;
   nextPage: () => void;
   prevPage: () => void;
}

function Paginator({
   nextPage,
   prevPage,
   goToPage,
   currentPage,
   totalPages,
}: PaginatorProps) {
   return (
      <div className="flex justify-center items-center">
         <div className="flex justify-center items-center gap-4 border border-black rounded-lg p-1">
            <button
               onClick={() => prevPage()}
               className="w-7 h-7 border border-black rounded-full active:scale-95"
            >
               <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {currentPage - 3 > 0 && <span>...</span>}
            {currentPage - 2 > 0 && (
               <button
                  onClick={() => goToPage(currentPage - 2)}
                  className="active:scale-95"
               >
                  {currentPage - 2}
               </button>
            )}
            {currentPage - 1 > 0 && (
               <button
                  onClick={() => goToPage(currentPage - 1)}
                  className="active:scale-95"
               >
                  {currentPage - 1}
               </button>
            )}
            <p className="font-bold text-lg">{currentPage}</p>
            {currentPage + 1 <= totalPages && (
               <button
                  onClick={() => goToPage(currentPage + 1)}
                  className="active:scale-95"
               >
                  {currentPage + 1}
               </button>
            )}
            {currentPage + 2 <= totalPages && (
               <button
                  onClick={() => goToPage(currentPage + 2)}
                  className="active:scale-95"
               >
                  {currentPage + 2}
               </button>
            )}
            {currentPage + 3 <= totalPages && <span>...</span>}
            <button
               onClick={() => nextPage()}
               className="w-7 h-7 border border-black rounded-full active:scale-95"
            >
               <FontAwesomeIcon icon={faChevronRight} />
            </button>
         </div>
      </div>
   );
}

export default memo(Paginator);
