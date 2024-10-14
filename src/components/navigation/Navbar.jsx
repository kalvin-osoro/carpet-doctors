import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../../Styles.css'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [ setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);


  // const showButton = () => {
  //   if(window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };
  // useEffect(() => {
  //   showButton();
  //   window.addEventListener('resize', showButton);

  //   return () => {
  //     window.addEventListener('resize', showButton);
  //   };
  // }, [showButton]);

  // window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
     <div className="navbar-container">
         <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
             {/* Carpet Doctors */}
              {/* <i className='fab fa-typo3' /> */}
             <img className='fab' src="/images/logo-tp.jpeg" alt="" />
 
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
          <li className="nav-item">
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
            
            Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/prices' className='nav-links' onClick={closeMobileMenu}>
            
            Affordable Prices 
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
            
            Prices
            </Link>
          </li>          */}
         </ul>
         {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}  */}
     </div>
    </nav>
    
    </>

    

  )
}

export default Navbar
