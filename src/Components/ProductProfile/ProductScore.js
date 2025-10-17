import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

function ProductScore({ score, sales }) {
   let floatPart;
   let fullStars;
   let emptyStars;

   floatPart = score - Math.floor(score);
   fullStars = Array.from({ length: score }, (_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} />
   ));
   emptyStars = Array.from({ length: Math.floor(5 - score) }, (_, index) => (
      <FontAwesomeIcon key={index} icon={emptyStar} />
   ));

   return (
      <div className="flex flex-col border-2 border-black rounded-md h-fit p-2">
         <div className="text-center">
            {fullStars}
            {floatPart > 0 ? <FontAwesomeIcon icon={faStarHalfStroke} /> : null}
            {emptyStars}
         </div>
         <p className="text-center">Score : {score}</p>
         <div className="flex gap-3 justify-between items-center">
            <p>quality</p>
            <div className="relative w-20 h-2 bg-gray-600">
               <div
                  className={`absolute h-full bg-yellow-400`}
                  style={{
                     width: `${score * 20}%`,
                  }}
               />
            </div>
         </div>
         <div className="flex gap-3 justify-between items-center">
            <p>conformity</p>
            <div className="relative w-20 h-2 bg-gray-600">
               <div
                  className={`absolute h-full bg-yellow-400`}
                  style={{
                     width: `${score * 20}%`,
                  }}
               />
            </div>
         </div>
         <div className="flex gap-3 justify-between items-center">
            <p>intact</p>
            <div className="relative w-20 h-2 bg-gray-600">
               <div
                  className={`absolute h-full bg-yellow-400`}
                  style={{
                     width: `${score * 20}%`,
                  }}
               />
            </div>
         </div>
         <div className="flex gap-3 justify-between items-center">
            <p>price</p>
            <div className="relative w-20 h-2 bg-gray-600">
               <div
                  className={`absolute h-full bg-yellow-400`}
                  style={{
                     width: `${score * 20}%`,
                  }}
               />
            </div>
         </div>
         <p className="text-center">Total Sales : {sales}</p>
      </div>
   );
}
export default ProductScore;
