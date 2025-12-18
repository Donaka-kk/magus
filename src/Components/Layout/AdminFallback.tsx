function AdmninFallback() {
   return (
      <div className="w-screen h-screen flex flex-col p-4 gap-6 bg-background overflow-hidden">
         <div className="flex flex-row justify-center gap-6">
            <div className="button-wrapper w-20 h-16">
               <div className="button-contain flex justify-center items-center text-xs" />
            </div>
            <div className="button-wrapper w-20 h-16">
               <div className="button-contain flex justify-center items-center text-xs" />
            </div>
            <div className="button-wrapper w-20 h-16">
               <div className="button-contain flex justify-center items-center text-xs" />
            </div>
            <div className="button-wrapper w-20 h-16">
               <div className="button-contain flex justify-center items-center text-xs" />
            </div>
         </div>
         <div className="card-wrapper flex flex-col md:flex-row w-full justify-center items-center h-fit gap-4 p-4 flex-shrink-0">
            <div className="">
               <img
                  src={
                     "https://www.freeiconspng.com/thumbs/photography-icon-png/photo-album-icon-png-14.png"
                  }
                  alt=""
                  className="w-52 md:w-72"
               />
            </div>
            <div className="w-full flex flex-col flex-1 gap-4">
               <div className="w-1/4 h-8 md:h-10 bg-gray-400 " />
               <div className="w-full h-4 md:h-6 bg-gray-400 " />
               <div className="w-full h-4 md:h-6 bg-gray-400 " />
               <div className="w-full h-4 md:h-6 bg-gray-400 " />
            </div>
            <div className="flex flex-row md:flex-col justify-center gap-2">
               <div className="w-8 h-8 rounded-full bg-gray-300" />
               <div className="w-8 h-8 rounded-full bg-gray-300" />
               <div className="w-8 h-8 rounded-full bg-gray-300" />
               <div className="w-8 h-8 rounded-full bg-gray-300" />
            </div>
         </div>
         <div className="card-wrapper flex flex-col md:flex-row w-full justify-center items-center h-fit gap-4 p-4 flex-shrink-0">
            <div className="">
               <img
                  src={
                     "https://www.freeiconspng.com/thumbs/photography-icon-png/photo-album-icon-png-14.png"
                  }
                  alt=""
                  className="w-52 md:w-72"
               />
            </div>
            <div className="w-full flex flex-col flex-1 gap-4">
               <div className="w-1/4 h-8 md:h-10 bg-gray-400 " />
               <div className="w-full h-4 md:h-6 bg-gray-400 " />
               <div className="w-full h-4 md:h-6 bg-gray-400 " />
               <div className="w-full h-4 md:h-6 bg-gray-400 " />
            </div>
            <div className="flex flex-row md:flex-col justify-center gap-2">
               <div className="w-8 h-8 rounded-full bg-gray-300" />
               <div className="w-8 h-8 rounded-full bg-gray-300" />
               <div className="w-8 h-8 rounded-full bg-gray-300" />
               <div className="w-8 h-8 rounded-full bg-gray-300" />
            </div>
         </div>
      </div>
   );
}

export default AdmninFallback;
