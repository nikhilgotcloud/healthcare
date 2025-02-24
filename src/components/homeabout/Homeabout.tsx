import React from "react";
import './homeabout-style.css'

const Homeabout = () => {
 const headstyle: React.CSSProperties = {
      color: "#004457",
      borderRadius: "100px",
      border: "0",
      fontSize: "18px",
      lineHeight: "16px",
      fontWeight: 400,
      transition: "all 1s ease",
    };

  return (
    <div>
      <div className="container">
        <div className="about-section py-4 px-3 d-flex row">
            
          <div className="col-md-6 about_text_sextion">
            <span className="badge badge-white mb-3 bg-white about-us-butn p-3 shadow-lg" style={headstyle}>
              About Us
            </span>
            <h2 className="about-title mb-1">Who We Are</h2>
            <p className="about-description text-dark mb-4 upper_text">
              Efficient Revenue Cycle Solutions for Healthcare Providers
            </p>
            <p className="about-description text-dark bold_text">
              <b>Enhance Efficiency with Advanced Medical Billing Services</b>
            </p>
            <p className="mb-4 text-dark about_dis_text">
              At INF Healthcare, we are your trusted partner in providing a
              comprehensive range of services for optimized Revenue Cycle
              Management (RCM). Our commitment to exceptional customer service
              means that we handle your billing needs with efficiency and
              transparency, keeping you informed every step of the way. Our core
              competencies include accurate coding, timely claim submissions,
              and meticulous denial management, maximizing your reimbursements
              and minimizing revenue loss.
            </p>
            <button className="make_appoint_btn">
                          Make an Appointment{" "}
                          <img src="image/iconArrow.svg" alt="Arrow Icon" loading="lazy" />
                        </button>
          </div>
          <div className="col-md-6 ">
            <div className="inside_image_about_box position-relative w-100 h-100">
              <div className="w-100 h-100 about-main">
              <img
              src="./image/Rectangle 20.png"
              alt="Healthcare professional discussing billing with a client"
              className="about-image img-fluid"
              loading="lazy"
            />
              </div>
            
            <button type="button" className="btn bg-white shadow-lg rounded-circle about-play-butn py-2">
              <img
                src="./image/Mask group.png"
                alt="INF-Healthcare"
                loading="lazy"
              />
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeabout;
