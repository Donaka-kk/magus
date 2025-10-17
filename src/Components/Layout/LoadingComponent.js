import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function LoadingComponent({ failed }) {
   if (failed) {
      return (
         <div>
            <p>something went wrong ...</p>
            <p>try again </p>
         </div>
      );
   }

   return (
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
         <p className="animate-spin text-4xl">
            <FontAwesomeIcon icon={faSpinner} />
         </p>
         <p className="font-bold text-3xl">Loading ...</p>
      </div>
   );
}
export default LoadingComponent;
