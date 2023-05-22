import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./app/pages/AboutUs";
import HomePage from "./app/pages/Homepage";
import ContactUs from "./app/pages/ContactUs"
import Login from "./app/pages/Login"

function Routing() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/login' element={<Login/>  } />
      </Routes>
    </Router>
  );
}

export default Routing;
