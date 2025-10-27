import { useNavigate } from "react-router-dom";

const Card1 = ({ product }) => {
   const nav = useNavigate();
   return (
      <div className="w-full rounded-2xl bg-gray-200">
         <div className="relative flex justify-center items-center py-5 bg-blue-600 rounded-2xl rounded-br-none before:absolute before:right-0 before:-bottom-6 before:w-6 before:h-6 before:bg-blue-600 after:absolute after:right-0 after:-bottom-7 after:w-7 after:h-7 after:bg-gray-200 after:rounded-tr-2xl">
            <div className="w-[90%] h-48 md:h-56 lg:h-60 flex justify-center items-center">
               <img
                  src={product.image}
                  alt="productImage"
                  className="w-full h-full object-cover border-2 border-white"
               />
            </div>
         </div>
         <div className="flex flex-col justify-center items-center gap-1 py-2 rounded-b-2xl">
            <div className="text-center">{product.name}</div>
            <div className="text-center">Price : ${product.price}</div>
            <button
               onClick={() => nav(`/product?NO=${product.id}`)}
               className="border-2 border-black rounded-md justify-self-center px-2 py-1 active:scale-95"
            >
               More details
            </button>
         </div>
      </div>
   );
};

export default Card1;
