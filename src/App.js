import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <div className="absolute w-full min-w-screen min-h-20 h-[15vh]">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <div className="min-w-screen">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
