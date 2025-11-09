import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { ReactElement } from "react";
import { ScoreType } from "../../Types/ScoreType";

interface RatingStarsType {
   score: ScoreType;
}

function RatingStars({ score }: RatingStarsType) {
   let fullStars: ReactElement[];
   let floatPart: number;
   let emptyStars: ReactElement[];

   floatPart = score.totalScore - Math.floor(score.totalScore);
   fullStars = Array.from({ length: score.totalScore }, (_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} />
   ));
   emptyStars = Array.from(
      { length: Math.floor(5 - score.totalScore) },
      (_, index) => <FontAwesomeIcon key={index} icon={emptyStar} />
   );
   return (
      <div className="">
         {fullStars}
         {floatPart > 0 ? <FontAwesomeIcon icon={faStarHalfStroke} /> : null}
         {emptyStars}
      </div>
   );
}
export default RatingStars;
