import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Context/User";

import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import AdminLogin from "./Pages/AdminLogin";
// for hero Section
import image1 from "./utilities/hero1.jpg";
import image2 from "./utilities/hero2.jpg";
import image3 from "./utilities/hero3.jpg";
//layouts
import AdminLayout from "./Layout/AdminLayout";
import MainLayout from "./Layout/MainLayout";
import ProtectedRoute from "./Components/AdminPanel/ProtectedRoute";
//admin section
import AdminPanel from "./Pages/AdminPanel";
import Blogs from "./Pages/Blogs";
import Items from "./Pages/Items";
import ItemUpsert from "./Pages/ItemUpsert";
import BlogUpsert from "./Pages/BlogUpsert";

const dummyHeroData = [
   {
      image: image1,
      header: "welcome to my !@#$",
      text: "it's a real shit!",
      button: {
         text: "touch my D!@#",
         destination: "/shop",
      },
      id: 0,
   },
   {
      image: image2,
      header: "what you looking for ?",
      text: "it's completely free",
      button: {
         text: "just ask for it",
         destination: "/contact",
      },
      id: 1,
   },
   {
      image: image3,
      header: "esi is gay",
      text: "u want proof?",
      button: {
         text: "it's what u get",
         destination: "profile",
      },
      id: 2,
   },
];

function App() {
   return (
      <Router>
         <UserProvider>
            <Routes>
               {/* Main site layout */}
               <Route element={<MainLayout heroData={dummyHeroData} />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/aboutus" element={<Aboutus />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/Shop" element={<Shop />} />
                  <Route path="/Product" element={<Product />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/Profile" element={<Profile />} />
                  <Route path="/*" element={<NotFound />} />
               </Route>

               {/* Admin layout */}
               <Route path="/admin" element={<AdminLogin />} />
               <Route
                  path="/admin/*"
                  element={
                     <ProtectedRoute allowedRole={"admin"}>
                        <AdminLayout />
                     </ProtectedRoute>
                  }
               >
                  <Route path="panel" element={<AdminPanel />} />
                  <Route path="panel/blogs" element={<Blogs />} />
                  <Route path="panel/items" element={<Items />} />
                  <Route path="panel/itemUpsert" element={<ItemUpsert />} />
                  <Route path="panel/BlogUpsert" element={<BlogUpsert />} />
                  <Route path="*" element={<NotFound />} />
               </Route>
            </Routes>
         </UserProvider>
      </Router>
   );
}

export default App;
