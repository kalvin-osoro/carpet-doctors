import React from 'react'
import Button from './common/Button'
import '../Styles.css'
import { Link } from 'react-router-dom'

const Footer = () =>  {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer subscription-heading">
                Welcome to our shop, we offer quality services
            </p>
            <p className="footer subscription-text">
                Feel free to visit anytime!
            </p>
            <div className="input-areas">
                <form action="">
                    <input 
                    type="email" 
                    name='email'
                    placeholder='Your email'
                    className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>

        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/testimonials'>Testimonials</Link>
                    <Link to='/terms'>Terms of service</Link>
                </div>
                
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/testimonials'>Testimonials</Link>
                    <Link to='/terms'>Terms of service</Link>
                </div>
                
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/testimonials'>Testimonials</Link>
                    <Link to='/terms'>Terms of service</Link>
                </div>
                
            </div>
        </div>

        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link className="social-logo">
                        Carpet DRS <i className="fab fab-typo3" />

                    </Link>
                </div>
                <small className="website-rights">Carpet Doctors &copy;  2024 </small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook"
                    to="/"
                    target='_blank'
                    aria-label='Facebook'>
                    <i className="fab fa-facebook-f" />
                    
                    </Link>
                    <Link className="social-icon-link instagram"
                    to="/"
                    target='_blank'
                    aria-label='Instagram'>
                    <i className="fab fa-instagram" />
                    
                    </Link>
                    <Link className="social-icon-link twitter"
                    to="/"
                    target='_blank'
                    aria-label='Twitter'>
                    <i className="fab fa-twitter" />
                    
                    </Link>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Footer
