import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes,NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">React-Router</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <NavLink  className='nav-link' to="/about"> about</NavLink>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/menu">Menu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                </div>
                <Link className="btn btn-outline-light" to="user/adduser">AddUser</Link>
            </nav>
        </div>
  )
}
