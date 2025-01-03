import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* <img className='logo-img' src="/images/logo-tp.jpeg" alt="Logo" /> */}
            <img className='logo-img' src="/images/lg.png" alt="Automated carpet cleaning services in Nairobi on Kamiti Road" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}> </i>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to='/prices' className='nav-links' onClick={closeMobileMenu}>
                 Prices
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
