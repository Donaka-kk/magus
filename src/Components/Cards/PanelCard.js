import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PanelCard ({title , icon , width}){
    return(
        <div 
            onClick={()=>{}} 
            className={`flex flex-col justify-center items-center border border-black rounded-md hover:cursor-pointer active:scale-95 p-2 ${width}`}
        >
            <p className="flex justify-center items-center border border-black w-10 h-10 rounded-full text-xl">
                <FontAwesomeIcon icon={icon} />
            </p>
            <p className="text-center">
                {title}
            </p>
        </div>
    );
}
export default PanelCard;