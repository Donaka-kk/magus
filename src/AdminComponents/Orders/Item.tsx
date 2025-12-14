import { ItemType } from "../../Types/ItemType.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

interface ItemProps {
   item: ItemType;
}

function Item({ item }: ItemProps) {
   return (
      <div className="flex">
         <img
            className="w-1/2 object-cover"
            src={item.product.image}
            alt="productImage"
         />
         <div className="w-1/2 p-1 text-sm">
            <div className="flex justify-between text-base">
               <p className="font-semibold">{item.product.name}</p>
               <p className="font-semibold">X{item.count}</p>
            </div>
            <p>product id: {item.product.id}</p>
            <p>discount: {item.product.discount}%</p>
            <p>price: {item.product.price}$</p>
            <div>
               <p>Size: {item.product.selectedSize}</p>
               <p>
                  <span>Color: </span>
                  <span
                     className="text-sm"
                     style={{
                        color: `${item.product.selectedColor}`,
                     }}
                  >
                     <FontAwesomeIcon icon={faCircle} />
                  </span>
               </p>
            </div>
         </div>
      </div>
   );
}

export default Item;
