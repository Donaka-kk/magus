import Card2 from "../Carousel/Card2.tsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ShowCase({ items }) {
   const [page, setPage] = useState(0);
   const [disableNextBtn, setDisableNextBtn] = useState(false);
   const [disablePrevBtn, setDisablePrevBtn] = useState(true);

   const nextPage = () => {
      if ((page + 1) * 6 < items.length) {
         window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
         const newPage = page + 1;
         setPage(newPage);
         setDisablePrevBtn(false);
         if ((newPage + 1) * 6 >= items.length) setDisableNextBtn(true);
      }
   };
   const prevPage = () => {
      if (page > 0) {
         window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
         const newPage = page - 1;
         setPage(newPage);
         setDisableNextBtn(false);
         if (newPage === 0) {
            setDisablePrevBtn(true);
         }
      }
   };

   return (
      <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2 scroll-smooth">
            {items &&
               items.slice(page * 6, (page + 1) * 6).map((element, index) => {
                  return (
                     <Card2
                        key={index}
                        name={element.name}
                        price={element.price}
                        image={element.image}
                        score={element.score}
                        available={element.available}
                        id={element.id}
                        sales={element.sales}
                        discount={element.discount}
                     />
                  );
               })}
         </div>
         <div className="w-full h-7 flex justify-center text-sm sm:text-base items-center gap-2 mt-3">
            <button
               onClick={() => prevPage()}
               className={`px-1 border border-black rounded-sm ${disablePrevBtn ? " opacity-50" : " active:scale-95"}`}
               disabled={disablePrevBtn}
            >
               <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <p className="text-sm sm:text-base lg:text-large">
               Page {page + 1} from {items ? Math.ceil(items.length / 6) : 1}
            </p>
            <button
               onClick={() => nextPage()}
               className={`px-1 border border-black rounded-sm ${disableNextBtn ? " opacity-50" : " active:scale-95"}`}
               disabled={disableNextBtn}
            >
               <FontAwesomeIcon icon={faArrowRight} />
            </button>
         </div>
      </div>
   );
}
export default ShowCase;
