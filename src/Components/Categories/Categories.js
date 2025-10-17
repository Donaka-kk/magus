import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Categories = ({ categories ,toChangeCategory ,toHandleSearch }) => {
  // console.log("Categories")
  const searchRef = useRef();
  const handleKeyDown = (event)=>{
    if(event.key === "Enter"){
      toHandleSearch(searchRef.current.value);
      searchRef.current.blur();
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <input 
          placeholder="search anything"
          className="w-full outline-none bg-inherit pl-8 rounded-full bg-backGround border-2 border-black"
          onKeyDown={handleKeyDown}
          ref={searchRef}
        />
        <button 
          onClick={()=>toHandleSearch(searchRef.current.value)} 
          className="absolute top-[2px] left-2 active:scale-95"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      {categories && (
        <div className="flex flex-col justify-end items-center gap-2">
          {categories.map((element , index)=>{
            return(
              <button 
                key={index} 
                onClick={() => toChangeCategory(element)}
                className="active:scale-95"
                >
                  {element}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
