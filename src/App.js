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
import Product from "./Pages/Product";
import Login from "./Pages/Login.tsx";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile.tsx";
import AdminLogin from "./Pages/AdminLogin";
//layouts
import AdminLayout from "./MainLayouts/AdminLayout";
import MainLayout from "./MainLayouts/MainLayout";
import ProtectedRoute from "./MainLayouts/ProtectedRoute";
//admin section
import AdminPanel from "./Pages/AdminPanel";
import Blogs from "./Pages/Blogs";
import Items from "./Pages/Items.tsx";
import ItemUpsert from "./Pages/ItemUpsert";
import BlogUpsert from "./Pages/BlogUpsert";

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
                     <Route path="panel/blogs" element={<Blogs />} />
                     <Route path="panel/items" element={<Items />} />
                     <Route path="panel/itemUpsert" element={<ItemUpsert />} />
                     <Route path="panel/BlogUpsert" element={<BlogUpsert />} />
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
