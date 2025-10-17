import debounce from "lodash.debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function ListItem ({name , price , quantity , id , changingQuantity }){
    const input = useRef();
    const handleButtons = (operation)=>{
        if(operation === false){
            --input.current.value;
            changingQuantity(id ,input.current.value);
        }
        else{
            ++input.current.value;
            changingQuantity(id ,input.current.value);
        }
}
    const sendQuantityUpdate = (newQuantity) => {
        // Send the API request here
        console.log("Sending to server:", newQuantity);
    };
    const debouncedSend = debounce(sendQuantityUpdate, 1500);

    return(
        <div className="flex flex-row justify-between items-center border-2 border-black px-3">
            <span className="flex flex-row justify-start w-1/3">{name}</span>
            <span className="flex flex-row justify-center w-1/3">{price}$</span>
            <div className="flex flex-row justify-end items-center w-1/3">
                <div className="flex flex-row justify-end items-center gap-1 border border-black rounded-full px-2 w-fit">
                    <button onClick={()=>{handleButtons(false)}} className="active:scale-90"><FontAwesomeIcon icon={faMinus} /></button>
                    <input ref={input} className="w-10 max-w-fit text-center bg-transparent" defaultValue={quantity} onChange={()=>debouncedSend(input.current.value)} />
                    <button onClick={()=>{handleButtons(true)}} className="active:scale-90"><FontAwesomeIcon icon={faPlus} /></button>
                </div>
            </div>
        </div>
    );
}
export default ListItem;