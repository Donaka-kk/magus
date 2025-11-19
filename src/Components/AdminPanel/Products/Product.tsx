import { memo } from "react";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ProductSchemeType } from "../../../Types/ProductType";
interface ProductProps {
   product: ProductSchemeType;
   onDeleteRequest: (productName: string, productId: number) => void;
}

function Product({ product, onDeleteRequest }: ProductProps) {
   console.log("Product");
   const nav = useNavigate();

   return (
      <div className="border border-black w-full h-fit flex flex-row justify-center items-center p-2">
         <img src={product.image} alt="blogImg" className="w-20 h-20 mr-2" />
         <div className="flex flex-col w-full">
            <h3>{product.name}</h3>
            <p>{product.price}$</p>
         </div>
         <div className="flex gap-5 text-xl">
            <button
               onClick={() =>
                  nav(`/admin/panel/productupsert?id=${product.id}`)
               }
               className="text-yellow-500"
            >
               <FontAwesomeIcon icon={faPen} />
            </button>
            <button
               onClick={() => onDeleteRequest(product.name, product.id)}
               className="text-red-600"
            >
               <FontAwesomeIcon icon={faTrash} />
            </button>
         </div>
      </div>
   );
}
export default memo(Product);
