import {
   faCircleCheck,
   faCircleInfo,
   faMinus,
   faPlus,
   faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartFallback() {
   return (
      <div className="max-w-screen h-full flex-row md:flex justify-center my-2 px-2 gap-2">
         <div className="w-full md:w-9/12">
            <div className="flex flex-col">
               <div className="flex flex-row justify-between items-center px-5 border-b border-gray-600">
                  <h1 className="text-2xl font-bold my-3">
                     Your shopping cart
                  </h1>
                  <p className="text-xl font-bold">
                     <FontAwesomeIcon icon={faQuestion} /> items
                  </p>
               </div>

               <div className="flex flex-col gap-4 py-4">
                  <div className="flex flex-row justify-between px-3">
                     <span className="flex justify-start w-1/3">Item</span>
                     <span className="flex justify-center w-1/3">Price</span>
                     <span className="flex justify-end w-1/3">Quantity</span>
                  </div>
                  <div className=" flex flex-col gap-3 p-3 text-neutral-200">
                     <div className="card-wrapper flex flex-row justify-between items-center border-2 border-black p-3 ">
                        <span className="flex flex-row justify-start w-1/3">
                           Item 1
                        </span>
                        <span className="flex flex-row justify-center w-1/3">
                           ??? $
                        </span>
                        <div className="flex flex-row justify-end items-center w-1/3">
                           <div className="flex flex-row justify-end items-center gap-1 border border-black rounded-full px-2 w-fit">
                              <button disabled className="active:scale-90">
                                 <FontAwesomeIcon icon={faMinus} />
                              </button>
                              <input
                                 defaultValue={"?"}
                                 className="w-10 max-w-fit text-center bg-transparent no-spinner"
                              />
                              <button disabled className="active:scale-90">
                                 <FontAwesomeIcon icon={faPlus} />
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="card-wrapper flex flex-row justify-between items-center border-2 border-black p-3">
                        <span className="flex flex-row justify-start w-1/3">
                           Item 1
                        </span>
                        <span className="flex flex-row justify-center w-1/3">
                           ??? $
                        </span>
                        <div className="flex flex-row justify-end items-center w-1/3">
                           <div className="flex flex-row justify-end items-center gap-1 border border-black rounded-full px-2 w-fit">
                              <button disabled className="active:scale-90">
                                 <FontAwesomeIcon icon={faMinus} />
                              </button>
                              <input
                                 defaultValue={"?"}
                                 className="w-10 max-w-fit text-center bg-transparent no-spinner"
                              />
                              <button disabled className="active:scale-90">
                                 <FontAwesomeIcon icon={faPlus} />
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="card-wrapper bg flex flex-row justify-between items-center border-2 border-black p-3">
                        <span className="flex flex-row justify-start w-1/3">
                           Item 1
                        </span>
                        <span className="flex flex-row justify-center w-1/3">
                           ??? $
                        </span>
                        <div className="flex flex-row justify-end items-center w-1/3">
                           <div className="flex flex-row justify-end items-center gap-1 border border-black rounded-full px-2 w-fit">
                              <button disabled className="active:scale-90">
                                 <FontAwesomeIcon icon={faMinus} />
                              </button>
                              <input
                                 defaultValue={"?"}
                                 className="w-10 max-w-fit text-center bg-transparent no-spinner"
                              />
                              <button disabled className="active:scale-90">
                                 <FontAwesomeIcon icon={faPlus} />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex justify-end pb-4">
                  <button
                     disabled
                     className="rounded-md border-2 border-black px-4 py-2 text-2xl bg-slate-200 text-green-500 opacity-50"
                  >
                     Save Changes
                     <FontAwesomeIcon icon={faCircleCheck} />
                  </button>
               </div>
            </div>
         </div>
         <div className="w-full md:w-3/12">
            <div className="sticky top-[16vh] flex flex-col h-fit items-center border-2 border-black p-6">
               <div className="flex flex-col w-full border-b-2 border-black pb-4 gap-2">
                  <h1 className="w-full text-center font-bold text-xl">
                     Order Summary
                  </h1>
                  <div>
                     <p>Shipping method</p>
                     <select
                        id="shipping"
                        defaultValue={"shipping"}
                        className="w-full border border-black focus:outline-none"
                     >
                        <option value="Delivery">Delivery</option>
                        <option value="taking from storehouse">
                           taking from storehouse
                        </option>
                     </select>
                  </div>
                  <div className="flex gap-2">
                     <input
                        className="w-1/2 border border-black pl-1"
                        placeholder="Promo code"
                     />
                     <button className="w-1/2 border border-black">
                        Apply
                     </button>
                  </div>
                  <div className="flex flex-row w-full h-fit justify-between">
                     <span>??? Items</span>
                     <span>??? $</span>
                  </div>
                  <div className="flex flex-row w-full h-fit justify-between">
                     <span>Shipping fee</span>
                     <span>??? $</span>
                  </div>
                  <div className="flex flex-row w-full h-fit justify-between">
                     <div className="flex gap-2">
                        <span>Discounts</span>
                        <button>
                           <FontAwesomeIcon icon={faCircleInfo} />
                        </button>
                     </div>
                     <span>?% $</span>
                  </div>
               </div>
               <div className="flex flex-row w-full h-fit justify-between">
                  <span>Total</span>
                  <span>??? $</span>
               </div>
               <button disabled className="w-1/2 bg-black text-white my-4">
                  Checkout
               </button>
            </div>
         </div>
      </div>
   );
}

export default CartFallback;
