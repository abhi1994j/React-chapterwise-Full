import React from "react";
import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Notfound from "../ReactRouter1/Pages/Notfound";
import User from "./Page/User";
import Navbar from "./Common/Navbar";
import Navik from "./Common/Navik";
const RouterMain = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/user/:Name" element={<User />} />
        </Routes>
        {/* <Navik/> */}
      </Router>
    </>
  );
};

export default RouterMain;
