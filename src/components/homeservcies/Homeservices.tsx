import React from 'react';
import './homeservices-style.css'

const Homeservices = () => {
   const arrowstyles= {width:'40px', height:'40px'};
   const headstyle ={color:'#004457'}

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
        {/* Section Header */}
        <div className="row">
          <div className="col-12 text-center mt-3">
            <span className="badge badge-white mb-3 bg-white about-us-butn p-3" style={headstyle}>
              Services
            </span>
            <h2 className="about-title text-white">Our Services</h2>
            <p className="text-white p-2">Seamless Collaboration for Superior Patient Outcomes</p>
          </div>
        </div>

        {/* Cards Section */}
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

                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Homeservices;
