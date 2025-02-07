import React, { useState } from "react";
import "./servicemid-style.css";
import { Link } from "react-router-dom";

const Servicemid = () => {

  const cardData = [
    {
      id: 1,
      image: "./image/denial-card1.png",
      title: "Identifying Key Denial Reasons",
      description:
        "At INF Healthcare, our denial management experts meticulously analyze and identify the key reasons behind claim denials. By understanding the root causes, we develop effective strategies to minimize denials, optimize revenue, and improve financial performance for healthcare providers.",
    },
    {
      id: 2,
      image: "./image/denial-card2.png",
      title: "Categorizing Denials",
      description:
        "With our expert Denial Management Services, we categorize denials based on common patterns and trends. Through this classification, our team gains valuable insights that enable implementation of targeted solutions to streamline processes and ensure maximum reimbursement for healthcare organizations.",
    },
    {
      id: 3,
      image: "./image/denial-card3.png",
      title: "Establishing Tracking Mechanisms",
      description:
        "To optimize denial management for healthcare providers we establish a robust tracking mechanism that monitors the entire claims process. From submission to adjudication, we track each claim, identify bottlenecks, and implement proactive measures. This allows us to mitigate denials, reduce revenue leakage, and enhance financial outcomes.",
    },
    {
      id: 4,
      image: "./image/denial-card4.png",
      title: "Monitoring and Preventing",
      description:
        "The scope of our denial management services includes closely tracking claim status and payment patterns. This proactive approach enables us to identify potential risks in real-time, apply corrective actions promptly, and prevent denials from occurring. We empower healthcare providers to achieve sustainable financial performance and revenue optimization.",
    },
  ];
  const categories = [
    "Revenue Cycle Management",
    "Denial Management",
    "Medical Billing",
    "Physician Billing Services",
    "DME Billing",
    "Hospital Billing",
    "HME Billing",
    "Medical Virtual Assistant",
  ];
const sidecard:React.CSSProperties={borderRadius:'20%'}
  const headstyle: React.CSSProperties = {
    backgroundColor: "#004457",
    borderRadius: "100px",
    border: "0",
    fontSize: "18px",
    lineHeight: "16px",
    fontWeight: 400,
    transition: "all 1s ease",
  };

  const fontstyle: React.CSSProperties = { fontSize: "14px" };
  const bgstyle: React.CSSProperties = { backgroundColor: "rgb(0, 73, 86)" };
  const txtstyle: React.CSSProperties = { color: "rgb(0, 73, 86)" };
  const baseStyles = {
    width: '30rem',
    border: '2px solid #004457',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  };

  const getStyles = (isHovered: boolean) => ({
    ...baseStyles,
    color: isHovered ? 'white' : '#004457',
    backgroundColor: isHovered ? '#004457' : 'white',
  });

  // Create an object to track hover state for each category
  const [hoverStates, setHoverStates] = useState<{ [key: number]: boolean }>(
    categories.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
  );

  const handleMouseEnter = (index: number) => {
    setHoverStates(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleMouseLeave = (index: number) => {
    setHoverStates(prev => ({
      ...prev,
      [index]: false
    }));
  };

  
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-1"></div>
        {/* <!-- Main Blog Listing Column (8 columns wide) --> */}
        <div className="col-lg-6">
          <span
            className="badge badge-white mb-3 p-3 text-white shadow-lg"
            style={headstyle}
          >
            SERVICES
          </span>
          <h2 className="about-title my-3">Denial Management Services</h2>
          <p className="description mb-4">
            Prevent Denials and Focus on Revenue Maximization
          </p>
          <div className="row">
            <div className="col-lg-6"></div>
          </div>

          <div className="container">
            {Array.from(
              { length: Math.ceil(cardData.length / 2) },
              (_, index) => (
                <div className="row mb-4" key={index}>
                  {cardData.slice(index * 2, index * 2 + 2).map((card) => (
                    <div key={card.id} className="col-lg-6">
                      <div className="why-feature ">
                        <div className="box-number text-dark">{card.id}</div>
                        <div className="box-icon justify-content-center mb-3">
                          <img
                            src={card.image}
                            alt=""
                            className="card-image"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="divider mb-3 w-75 mx-5"></div>

                        <p className="text-muted mb-2 px-2 small text-center card-description py-2">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>

          <div className="row my-2">
            <div className="col-lg-7 me-1">
              <p className="mb-1 mt-4 denial-service-head">
                Denial Management Services: <br />
                Unlocking Your Revenue Potential
              </p>
              <p className="denial-service-para">
                At INF Healthcare we are the leading trusted denial management
                services provider in the USA. Our team is dedicated to
                optimizing revenue and minimizing denials for healthcare
                providers. We offer comprehensive solutions to tackle the
                complexities of denial management in the ever-evolving
                healthcare sector.
              </p>
            </div>

            <div className="col-lg-2">
              <img
                src="./image/denial-s1.png"
                alt="DenialManagementservice"
                loading="lazy"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center w-100 py-4">
            {/* <!-- Previous Section --> */}
            <div className="d-flex align-items-start">
              <div
                className="rounded-circle bg-teal-800 p-3 d-flex align-items-center justify-content-center"
                style={bgstyle}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="ms-3">
                <div className="text-danger mb-1" style={fontstyle}>
                  Previous
                </div>
                <div className="text-teal-800 fw-medium" style={txtstyle}>
                  Revenue Cycle Management
                </div>
              </div>
            </div>

            {/* <!-- Next Section --> */}
            <div className="d-flex align-items-end text-end">
              <div className="me-3">
                <div className="text-danger mb-1" style={fontstyle}>
                  Next
                </div>
                <div className="text-teal-800 fw-medium" style={txtstyle}>
                  Medical Billing
                </div>
              </div>
              <div
                className="rounded-circle bg-teal-800 p-3 d-flex align-items-center justify-content-center"
                style={bgstyle}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
        {/* <!-- Sidebar Column (4 columns wide) --> */}
        <div className="col-lg-3 mt-3">
          {/* <!-- Recent Articles Card --> */}

          {/* <!-- Categories Card --> */}
          <div className="card border-0 shadow-sm  mb-5" >
            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center rounded-lg  mt-4">
              <h5 className="mb-0">Our Service</h5>
              <Link to="#" className="text-decoration-none">
                <svg
                  className="w-10 h-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#004457"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </Link>
            </div>
            <div className="card-body bg-white mb-4">
              {categories.map((category, index) => (
                <div key={index} className="d-flex mb-2">
                  <span
                    className="badge badge-pill blog-category-badge p-3 rounded-pill"
                    style={getStyles(hoverStates[index])}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
                  >
                    {category}{" "}
                    <img src="image/iconArrow.svg" alt="" className="ms-2" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* <!-- Tag Cloud Card --> */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center rounded-lg mt-4">
              <h5 className="mb-0">Book Your Free Demo</h5>
              <Link to="#" className="text-decoration-none">
                <svg
                  className="w-10 h-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#004457"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                  />
                </svg>
              </Link>
            </div>
            <form className="w-100 d-block mb-4" id="appointmentForm">
              <div className="appoint_form_box">
                <div className="row p-0 m-0">
                  <div className="col-md-12  input_box">
                    <input
                      type="text"
                      className="form-control input form-bg"
                      id="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-md-12 input_box ">
                    <input
                      type="text"
                      className="form-control input form-bg"
                      id="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-md-12 input_box">
                    <input
                      type="tel"
                      className="form-control input form-bg"
                      id="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="col-md-12 input_box">
                    <input
                      type="email"
                      className="form-control input form-bg"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="col-md-12 input_box">
                    <select
                      className=" form-control input form-bg"
                      aria-label="Default select example"
                      id="option"
                    >
                      <option selected>Please Choose an option</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-md-12 input_box">
                    <textarea
                      className="form-control input form-bg"
                      id="message"
                      defaultValue="Type Your Message"
                    />
                  </div>
                  <div className="col-md-12 input_box">
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LfwvZcqAAAAAMGyPVAK9I7Lzd6is46YGys2gyJV"
                      data-callback="onRecaptchaSuccess"
                    ></div>
                  </div>
                  <div className="col-md-12  btn_box">
                    <button className="make_appoint_btn ">
                      Make an Appointment{" "}
                      <img src="image/iconArrow.svg" alt="" loading="lazy" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicemid;
