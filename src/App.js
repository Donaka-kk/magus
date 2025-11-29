import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Context/User.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

import Home from "./Pages/Home.tsx";
import Aboutus from "./Pages/Aboutus.tsx";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact.tsx";
import Shop from "./Pages/Shop.tsx";
import Product from "./Pages/Product.tsx";
import Login from "./Pages/Login.tsx";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile.tsx";
//layouts
import AdminLayout from "./MainLayouts/AdminLayout";
import MainLayout from "./MainLayouts/MainLayout";
import ProtectedRoute from "./MainLayouts/ProtectedRoute";
//admin section
import AdminLogin from "./AdminPages/AdminLogin.tsx";
import AdminPanel from "./AdminPages/AdminPanel.tsx";
import Products from "./AdminPages/Products.tsx";
import ProductUpsert from "./AdminPages/ProductUpsert.tsx";
import Blogs from "./AdminPages/Blogs.tsx";
import BlogUpsert from "./AdminPages/BlogUpsert.tsx";
import Tickets from "./AdminPages/Tickets.tsx";
import Ticket from "./AdminPages/Ticket.tsx";
import Carousel from "./AdminPages/Carousel.tsx";
import HeroSection from "./AdminPages/HeroSection.tsx";
import SpecialOffers from "./AdminPages/SpecialOffers.tsx";
import Orders from "./AdminPages/Orders.tsx";
import AboutUs from "./AdminPages/AboutUs.tsx";

const queryClient = new QueryClient();
const persister = createAsyncStoragePersister({
   storage: window.sessionStorage,
});
persistQueryClient({ queryClient, persister });

function App() {
   return (
      <Router>
         <QueryClientProvider client={queryClient}>
            <UserProvider>
               <Routes>
                  {/* Main site layout */}
                  <Route element={<MainLayout />}>
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
                     <Route path="panel/Blogs" element={<Blogs />} />
                     <Route path="panel/Products" element={<Products />} />
                     <Route
                        path="panel/ProductUpsert"
                        element={<ProductUpsert />}
                     />
                     <Route path="panel/BlogUpsert" element={<BlogUpsert />} />
                     <Route path="panel/tickets" element={<Tickets />} />
                     <Route path="panel/ticket" element={<Ticket />} />
                     <Route path="panel/carousel" element={<Carousel />} />
                     <Route path="panel/orders" element={<Orders />} />
                     <Route path="panel/aboutus" element={<AboutUs />} />
                     <Route
                        path="panel/herosection"
                        element={<HeroSection />}
                     />
                     <Route
                        path="panel/specialoffers"
                        element={<SpecialOffers />}
                     />
                     <Route path="*" element={<NotFound />} />
                  </Route>
               </Routes>
               <ReactQueryDevtools />
            </UserProvider>
         </QueryClientProvider>
      </Router>
   );
}

export default App;
