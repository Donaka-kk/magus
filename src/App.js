import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Context/User.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
//layouts
const AdminLayout = lazy(() => import("./MainLayouts/AdminLayout"));
const MainLayout = lazy(() => import("./MainLayouts/MainLayout"));
const ProtectedRoute = lazy(() => import("./MainLayouts/ProtectedRoute"));
const LazyComponent1 = lazy(
   () => import("./Components/Layout/LazyComponent1.tsx")
);
//admin section
const AdminLogin = lazy(() => import("./AdminPages/AdminLogin.tsx"));
const AdminPanel = lazy(() => import("./AdminPages/AdminPanel.tsx"));
const Products = lazy(() => import("./AdminPages/Products.tsx"));
const ProductUpsert = lazy(() => import("./AdminPages/ProductUpsert.tsx"));
const Blogs = lazy(() => import("./AdminPages/Blogs.tsx"));
const BlogUpsert = lazy(() => import("./AdminPages/BlogUpsert.tsx"));
const Tickets = lazy(() => import("./AdminPages/Tickets.tsx"));
const TicketUpsert = lazy(() => import("./AdminPages/TicketUpsert.tsx"));
const Carousel = lazy(() => import("./AdminPages/Carousel.tsx"));
const HeroSection = lazy(() => import("./AdminPages/HeroSection.tsx"));
const SpecialOffers = lazy(() => import("./AdminPages/SpecialOffers.tsx"));
const Orders = lazy(() => import("./AdminPages/Orders.tsx"));
const AboutUs = lazy(() => import("./AdminPages/AboutUs.tsx"));
const SpecialOrders = lazy(() => import("./AdminPages/SpecialOrders.tsx"));
//main app
const Home = lazy(() => import("./Pages/Home.tsx"));
const Aboutus = lazy(() => import("./Pages/Aboutus.tsx"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Contact = lazy(() => import("./Pages/Contact.tsx"));
const Shop = lazy(() => import("./Pages/Shop.tsx"));
const Product = lazy(() => import("./Pages/Product.tsx"));
const Login = lazy(() => import("./Pages/Login.tsx"));
const Cart = lazy(() => import("./Pages/Cart"));
const Profile = lazy(() => import("./Pages/Profile.tsx"));

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
                        <Suspense fallback={<LazyComponent1 />}>
                           <ProtectedRoute allowedRole={"admin"}>
                              <AdminLayout />
                           </ProtectedRoute>
                        </Suspense>
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
                     <Route
                        path="panel/TicketUpsert"
                        element={<TicketUpsert />}
                     />
                     <Route path="panel/carousel" element={<Carousel />} />
                     <Route path="panel/orders" element={<Orders />} />
                     <Route path="panel/aboutus" element={<AboutUs />} />
                     <Route
                        path="panel/specialorders"
                        element={<SpecialOrders />}
                     />
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
