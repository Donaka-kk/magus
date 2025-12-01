import { ItemType } from "../../Types/ItemType.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

interface ItemProps {
   item: ItemType;
}

function Item({ item }: ItemProps) {
   return (
      <div className="flex">
         <img className="w-32" src={item.product.image} alt="productImage" />
         <div className="p-1">
            <div className="">
               <div className="flex justify-between">
                  <p className="font-bold">{item.product.name}</p>
                  <p className="font-bold">X{item.count}</p>
               </div>
               <p className="text-sm text-gray-500">{item.product.category}</p>
            </div>
            <p>product id: {item.product.id}</p>
            <p>discount: {item.product.discount}%</p>
            <p>price: {item.product.price}$</p>
            <div>
               <p>Size: {item.product.selectedSize}</p>
               <p>
                  Color:
                  <span
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
