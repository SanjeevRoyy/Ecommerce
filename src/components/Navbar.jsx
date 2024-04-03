import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
// import { Link } from 'react-router-dom

const Navbar = () => {
  return (
    <div className='NavbarDiv'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
        <h1>Portfolio</h1>
        <h1>Login</h1> 
       <div className='hamburger'>
       <RxHamburgerMenu size={30} />
       </div>

    </div>

  )
}

export default Navbar