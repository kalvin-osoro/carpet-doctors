import React from 'react';
import Button from './common/Button';
import '../Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 classname = "contact-section">About Us</h2>
          <p>
            Carpet Doctors is an Automated carpet cleaning company offering professional carpet cleaning services for same day pickup and delivery.
          </p>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Phone: 0748 086 676</p>
          {/* <Link to="/sign-up">How it works</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/terms">Terms of Service</Link> */}
        </div>

        <div className="footer-section location">
          <h2>Location</h2>
          <p>Kamiti Road, Kenya</p>
          <p>Red Oak Business Complex</p>
        </div>

        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </Link>
            <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <small className="website-rights">Carpet Doctors &copy; 2024</small>
      </div>
    </footer>
  );
};

export default Footer;
