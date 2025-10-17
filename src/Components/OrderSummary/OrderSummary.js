import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
function OrderSummary ({data}){
    const [selected , setSelected ] = useState("Delivery");
    
    return(
        <div className="sticky top-[16vh] flex flex-col h-fit items-center border-2 border-black p-6">
            <div className="flex flex-col w-full border-b-2 border-black pb-4 gap-2">
                <h1 className="w-full text-center font-bold text-xl">Order Summary</h1>
                <div>
                    <p>Shipping method</p>
                    <select
                        id="shipping"
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className="w-full border border-black focus:outline-none"
                    >
                        <option value="Delivery">Delivery</option>
                        <option value="taking from storehouse">taking from storehouse</option>
                    </select>
                </div>
                <div className="flex gap-2">
                    <input className="w-1/2 border border-black pl-1" placeholder="Promo code"/>
                    <button className="w-1/2 border border-black">Apply</button>
                </div>
                <div className="flex flex-row w-full h-fit justify-between">
                    <span>{data ? data.totalItems : 0} Items</span>
                    <span>${data ? data.fee : 0}</span>
                </div>
                <div className="flex flex-row w-full h-fit justify-between">
                    <span>Shipping fee</span>
                    <span>${data ? data.shippingFee : 0}</span>
                </div>
                <div className="flex flex-row w-full h-fit justify-between">
                    <div className="flex gap-2">
                        <span>Discounts</span>
                        <button>
                            <FontAwesomeIcon icon={faCircleInfo} />
                        </button>
                    </div>
                    <span>${data ? data.discount : 0}</span>
                </div>
            </div>
            <div className="flex flex-row w-full h-fit justify-between">
                <span>Total</span>
                <span>${data ? data.total : 0}</span>
            </div>
            <button className="w-1/2 bg-black text-white my-4">Checkout</button>
        </div>
    );
}
export default OrderSummary;