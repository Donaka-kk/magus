import { useEffect } from "react";
import BlogsList from "../Components/AdminPanel/BlogsList";
import axios from "axios";

const dummyData = [
   {
      id: 123,
      title: "qwert",
      image: "https://paintings.pinotspalette.com/some-beach-tv.jpg?v=10033598",
      summary:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
   },
   {
      id: 1234,
      title: "qw123ert",
      image: "https://www.dogseechew.in/storage/editor_61ef6aa53fc7d-joe-caione-qo-pif84vxg-unsplash-min.jpg",
      summary:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
   },
   {
      id: 1235,
      title: "123124",
      image: "https://cdn.pixabay.com/photo/2021/10/01/15/02/flowers-6672715_1280.jpg",
      summary:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
   },
   {
      id: 1236,
      title: "hjkghjk",
      image: "https://static.toiimg.com/photo/msid-66679081,width-96,height-65.cms",
      summary:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
   },
];

function Blogs() {
   useEffect(() => {
      const getData = async () => {
         try {
            // const data = await axios
            //    .post(
            //       "https://47cc28b5d9f6491c0e30d1fc16e1de93.serveo.net/api/v1/users/login",
            //       { username: "09111111111", password: "1" }
            //    )
            //    .then((response) => {
            //       return response;
            //    });
            // console.log(data);
            // return data;
            return 0;
         } catch (error) {
            console.log(error.message);
         }
      };
      getData();
   }, []);

   return (
      <div>
         <BlogsList data={dummyData} />
      </div>
   );
}
export default Blogs;
