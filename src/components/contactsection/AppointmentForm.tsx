import React from "react";
import "./appointment-style.css";
import StarRating from "../Ratingstar";

const AppointmentForm: React.FC = () => {
  return (
    <section className="appointment_form_new">
      <div className="container">
        <div className="bg shadow-lg">
          <div className="row">
            
            <div className="col-lg-6">
              <div className="testimonial-card h-100">
                
                <div className="star-rating">
                  <StarRating/>
                </div>

               
                <div className="testimonial-text text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>

             
                <div className="profile-section">
                  <img
                    src="./image/Frame 133.png"
                    alt="Dr. Blanco Smith"
                    className="profile-image"
                  />
                  <div className="profile-info">
                    <h3>Dr. Blanco Smith</h3>
                    <p className="text-white">SURGEON</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Appointment Form */}
            <div className="col-lg-6 bg-white">
              <div className="h-100 main_appoint_form">
                <div className="row p-0 m-0">
                  <div className="col-12">
                    <div className="badge appoint book-demo-butn text-white rounded-pill">
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
                          <option defaultValue="">Please Choose an option</option>
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
                          <img src="image/iconArrow.svg" alt="Arrow Icon" loading="lazy" />
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

export default AppointmentForm;
