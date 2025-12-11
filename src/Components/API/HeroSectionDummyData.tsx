import { SlideType } from "../../Types/SlideType";

import image1 from "../../utilities/hero4.jpg";
import image2 from "../../utilities/hero5.jpg";
import image3 from "../../utilities/hero6.jpg";

export const HeroSectionDummyData = [
   {
      image: image1,
      header: "Turn dreams into reality",
      text: "With newest technology all imaginations can come true",
      button: {
         text: "Special orders",
         destination: "/shop",
      },
      id: 0,
   },
   {
      image: image2,
      header: "Have best Entertainments",
      text: "build your favorite action figures now",
      button: {
         text: "Special orders",
         destination: "/contact",
      },
      id: 1,
   },
   {
      image: image3,
      header: "Most exicting accessories",
      text: "Take a look at our Show-case",
      button: {
         text: "Shop",
         destination: "profile",
      },
      id: 2,
   },
];

export const NewHeroSectionDummyData: SlideType[] = [
   {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_640.jpg",
      destination: "https://www.google.com",
   },
   {
      id: 2,
      image: "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-cloudy-background-beautiful-natural-streaks-of-sky-and-clouds-red-image_15684333.jpg",
      destination: "https://www.youtube.com",
   },
   {
      id: 3,
      image: "https://img.freepik.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg?semt=ais_hybrid&w=740&q=80",
      destination: "https://www.digikala.com",
   },
];
