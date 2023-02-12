import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from "./Pages/About";
import Footer from "./Common/Footer";
import Navbar from "./Common/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";
import User from "./Common/User";

const MainReactRoute = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path='/*' element={<Navigate to='/'/>}/> */}
          <Route path="/User/:Name" element={<User />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
};

export default MainReactRoute;
