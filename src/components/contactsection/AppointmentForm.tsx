import React from "react";
import "./appointment-style.css";
import StarRating from "../Ratingstar";

const AppointmentForm: React.FC = () => {
  return (
    <section className="appointment_form_new right_side_image_bg">
      <div className="container">
        <div className="bg shadow-lg">
          <div className="row mob_row">

            <div className="col-lg-6 testimonial_bg">
              <div className="testimonial-card h-100">

                <div className="star-rating">
                  <StarRating />
                </div>


                <div className="testimonial-text text-white mt-1">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>


                <div className="profile-section">
                  <img
                    src="/image/Frame 133.png"
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
            <div className="col-lg-6 bg-white position-relative bg_main">
              <div className="h-100 main_appoint_form">
                <div className="row p-0 m-0">
                  <div className="col-12">
                    <div className="badge appoint book-demo-butn text-white rounded-pill">
                      Book Demo
                    </div>
                    <h5 className="appoint_title">Book Your Free Demo</h5>

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
                          {/* <img src="image/iconArrow.svg" alt="Arrow Icon" loading="lazy" /> */}
              <i className="fa-solid fa-arrow-up "></i>

                        </button>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
              <img className="bg_img" src="/image/contact_form_bg.png" alt="" />
              <div className="calender_bg">
                {/* <img src="/image/calender.svg" alt="" /> */}

           
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 50 50">
                 
                  <defs style={{fill:"#ab0000"}}>
                    {/* <style>
                      .st0 {
                        fill: #ab0000;}
                    </style> */}
                  </defs>
                  <path className="st0" d="M11.9,33.7c.8-.2,1.4.5,1.2,1.2s0,0,0,0l-4.1,4.1s0,0,0,0c-.2,0-.5,0-.7,0-.4,0-2.1-1.8-2.2-2.2s-.2-1,.3-1.2c.9-.5,1.6.7,2.2,1.2.2,0,2.8-3.1,3.4-3.2Z" />
                  <circle className="st0" cx="28.2" cy="43" r=".9" />
                  <circle className="st0" cx="44.2" cy="13.9" r=".9" />
                  <path className="st0" d="M44.2,5.1h-4.3v-1.2c0-1.6-1.3-2.9-2.9-2.9s-2.9,1.3-2.9,2.9v1.2h-15.4v-1.2c0-1.6-1.3-2.9-2.9-2.9s-2.9,1.3-2.9,2.9v1.2h-3.9c-2.6,0-4.8,2.1-4.8,4.8v16.3c0,.5.4.9.9.9s.9-.4.9-.9v-11.4h33.8c.5,0,.9-.4.9-.9s-.4-.9-.9-.9H6v-3c0-1.6,1.3-2.9,2.9-2.9h3.9v1c0,1.6,1.3,2.9,2.9,2.9s1.5-.3,2.1-.9c.5-.5.9-1.3.9-2.1v-1h15.4v1c0,1.6,1.3,2.9,2.9,2.9s1.5-.3,2.1-.9c.5-.5.9-1.3.9-2.1v-1h4.3c1.6,0,2.9,1.3,2.9,2.9v35.6c0,.9-.7,1.6-1.6,1.6h-.1c-1,0-1.7-.8-1.7-1.7v-2c0-.7-.6-1.3-1.3-1.3h-11.4c-.5,0-.9.4-.9.9s.4.9.9.9h10.8v1.4c0,.6.2,1.2.5,1.7H4.5c-.9,0-1.6-.7-1.6-1.6v-1.4h21c.5,0,.9-.4.9-.9s-.4-.9-.9-.9h-9.3c1.7-1.4,2.8-3.6,2.8-5.9,0-4.3-3.5-7.8-7.8-7.8s-7.8,3.5-7.8,7.8,1.1,4.5,2.8,5.9h-2.2c-.7,0-1.3.6-1.3,1.3v2c0,1.9,1.6,3.5,3.5,3.5h41s0,0,0,0h0s0,0,0,0h0c1.9,0,3.5-1.6,3.5-3.5V9.9c0-2.6-2.1-4.8-4.8-4.8ZM16.6,8c0,.5-.4.9-.9.9s-.9-.4-.9-.9V3.9c0-.5.4-.9.9-.9s.9.4.9.9v4.1ZM37.8,8c0,.5-.4.9-.9.9s-.9-.4-.9-.9V3.9c0-.5.4-.9.9-.9s.9.4.9.9v4.1ZM3.6,36.3c0-3.3,2.7-6,6-6s6,2.7,6,6-2.4,5.7-5.5,5.9h-.9c-3.1-.2-5.5-2.8-5.5-5.9Z" />
                  <path className="st0" d="M12.5,26.9c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM12.5,21.4c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
                  <path className="st0" d="M22.2,26.9c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM22.2,21.4c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
                  <path className="st0" d="M31.9,26.9c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM31.9,21.4c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
                  <path className="st0" d="M41.6,26.9c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM41.6,21.4c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
                  <path className="st0" d="M22.2,36.6c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM22.2,31.1c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
                  <path className="st0" d="M31.9,36.6c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM31.9,31.1c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
                  <path className="st0" d="M41.6,36.6c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM41.6,31.1c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
                </svg>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
