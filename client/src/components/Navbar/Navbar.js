import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'semantic-ui-css/semantic.min.css'
import Carousel1 from '../Carousel1';

// import { fab } from '@fortawesome/free-brands-svg-icons'
function Navbar() {
  return (
    <>
      <nav class="navbar">
      <a href="#" class="logo">Logo</a>

      <ul class="nav-links">
      <li>
      <Link to="/" className='a'>Home</Link>

      </li>
    <li>
    <Link to="/features" className='a'>Features</Link>
    </li>
    <li>
    <Link to="/products" className='a'>Products</Link>
    </li>
    <li>
    <Link to="/categories" className='a'>Categories</Link>
    </li>
    <li>
    <Link to="/review" className='a'>Review</Link>
    </li>
  </ul>
  {/* <div class="burger">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  {/* </div> */}

</nav>
    </>
  )
}

export default Navbar
