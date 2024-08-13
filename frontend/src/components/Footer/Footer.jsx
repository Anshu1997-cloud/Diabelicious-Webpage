import React from 'react';
import './Footer.css';
import Logo from '../../images/logoNew.jpeg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <i className="footer-icon bi bi-envelope"></i>
        <h3 className="footer-title">Stay informed about special offers</h3>
        <h5 className="footer-subtitle">
          Subscribe to the newsletter
        </h5>
        <div className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="subscribe-button" type="button" id="button-addon2">
            Subscribe
          </button>
        </div>
      </div>

      <div className="footer-container">
        <footer className="footer-content">
          <div className="footer-row">
            <div className="footer-logo">
              <img src={Logo} alt="Company Logo" className="logo-image" />
            </div>
            <div className="footer-section">
              <h4>About</h4>
              <ul className="footer-nav">
                <li className="footer-item">
                  <a href="#" className="footer-link">Pricing</a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">Mentorship</a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">Personalised-Delivery</a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">Blogs</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Products</h4>
              <ul className="footer-nav">
                <li className="footer-item">
                  <a href="#" className="footer-link">Vegetables</a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">Mix Vegetables</a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">Fruits</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h2>Contact</h2>
              <ul className="footer-nav">
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    <span>hsr layout, sector 1</span><br/>
                    <span>Mon-Fri: 8am-8pm</span><br/>
                    <i class="bi bi-telephone me-2"></i>{'  '}
                    <span>Mobile No. - 8904580167</span>
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    <i className="bi bi-envelope-at me-2"></i>{' '}
                    <span>mini.official5@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; 2024 Company, Inc. All rights reserved.
            </p>
            <ul className="footer-socials">
              <li>
                <a className="social-link" href="#">
                  <i className="bi bi-facebook text-white"></i>
                </a>
              </li>
              <li>
                <a className="social-link" href="#">
                  <i className="bi bi-instagram text-white"></i>
                </a>
              </li>
              <li>
                <a className="social-link" href="#">
                  <i className="bi bi-twitter text-white"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;