import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

interface SizeComponentProps {
   sizes: string[];
   handleAddingSize: (selectedSize: string) => void;
   handleDeletingSize: (selectedSize: string) => void;
}

function SizeComponent({
   sizes,
   handleAddingSize,
   handleDeletingSize,
}: SizeComponentProps) {
   const [input, setInput] = useState<string>("");
   return (
      <div className="flex flex-row gap-3 border-t-2 border-black pt-2">
         <div className="w-[230px] flex flex-col gap-3">
            <label>Sizes</label>
            <input
               onChange={(e) => setInput(e.target.value)}
               className="border p-1"
            />
            <button
               type="button"
               onClick={() => handleAddingSize(input)}
               className="p-1 border-2 border-black"
            >
               Add size
            </button>
         </div>
         <div className="flex flex-col gap-1 flex-1">
            {sizes?.map((size, index) => {
               return (
                  <div
                     key={index}
                     className="text-sm lg:text-xl flex flex-row justify-between border border-black p-1"
                  >
                     <p>{size}</p>
                     <button
                        type="button"
                        onClick={() => handleDeletingSize(size)}
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
export default SizeComponent;
