import React, { useEffect, useRef, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
// import { Link } from 'react-router-dom



const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogout = () => {
    // Perform logout actions here
    setIsLoggedIn(false);
    // Clear token from localStorage or perform any other necessary logout actions
    window.localStorage.removeItem("token");
  };

  // const [isNavActive,setIsNavActive]=useState();
  // const navRef = useRef();

  // useEffect(() => {
  //   if (navRef.current) {
  //     if (isNavActive) {
  //       navRef.current.classList.add("active");
  //     } else {
  //       navRef.current.classList.remove("active");
  //     }
  //   }
  // }, [isNavActive]);
  // const toggleNav = () => {
  //   setIsNavActive((current) => !current);
  // };

  // const closeNav = () => {
  //   setIsNavActive(false);
  // };

  const [showNavbar, setShowNavbar] = useState(false);
  const { cartItems } = useCart();

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>

      <div className='hamburger'>
        <RxHamburgerMenu onClick={toggleNavbar}  size={30} />
      </div>
      <div className={`NavbarDiv ${showNavbar ? 'show' : ''}`}>
        <Link to="/" >Home</Link>
        <Link to="/about">Categories</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">cart ({cartItems.length})</Link>
        <div className="nav-auth">
            {isLoggedIn ? (
              // If logged in, show Logout
              <Link to="/" className="nav-link" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              // If not logged in, show Login
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}
          </div>
        {/* <Link to="/login">Login</Link> */}
      </div>
      {/* <div className='HamburgerMenu'>
        <Link to="/">Home</Link>
        <Link to="/about">Categories</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">cart</Link>
        <Link to="/login">Login</Link>
      </div> */}

    </>


  )
}

export default Navbar