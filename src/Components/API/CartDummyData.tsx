import { CartType } from "../../Types/CartType";

export const CartDummyData: CartType = {
   items: [
      {
         product: {
            id: 1,
            name: "item1",
            price: 10,
            image: "https://img.freepik.com/premium-photo/detailed-close-up-red-eyed-frog39s-eye-perfect-educational-purposes_153912-174664.jpg?semt=ais_hybrid&w=740&q=80",
            discount: 5,
            category: "category1",
            selectedColor: "#32a852",
            selectedSize: "lg",
            score: {
               totalScore: 4,
               conformity: 4,
               economical: 4,
               intact: 4,
               quality: 4,
            },
            sales: 150,
         },
         quantity: 2,
      },
      {
         product: {
            id: 2,
            name: "item2",
            price: 12,
            image: "https://thumbs.dreamstime.com/b/close-up-vibrant-frog-close-up-vibrant-frog-visually-striking-background-generative-ai-369976105.jpg",
            discount: 0,
            category: "category2",
            selectedColor: "#6f8eb0",
            selectedSize: "lg",
            score: {
               totalScore: 3,
               conformity: 3,
               economical: 3,
               intact: 3,
               quality: 3,
            },
            sales: 120,
         },
         quantity: 2,
      },
      {
         product: {
            id: 3,
            name: "item3",
            price: 15,
            image: "https://thumbs.dreamstime.com/b/crazy-frog-1940476.jpg",
            discount: 10,
            category: "category3",
            selectedColor: "#aa6ff2",
            selectedSize: "sm",
            score: {
               totalScore: 5,
               conformity: 5,
               economical: 5,
               intact: 5,
               quality: 5,
            },
            sales: 20,
         },
         quantity: 5,
      },
   ],
   totalItems: 9,
   totalPrice: 110.5,
   discount: 7,
};
