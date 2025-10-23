interface NotifyingPopUp {
   subject: string;
   text: string;
   code?: string;
   handleClosingPopUp: () => void;
}

function NotifyingPopUp({
   subject,
   text,
   code,
   handleClosingPopUp,
}: NotifyingPopUp) {
   return (
      <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-10">
         <div className="relative border border-black p-5 flex flex-col gap-5 bg-white z-30">
            <p>{subject}</p>
            <p>{text}</p>
            {code && <p>Code: {code}</p>}
         </div>
         <div
            onClick={() => handleClosingPopUp()}
            className="absolute w-full h-full bg-transparent06 z-20"
         />
      </div>
   );
}
export default NotifyingPopUp;
