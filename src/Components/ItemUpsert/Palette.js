import { useState } from "react";

import { hsvaToHex } from "@uiw/color-convert";

import Chrome from "@uiw/react-color-chrome";
import { GithubPlacement } from "@uiw/react-color-github";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function Palette({ colors, handleAddingColor, handleDeletingColor }) {
   const [hsva, setHsva] = useState({ h: 77, s: 56, v: 61, a: 1 });
   const hex = hsvaToHex(hsva);
   return (
      <div className="flex flex-row gap-3">
         <div className="flex flex-col gap-3">
            <Chrome
               color={hsva}
               placement={GithubPlacement.TopRight}
               onChange={(color) => {
                  setHsva(color.hsva);
               }}
            />
            <button
               type="button"
               onClick={() => handleAddingColor(hex)}
               className="w-full p-2 border-2 border-black active:scale-95"
            >
               Add color
            </button>
         </div>
         <div className="w-full flex flex-col gap-1">
            {colors?.map((color, index) => {
               return (
                  <div
                     key={index}
                     className="text-sm lg:text-xl flex flex-row justify-between border border-black p-1"
                     style={{ backgroundColor: color }}
                  >
                     {color}
                     <button
                        onClick={() => handleDeletingColor(color)}
                        type="button"
                        className="text-base lg:text-2xl active:scale-95"
                     >
                        <FontAwesomeIcon icon={faCircleXmark} />
                     </button>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
export default Palette;
