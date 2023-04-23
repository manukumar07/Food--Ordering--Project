import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <>
     <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/features" className="nav-link">
            Features
          </Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
