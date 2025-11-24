import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IconProps {
   navigate: () => void;
   icon: IconDefinition;
   title: string;
}
function Icon({ navigate, icon, title }: IconProps) {
   return (
      <div>
         <button
            onClick={() => navigate()}
            className="w-full h-full border-2 border-black rounded-xl p-2 group shadow-xl active:shadow-inner"
         >
            <span className="text-lg md:text-2xl">
               <FontAwesomeIcon icon={icon} />
            </span>
            <h1 className="group-hover:scale-110 font-semibold text-base md:text-xl">
               {title}
            </h1>
         </button>
      </div>
   );
}
export default Icon;
