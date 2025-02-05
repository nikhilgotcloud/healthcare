import React from "react";
import "./homeservices-style.css";

const Homeservices = () => {
  const arrowstyles = { width: "40px", height: "40px" };
  const headStyle: React.CSSProperties = {
    color: "#004457",
    borderRadius: "100px",
    border: "0",
    fontSize: "18px",
    lineHeight: "16px",
    fontWeight: 400,
    transition: "all 1s ease",
  };
  
  const svgStyles: React.CSSProperties = {
    userSelect: "none",
    width: "100%",
    height: "100%",
    display: "inline-block",
    fill: "rgb(224, 223, 220)",
    flexShrink: 0,
    cursor: "auto",
  };

  const servicesData = [
    {
      id: 1,
      title: "Denial Management",
      image: "./image/services/denial-managment.png",
      description: "Lorem Ipsum is simply dummy text of",
      type: "card",
    },
    {
      id: 2,
      title: "Hospital Billing",
      image: "./image/services/hospital-billing.png",
      description: "Lorem Ipsum is simply dummy text of",
      type: "card",
    },
    {
      id: 3,
      title: "Revenue Cycle",
      image: "./image/services/denial-managment.png",
      description: "Lorem Ipsum is simply dummy text of",
      type: "card",
    },
    {
      id: 4,
      title: "Medical Billing",
      image: "./image/services/medical-billing.png",
      description: "Lorem Ipsum is simply dummy text of",
      type: "card",
    },
    {
      id: 5,
      title: "Virtual Assistant",
      image: "./image/services/medical-virtual-assistant.png",
      description: "Lorem Ipsum is simply dummy text of",
      type: "card",
    },
    {
      id: 6,
      title: "Physician Billing",
      image: "./image/services/physician Billing.png",
      description: "Lorem Ipsum is simply dummy text of",
      type: "card",
    },
    {
      id: 7,
      title: "HME Billing",
      image: "./image/services/hme-billing.png",
      description: "Lorem Ipsum is simply dummy text of",
      type: "extendcard",
    },
    {
      id: 8,
      title: "DME Billing",
      image: "./image/services/dme-billing.png",
      description: "Lorem Ipsum is simply dummy text of",
      type: "extendcard",
    },
  ];

  return (
    <section className="service-section py-5">
      <div className="container">
        
        <div className="row">
          <div className="col-12 text-center mt-3">
            <span
              className="badge badge-white mb-3 bg-white about-us-butn p-3"
              style={headStyle}
            >
              Services
            </span>
            <h2 className="about-title text-white">Our Services</h2>
            <p className="text-white p-2">
              Seamless Collaboration for Superior Patient Outcomes
            </p>
          </div>
        </div>

       
        <div className="row g-4 p-3 justify-content-center">
          {servicesData.map((card) => {
            // Determine the grid classes based on card type
            // For standard cards: desktop -> 3 per row (col-lg-4)
            // For extended cards: desktop -> 2 per row (col-lg-6)
            const colClass =
              card.type === "card"
                ? "col-12 col-md-6 col-lg-4"
                : "col-12 col-md-6 col-lg-6";

            const containerClass =
              card.type === "card"
                ? "service-card-container"
                : "service-extendcard-container";

            return (
              <div key={card.id} className={colClass}>
                {/* <div className={containerClass}>
                  <img
                    src={card.image}
                    alt="Medical Consultation"
                    className="service-card-image"
                  />
                  <div className="service-content-area">
                    <div className="service-row-custom">
                      <div className="service-info-column">
                        <h2 className="service-title">{card.title}</h2>
                        <p>{card.description}</p>
                      </div>
                      <div className="service-icon-column">
                        <div className="service-circle">
                          <div className="service-circle-icon" style={arrowstyles}>
                            <svg
                              className="service-arrow-icon"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className={containerClass}>
                  <div className="card ">
                    <div>
                      <img
                        src={card.image}
                        alt="Medical Consultation"
                        className="service-card-image"
                      />
                    </div>
                    <h2 className="card__title px-3">{card.title}</h2>

                    <div className="card__wrapper mb-2">
                      <div className="card__subtitle ms-3 ">{card.description}</div>
                      <div className="card__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          style={svgStyles}
                          color="rgb(224, 223, 220)"
                        >
                          <g color="rgb(224, 223, 220)">
                            <circle
                              cx="128"
                              cy="128"
                              r="96"
                              opacity="0.2"
                            ></circle>
                            <circle
                              cx="128"
                              cy="128"
                              r="96"
                              fill="none"
                              stroke="rgb(224, 223, 220)"
                              stroke-miterlimit="10"
                              stroke-width="16"
                            ></circle>
                            <polyline
                              points="134.1 161.9 168 128 134.1 94.1"
                              fill="none"
                              stroke="rgb(224, 223, 220)"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                            ></polyline>
                            <line
                              x1="88"
                              y1="128"
                              x2="168"
                              y2="128"
                              fill="none"
                              stroke="rgb(224, 223, 220)"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                            ></line>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Homeservices;
