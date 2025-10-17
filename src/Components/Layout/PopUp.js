function PopUp({ text, showPopUp, handleDeleteItem }) {
   return (
      <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-10">
         <div className="relative border border-black p-5 flex flex-col gap-5 bg-white z-30">
            <p>{text}</p>
            <div className="flex justify-center gap-5">
               <button
                  onClick={() => showPopUp(false)}
                  className=" border border-black px-2 py-1 active:scale-95"
               >
                  cancel
               </button>
               <button
                  onClick={() => handleDeleteItem()}
                  className=" border border-black px-2 py-1 active:scale-95"
               >
                  Confirm
               </button>
            </div>
         </div>
         <div
            onClick={() => showPopUp(false)}
            className="absolute w-full h-full bg-transparent06 z-20"
         />
      </div>
   );
}
export default PopUp;
