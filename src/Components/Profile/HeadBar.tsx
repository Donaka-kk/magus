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
      <div className="flex flex-row justify-around items-center w-full p-2 border-2 border-black rounded-full">
         <span className="text-2xl font-bold">Hello {user.firstname}</span>
         <div className="relative border border-black rounded-2xl">
            <input
               placeholder="Looking for ?"
               className="py-2 pl-8 outline-none rounded-2xl"
            />
            <button className="absolute top-2 left-2 active:scale-95 text-gray-600">
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
         <div className="flex flex-row justify-center items-center gap-2">
            <img
               src={user.image}
               alt="user"
               className="w-20 h-20 rounded-full"
            />
            <span className="text-xl font-semibold">
               {user.firstname} {user.lastname}
            </span>
         </div>
      </div>
   );
}
export default HeadBar;
