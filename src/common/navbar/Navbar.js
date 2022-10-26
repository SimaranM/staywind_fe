import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
// import Main from "../../components/main/Main"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // logout--------------------------------
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const user = localStorage.getItem("token");
  // logout--------------------------------

  return (
    <>
      <nav className='navbar'>
        <div className='nav'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>
          <a href="/">
            <img src='images/logo1.png' alt='' />
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to='/' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            {/* <li>
              <Link to='/gallery' onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li> */}
            {/* <li>
              <Link to='/destinations' onClick={closeMobileMenu}>
                Destinations
              </Link>
            </li>
            <li>
              <Link to='/blog' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/testimonial' onClick={closeMobileMenu}>
                Testimonial
              </Link>
            </li> */}
            {/* <li>
              <Link to='/register'>
                <i class='far fa-chevron-right'></i>Register
              </Link>
            </li> */}

          </ul>
          <div className="loginpart">
            <ul>
              <li>{user ?
                <Link to='/'>
                  <button className="white_btn" onClick={handleLogout}>
                    Logout
                  </button>
                </Link>
                : <Link to='/login'>
                  <button className='primary-btn' onClick={closeMobileMenu}>Login</button>
                </Link>}
              </li>
              <li>
                <Link to='/signup'>
                  <button className='primary-btn' onClick={closeMobileMenu}>Sing up</button>
                </Link>
              </li>
            </ul>
          </div>
          {/* {user &&
            <div className="main_container">
              <button className="white_btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          } */}
          {/* <Main /> */}
          {/* <div className='login-area flex'>
            <li>
              <Link to='/sign-in'>
                <i class='far fa-chevron-right'></i>Sign in
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <i class='far fa-chevron-right'></i>Register
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <button className='primary-btn'>Book Online</button>
              </Link>
            </li>
          </div> */}
        </div>
      </nav>

    </>
  )
}

export default Navbar
