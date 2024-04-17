import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom

const Navbar = () => {
  return (
  <>

    <div className='NavbarDiv'>
        <Link to="/">Home</Link>
        <Link to="/about">Categories</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">cart</Link>
        <Link to="/login">Login</Link> 
    </div>
       <div className='hamburger'>
       <RxHamburgerMenu size={40} />
       </div>
       </>

  )
}

export default Navbar