import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeadBarProps {
   user: {
      firstname: string;
      lastname: string;
      image: string;
      age: number;
      role: string;
   };
}

function HeadBar({ user }: HeadBarProps) {
   return (
      <div className="flex flex-row justify-around items-center w-full border-b-2 border-gray-300">
         <div className="w-1/2 max-w-52 flex flex-row border border-black rounded-2xl px-1 gap-1">
            <button className="active:scale-95 text-gray-600">
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
               placeholder="Search"
               className="outline-none rounded-2xl p-1 w-full bg-background"
            />
         </div>
         <div className="w-1/2 p-2">
            <h1 className="text-base sm:text-lg md:text-xl text-center font-semibold">
               3DAVINCI
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-center font-semibold text-gray-500">
               Design your dreams
            </p>
         </div>
      </div>
   );
}
export default HeadBar;
