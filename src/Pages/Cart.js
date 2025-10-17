import ShowCart from "../Components/ShowCart/ShowCart";
import OrderSummary from "../Components/OrderSummary/OrderSummary";
import { useState , useEffect } from "react";
import axios from "axios";
import LoadingComponent from "../Components/Layout/LoadingComponent";

const dummyData1={
    cart : [
        {name :"mouse", id:1 , price:10 , quantity :4},
        {name :"keyboard", id:2 , price:11 , quantity :5},
        {name :"dashEsan", id:3 , price:12 , quantity :6},
        {name :"noobe", id:4 , price:1213 , quantity :7},
        {name :"sag", id:5 , price:13 , quantity :8},
        {name :"ast", id:6 , price:14 , quantity :9},
    ],
    orderSummary : {
        shippingMethod : "Delivery",
        totalItems : 5,
        fee : 1500 ,
        shippingFee : 1010,
        discount : 97,
        total : 12400,
    },
}

function Cart (){
    const [data, setData] = useState();

    const getData = ()=>{
        axios.get("https://reqres.in/api/unknown", {headers:{
            "x-api-key": "reqres-free-v1"
        }})
        .then(response=>{
            //setData(response.data.data)
            setTimeout(() => {
                // setData(response.data.data);
                setData(dummyData1);
            }, 4000);
        })
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <div>
            <div className="max-w-screen h-full flex-row md:flex justify-center my-2 px-2 gap-2">
                <div className="w-full md:w-9/12">
                    {data ? (
                        <ShowCart data={data.cart}/>
                    ) : (
                        <LoadingComponent />
                    )}
                </div>
                <div className="w-full md:w-3/12">
                    <OrderSummary data={data && data.orderSummary}/>
                </div>
            </div>
        </div>
    )
}
export default Cart;