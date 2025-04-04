import React from "react";
import "./footer-style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const inputbg= {color: 'rgb(49, 49, 49)'}
  return (
    <footer className="footer-section mb-3 px-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <img
              src="./image/INF-healthcare-logo.png"
              alt="INF Healthcare"
              className="footer-logo"
              loading="lazy"
            />
            <p className="footer-description text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
            </p>
            <div className="certification-badges">
              <img
                src="./image/hippa-certified.png"
                alt="HIPAA Compliant"
                loading="lazy"
              />
              <div className="footer-divider"></div>
              <img
                src="./image/iso-certfied.png"
                alt="ISO 27000 Certified"
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-lg-2 col-md-4 mb-4">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li>
                <Link to="#">Denial Management</Link>
              </li>
              <li>
                <Link to="#">Hospital Billing</Link>
              </li>
              <li>
                <Link to="#">Revenue Cycle Management</Link>
              </li>
              <li>
                <Link to="#">Medical Billing</Link>
              </li>
              <li>
                <Link to="#">Medical Virtual Assistant</Link>
              </li>
              <li>
                <Link to="#">Physician Billing</Link>
              </li>
              <li>
                <Link to="#">HME Billing</Link>
              </li>
              <li>
                <Link to="#">DME Billing</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 mb-4">
            <h3 className="footer-heading">Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Cookies Policy</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4 mb-4 footer_section_end">
            <h3 className="footer-heading">Register Newsletter</h3>
            <p>
              Sign up for our mailing list to get latest updates and offers.
            </p>

            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email here"
                className="bg-white"
                style={inputbg}
              />
              <button type="submit">Subscribe</button>
            </div>

            <h3 className="footer-heading book_heading
            ">Book Your Free Demo</h3>
            <button  className="demo-button rounded-pill">
              Request Demo
              <img src="image/iconArrow.svg" alt="" loading="lazy" />
            </button>
          </div>
        </div>

        <div className="contact-info bg-white">
          <Link to="#" className="contact-item text-dark">
            <img src="./image/footer-location.png" alt="Location" />
            <span>
            600 BROADWAY, STE 200 #5035, ALBANY, NEW YORK 12207
            </span>
          <div className="navbar-divider"></div>
          </Link>
          <Link to="tel:888-512-6265" className="contact-item text-dark">
            <img src="./image/footer-call.png" alt="Phone" />
            <span>
            888-512-6265
            </span>
          <div className="navbar-divider"></div>
          </Link>
          <Link
            to="mailto:info@infhealthcare.com"
            className="contact-item text-dark"
          >
            <img src="./image/footer-mail'.png" alt="Email" />
            <span>
            info@infhealthcare.com
            </span>
          </Link>
        </div>

        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="copyright text-white">
            Copyright © 2025 All Rights Reserved | INF Healthcare
          </div>
          <div className="social-footer-icons">
            <Link to="#" className="social-footer-icon">
            <i className="bi bi-youtube socialIconStyle"></i>
            </Link>
            <Link to="#" className="social-footer-icon">
            <i className="bi bi-facebook socialIconStyle"></i>
            </Link>
            <Link to="#" className="social-footer-icon">
            <i className="bi bi-linkedin socialIconStyle"></i>
            </Link>
            <Link to="#" className="social-footer-icon">
            <i className="bi bi-instagram socialIconStyle"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
