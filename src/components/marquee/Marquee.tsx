import React from "react";
import './marquee-styles.css';
import { Link } from 'react-router-dom';

const Marquee = () => {
  
  return (
    <div className="py-2 d-none d-lg-block">
      <div className="container header_containter">
        <div className="row align-items-center d-flex justify-content-between">
          <div className="col-12">
            <div className="contact-marquee-wrapper d-flex align-items-center justify-content-between">
              
              <div className="contact-marquee-info d-flex align-items-center">
                <span className="marquee-font">
                  <i className="bi bi-geo-alt-fill iconStyle" ></i>
                  600 Broadway , Ste 200 #5035, Albany , New York 12207 
                </span>
                <span className="marquee-font">
                  <i className="bi bi-telephone-fill iconStyle"></i>
                  888-512-6265
                </span>
                <span className="marquee-font">
                  <i className="bi bi-envelope-fill iconStyle" ></i>
                  info@infhealthcare.com
                </span>
              </div>

              
              <div className="social-icons d-flex">
                <Link to="#" className="social-icon-bg px-2 py-1">
                  <i className="bi bi-facebook socialmIconStyle"></i>
                </Link>
                <Link to="#" className="social-icon-bg px-2 py-1">
                  <i className="bi bi-youtube socialmIconStyle"></i>
                </Link>
                <Link to="#" className="social-icon-bg px-2 py-1">
                  <i className="bi bi-linkedin socialmIconStyle"></i>
                </Link>
                <Link to="#" className="social-icon-bg px-2 py-1">
                  <i className="bi bi-instagram socialmIconStyle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
