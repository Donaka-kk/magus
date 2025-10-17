import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function LoadingWindow (){
    return(
        <div className="fixed flex justify-center items-center w-full h-full bg-gray-500">
            <div className="w-52 h-52 bg-gray-600">
                <span className="text-3xl">
                <FontAwesomeIcon icon={faSpinner} />
                </span>
            </div>
        </div>
    );
}
export default LoadingWindow;