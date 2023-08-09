import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./app/pages/About/AboutUs";
import ContactUs from "./app/pages/ContactUs/ContactUs";
import Login from "./app/pages/Login/Login";
import Blog from "./app/pages/Blog/Blog";
import SignUp from "./app/pages/SignUp/SignUp";
import Home from "./app/pages/Home/Home";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default Routing;
