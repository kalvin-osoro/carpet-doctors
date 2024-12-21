import React from 'react';
import '../Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className = "contact-section">About Us</h2>
          <p>           

            We are a Leading fully automated carpet cleaning company offering same day  pickup and delivery services. Free delivery call us on 0748 086 676.
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
            {/* <Link className="social-icon-link instagram" to="/https://www.instagram.com/carpetdoc2024?igsh=MTc5cXYxb2FhOGdvMw==" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </Link> */}
            <a
            className="social-icon-link instagram"
            href="https://www.instagram.com/carpetdoc2024?igsh=MTc5cXYxb2FhOGdvMw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
          className="social-icon-link tiktok"
          href="https://www.tiktok.com/@carpet.doctors?_t=8qYFmyMAPAb&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <i className="fab fa-tiktok" />
        </a>
            {/* <Link className="social-icon-link tiktok" to="/https://www.tiktok.com/@carpet.doctors?_t=8qYFmyMAPAb&_r=1" target="_blank" aria-label="Instagram">
              <i className="fab fa-tiktok" />
            </Link>
            <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </Link> */}
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
