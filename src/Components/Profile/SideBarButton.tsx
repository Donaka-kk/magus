import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface SideBarButtonProps {
   text: string;
   icon: IconDefinition;
   setActiveTab: () => void;
   active: boolean;
}

function SideBarButton({
   text,
   icon,
   setActiveTab,
   active,
}: SideBarButtonProps) {
   return (
      <button
         onClick={() => setActiveTab()}
         className={`flex items-center w-full hover:underline active:scale-95 px-1 text-primary ${active === true ? " font-semibold underline text-red-600 md:text-black" : ""}`}
      >
         <span className="w-full md:w-8 text-center">
            <FontAwesomeIcon icon={icon} />
         </span>
         <span className="hidden md:flex">{text}</span>
      </button>
   );
}
export default SideBarButton;
