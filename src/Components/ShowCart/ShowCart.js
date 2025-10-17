import ListItem from "../ListItem/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ShowCart ({data}){

    const [quantityChanged , setQuantityChanged] = useState(false);
    const [cartItems , setCartItems] = useState(data);
    const handleChangeQuantity = (itemId , newQuantity)=>{
        setQuantityChanged(true);
        const changedItem = cartItems.findIndex(cartItem => cartItem.id === itemId);
        const newCart = cartItems;
        newCart[changedItem].quantity = parseInt(newQuantity);
        setCartItems(newCart);
    }
    const handleSaveChanges = ()=>{
        console.log(cartItems)
    }

    return(
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center px-5 border-b border-gray-600">
                <h1 className="text-2xl font-bold my-3">Your shopping cart</h1>
                <p className="text-xl font-bold">{data.length} items</p>
            </div>

            <div className="flex flex-col gap-4 py-4">
                <div className="flex flex-row justify-between px-3">
                    <span className="flex justify-start w-1/3">Item</span>
                    <span className="flex justify-center w-1/3">Price</span>
                    <span className="flex justify-end w-1/3">Quantity</span>
                </div>
                {data.map((value)=>{
                    return(
                        <ListItem key={value.id} name={value.name} price={value.price} quantity={value.quantity} id={value.id} changingQuantity={handleChangeQuantity} />
                    )
                })}
            </div>
            <div className="flex justify-end pb-4">
                <button 
                    onClick={()=>handleSaveChanges()}
                    disabled={!quantityChanged} 
                    className={`rounded-md border-2 border-black px-4 py-2 text-2xl bg-slate-200 text-green-500 ${!quantityChanged ? "opacity-50" : "opacity-100" }`}
                >
                    Save Changes
                    <FontAwesomeIcon icon={faCircleCheck} />
                </button>
            </div>
        </div>
    );
}
export default ShowCart;