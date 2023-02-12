import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        {/* <nav className="navbar navbar-expand-lg bg-success">
              <ul className=" nav navbar-nav mr-auto d-flex ">
                      <li><NavLink className="nav-bar-link" to='/'>Home</NavLink></li>
                      <li><NavLink className="nav-bar-link" to='/about'>About</NavLink></li>
                      <li><NavLink className="nav-bar-link" to='/contact'>Contact</NavLink></li>
                      <li><NavLink className="nav-bar-link" to='/user/gandu'>Gandu</NavLink></li>
              </ul>
        </nav> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <a className="navbar-brand" href="#">Navbar</a>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto d-flex">
              <li className="nav-item active"><NavLink className="nav-link" to="/">Home </NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to='/about'>About Us</NavLink></li>
              <li className="nav-item dropdown"><NavLink className="nav-link" to="/contact">Contact Me</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to='/user/gandu'>Gandu</NavLink></li>
            </ul>      
          </div>
        </nav>
    </>
  )
}

export default Navbar