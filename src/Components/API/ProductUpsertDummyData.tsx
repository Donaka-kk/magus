import { ProductSchemeType } from "../../Types/ProductType";
export const ProductUpsertDummyData: ProductSchemeType = {
   id: 1,
   name: "qwerty",
   price: 20,
   image: "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
   discount: 10,
   category: "qwerty3",
   selectedColor: "#fcba03",
   selectedSize: "lg",
   colors: ["#fcba03", "#0acc85"],
   sizes: ["lg", "xl"],
   score: {
      totalScore: 3,
      conformity: 3,
      economical: 3,
      intact: 3,
      quality: 3,
   },
   sales: 1234,
   description: "qwerty",
   comments: [
      {
         id: 2,
         authorFullName: "qwerty",
         authorImage:
            "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright.png",
         message: " qwerty",
         score: {
            totalScore: 4,
            conformity: 4,
            economical: 4,
            intact: 4,
            quality: 4,
         },
         time: "12:12",
         date: "11/11/2011",
      },
   ],
};

export const DummyCategories = [
   "qwerty1",
   "qwerty2",
   "qwerty3",
   "qwerty4",
   "qwerty5",
];
