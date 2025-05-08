import React, { useState } from "react";
import "./footer-style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const inputbg = { color: 'rgb(49, 49, 49)' }
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter an email Id to subscribe");
      return;
    }

    try {
      const response = await axios.post(
        "https://trusty-amusement-fb0d575893.strapiapp.com/api/newsletters",
        {
          data: {
            Email: email,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Successfully subscribed to newsletter!");
        setEmail("");
        setError("");
      }
    } catch (err) {
      const errorMsg = (err as any)?.response?.data?.error?.message || "Failed to subscribe. Please try again.";
      toast.error(errorMsg);
      console.error("Newsletter subscription error:", err);
    }
  };

  return (
    <footer className="footer-section mb-3 px-3">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <img
              src="/image/INF-healthcare-logo.png"
              alt="INF Healthcare"
              className="footer-logo"
              loading="lazy"
            />
            <p className="footer-description text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
            </p>
            <div className="certification-badges">
              <img
                src="./image/footer_1.svg"
                alt="HIPAA Compliant"
                loading="lazy"
              />
              <div className="footer-divider"></div>
              <img
                src="./image/footer_2.svg"
                alt="ISO 27000 Certified"
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-lg-3 ps-lg-4 col-md-4 mb-4">
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies-policy">Cookies Policy</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 mb-4 footer_section_end">
            <h3 className="footer-heading">Register Newsletter</h3>
            <p>
              Sign up for our mailing list to get latest updates and offers.
            </p>

            <div className="newsletter-form ">
              <input
                type="email"
                placeholder="Enter your email here"
                className="bg-white rounded-pill"
                style={inputbg}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
              <button type="submit" onClick={handleNewsletterSubmit} >Subscribe</button>

            {error && <span className="input_error" style={{ color: "white", display: "block", marginTop: "-3%" }}>{error}</span>}
            </div>
            <h3 className="footer-heading book_heading
            ">Book Your Free Demo</h3>
            {/* <button className="demo-button rounded-pill">
              Request Demo
              <i className="fa-solid fa-arrow-up non_hover_icon"></i>
              <i className="fa-solid fa-arrow-up hover_icon"></i>
            </button> */}

            <button className="demo-button new_btn_demo rounded-pill">
              Request Demo
              <i className="fa-solid fa-arrow-up "></i>
            </button>
          </div>
        </div>

        <div className="contact-info bg-white">
          <Link to="#" className="contact-item text-dark">
            <div className="icon_footer_box">
              <img src="/image/footer_location.svg" alt="Location" />
            </div>
            <span>
              600 BroadWay , Ste 200 #5035, Albany, New York 12207 
            </span>
            <div className="navbar-divider"></div>
          </Link>
          <Link to="tel:888-512-6265" className="contact-item text-dark">
          <div className="icon_footer_box">
              <img src="/image/footer_call.svg" alt="Location" />
            </div>
            <span>
              888-512-6265
            </span>
            <div className="navbar-divider"></div>
          </Link>
          <Link
            to="mailto:info@infhealthcare.com"
            className="contact-item text-dark"
          >
          <div className="icon_footer_box">
              <img src="/image/footerMAil.svg" alt="Location" />
            </div>
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
