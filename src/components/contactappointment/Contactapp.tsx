import React from "react";
import "./contactapp-style.css";
import { Link } from "react-router-dom";

const Contactapp = () => {
  return (
    <section className="appointment_form_new">
      <div className="container">
        <div className="bg shadow-lg">
          <div className="row mob_row">
            <div className="col-lg-6">
              <div className="testimonial-card h-100 ">
                <button className="make_demo_btn ">GET IN TOUCH</button>
                <h2 className="text-white my-2">Let's Talk</h2>
                <p className="text-white">
                  Reach out today to experience personalized service and
                  optimized financial outcomes.
                </p>
                <div className="info-item d-flex align-items-center mb-4">
                  <div className="icon-wrapper">
                    <img
                      src="./image/call-bg.png"
                      alt="Phone Icon"
                      className="contact-icon"
                    />
                  </div>
                  <Link
                    to="tel:888-512-6265"
                    className="text-white text-decoration-none ms-2"
                  >
                    888-512-6265
                  </Link>
                </div>{" "}
                <br />
                <div className="info-item d-flex align-items-center mb-4">
                  <div className="icon-wrapper">
                    <img
                      src="./image/mail-bg.png"
                      alt="Email Icon"
                      className="contact-icon"
                    />
                  </div>
                  <Link
                    to="mailto:info@infhealthcare.com"
                    className="text-white text-decoration-none ms-2"
                  >
                    info@infhealthcare.com
                  </Link>
                </div>{" "}
                <br />
                <div className="info-item d-flex align-items-center">
                  <div className="icon-wrapper">
                    <img
                      src="./image/location-bg.png"
                      alt="Location Icon"
                      className="contact-icon"
                    />
                  </div>
                  <address className="text-white mb-0 ms-2">
                    600 BROADWAY, STE 200 #5035,
                    <br />
                    ALBANY, NEW YORK 12207
                  </address>
                </div>
              </div>
            </div>

            {/* Right Section - Appointment Form */}
            <div className="col-lg-6 bg-white">
              <div className="h-100 main_appoint_form">
                <div className="row p-0 m-0">
                  <div className="col-12">
                    <div className="badge appoint book-demo-butn text-white rounded -pill">
                      Book Demo
                    </div>
                    <h5>Make Appointment</h5>
                    <p className="para">
                      Maximize Your Revenue Potential: Request a Demo Now!
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form className="w-100 d-block" id="appointmentForm">
                  <div className="appoint_form_box">
                    <div className="row p-0 m-0">
                      <div className="col-md-6 input_box">
                        <input
                          type="text"
                          className="form-control input"
                          id="firstName"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 input_box">
                        <input
                          type="text"
                          className="form-control input"
                          id="lastName"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="col-md-6 input_box">
                        <input
                          type="email"
                          className="form-control input"
                          id="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="col-md-6 input_box">
                        <input
                          type="tel"
                          className="form-control input"
                          id="phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                      <div className="col-md-12 input_box">
                        <select className="form-control input" id="option">
                          <option defaultValue="">
                            Please Choose an option
                          </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col-md-12 input_box">
                        <textarea
                          className="form-control input"
                          id="message"
                          placeholder="Type Your Message"
                        ></textarea>
                      </div>
                      <div className="col-md-12 input_box">
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LfwvZcqAAAAAMGyPVAK9I7Lzd6is46YGys2gyJV"
                          data-callback="onRecaptchaSuccess"
                        ></div>
                      </div>
                      <div className="col-md-12 btn_box">
                        <button className="make_appoint_btn">
                          Make an Appointment{" "}
                          <img
                            src="image/iconArrow.svg"
                            alt="Arrow Icon"
                            loading="lazy"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactapp;
