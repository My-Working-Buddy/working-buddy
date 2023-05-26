  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./app/pages/About/AboutUs";
import HomePage from "./app/pages/Homepage";
import ContactUs from "./app/pages/ContactUs/ContactUs"
import Login from "./app/pages/Login/Login"
import Blog from "./app/pages/Blog/Blog";

function Routing() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/login' element={<Login/>  } />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </Router>
  );
}

export default Routing;
