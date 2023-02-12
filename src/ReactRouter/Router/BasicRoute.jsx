import React from 'react'
import Nav from './layout/nav'
import {BrowserRouter as Router, Route, Link, Routes,NavLink } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Menu from './page/Menu';
import Contact from './page/Contact';

export default function BasicRoute() {
  


  return (
    <>
     <div>
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/menu' element={<Menu />}/>
            <Route exact path='/contact' element={<Contact />}/>
          </Routes>
        </Router>
     </div>
    </>
  )
}
        
