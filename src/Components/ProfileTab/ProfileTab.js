import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileTab ({text , icon ,setActiveTab}){
    return(
        <button 
            onClick={()=>setActiveTab("panel")} 
            className={`flex items-center w-full hover:bg-slate-200 active:scale-95 px-1`}
        >
            <span className="w-full md:w-8 text-center"><FontAwesomeIcon icon={icon} /></span>
            <span className="hidden md:flex">{text}</span>
        </button>
    );
}
export default ProfileTab;
//${activeTab === "panel" ?" font-bold underline":" "}