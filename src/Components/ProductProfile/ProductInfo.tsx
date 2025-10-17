// Define what a Product looks like
interface ProductScheme {
   id: string | number;
   name: string;
   price: number;
   score: number;
   image: string;
   discount: number | null;
   available: boolean;
   sales: number;
   category: string;
   colors: string[];
   sizes: string[];
}

// Define what props ProductInfo takes
interface ProductInfoProps {
   product: ProductScheme;
}

function ProductInfo({ product }: ProductInfoProps) {
   return (
      <div>
         <img src={product.image} alt={product.name} />
         <p>{product.name}</p>
         <p>Price: ${product.price}</p>
         <p>Category: {product.category}</p>
         <p>ID: {product.id}</p>
         <p>Discount: {product.discount ?? "None"}</p>
         <p>{product.available ? "Available" : "Out of stock"}</p>
      </div>
   );
}

export default ProductInfo;
