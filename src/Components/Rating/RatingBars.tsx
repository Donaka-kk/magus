import { ScoreType } from "../../Types/ScoreType.tsx";

interface RatingStarsType {
   score: ScoreType;
}

function RatingBars({ score }: RatingStarsType) {
   return (
      <div className="">
         <div className="flex gap-3 justify-between items-center">
            <p>Quality</p>
            <div className="relative w-20 h-2 bg-gray-600">
               <div
                  className={`absolute h-full bg-yellow-400`}
                  style={{
                     width: `${score.quality * 20}%`,
                  }}
               />
            </div>
         </div>
         <div className="flex gap-3 justify-between items-center">
            <p>Conformity</p>
            <div className="relative w-20 h-2 bg-gray-600">
               <div
                  className={`absolute h-full bg-yellow-400`}
                  style={{
                     width: `${score.conformity * 20}%`,
                  }}
               />
            </div>
         </div>
         <div className="flex gap-3 justify-between items-center">
            <p>Intact</p>
            <div className="relative w-20 h-2 bg-gray-600">
               <div
                  className={`absolute h-full bg-yellow-400`}
                  style={{
                     width: `${score.intact * 20}%`,
                  }}
               />
            </div>
         </div>
         <div className="flex gap-3 justify-between items-center">
            <p>Economical</p>
            <div className="relative w-20 h-2 bg-gray-600">
               <div
                  className={`absolute h-full bg-yellow-400`}
                  style={{
                     width: `${score.economical * 20}%`,
                  }}
               />
            </div>
         </div>
      </div>
   );
}
export default RatingBars;
