import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingComponent from "../Components/Layout/LoadingComponent";
import FloatingProfile from "../Components/FloatingProfile/FloatingProfile";
import ProductProfile from "../Components/ProductProfile/ProductProfile";

const dummyProduct = {
   id: 123,
   name: "qwer",
   price: "123",
   score: "2.4",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
   discount: "10",
   available: true,
   sales: 123,
   category: "George",
   colors: ["#E8320E", "#0E32E8", "#0EE827"],
   selectedColor: "#E8320E",
   sizes: ["sm", "lg", "xl"],
   selectedSize: "sm",
};

const Product = () => {
   const [params] = useSearchParams();
   const [product, setProduct] = useState();
   const [loading, setLoading] = useState(false);
   const nav = useNavigate();
   const id = params.get("id");

   const handleChangeSize = (size) => {
      setProduct({ ...product, selectedSize: size });
   };
   const handleChangeColor = (color) => {
      setProduct({ ...product, selectedColor: color });
   };
   const handleAddToCart = () => {
      const cart = JSON.parse(sessionStorage.getItem("cart"));
      if (cart === null) {
         console.log(null);
         sessionStorage.setItem("cart", JSON.stringify([product]));
      } else {
         console.log("pushing");
         cart.push(product);
         sessionStorage.setItem("cart", JSON.stringify(cart));
      }
   };

   useEffect(() => {
      const getData = () => {
         setLoading(true);
         setTimeout(() => {
            setLoading(false);
            setProduct(dummyProduct);
         }, 2000);
      };
      getData();
   }, [id]);

   return (
      <div className="">
         <div className="relative flex flex-col md:flex-row p-5 gap-5">
            <div className="w-full flex flex-col justify-between">
               {loading ? (
                  <LoadingComponent />
               ) : (
                  <div>
                     {product ? (
                        <ProductProfile
                           product={product}
                           handleChangeSize={handleChangeSize}
                           handleChangeColor={handleChangeColor}
                           handleAddToCart={handleAddToCart}
                        />
                     ) : (
                        <div className="w-full flex flex-col justify-around items-center gap-5 p-10">
                           <h1 className="text-7xl font-bold">404</h1>
                           <h1 className="text-4xl font-semibold">
                              Product Not Found !
                           </h1>
                           <button
                              onClick={() => nav("/shop")}
                              className="px-4 py-2 border-2 border-black rounded-md"
                           >
                              Go to Shop
                           </button>
                        </div>
                     )}
                  </div>
               )}
            </div>
            <div>
               {/*must change the name to FloatingCart*/}
               <FloatingProfile />
            </div>
         </div>
      </div>
   );
};

export default Product;
