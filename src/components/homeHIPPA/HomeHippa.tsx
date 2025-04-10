import React from "react";
import "./hippa-style.css";

const HomeHippa: React.FC = () => {
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
    <div className="healthcare-section hipp_section">
      <div className="section-container">
        <div className="row">
          <div className="col-md-6">
            <div className="content-container h-100">
              <span className="badge badge-white mb-3 bg-white about-us-butn p-3 shadow-lg" style={headstyle}>
                HIPPA
              </span>

              <h2 className="main-heading mb-2">We Are HIPAA Compliant!</h2>
              <p className="description mb-4">
                Safeguarding Your Data, Ensuring HIPAA Compliance with Confidence
              </p>
              <h3 className="services-heading">
                Embrace Our HIPAA-Compliant Services
              </h3>

              <p className="description mb-3">
                Protecting patient privacy and securing sensitive healthcare
                information is our top priority. Our HIPAA Compliant Services offer
                healthcare providers peace of mind, knowing that their data is
                handled with the utmost confidentiality and in compliance with
                industry regulations.
              </p>
              <h2 className="services-heading mb-2">
                Key Features of Our HIPAA-Compliant Services:
              </h2>
              <ul className="hippa-list">
                <li>
                  <span className="hippa-1-icon me-3">
                    <img src="/image/homesection/hippa-1.png" alt="" />
                  </span>
                  <div className="image_text">
                    <b>Robust Data Security</b>
                    Implementing stringent measures to safeguard patient data
                    against unauthorized access and breaches.
                  </div>
                </li>
                <li>
                  <span className="hippa-2-icon me-3">
                    <img src="/image/homesection/hippa-2.png" alt="" />
                  </span>
                  <div className="image_text">
                    <b>Privacy Safeguards</b>
                    Ensuring that only authorized personnel have access to patient
                    information, maintaining strict confidentiality.
                  </div>
                </li>
                <li>
                  <span className="hippa-3-icon me-3">
                    <img src="/image/homesection/hippa-3.png" alt="" />
                  </span>
                  <div className="image_text">
                    <b>Risk Assessment and Mitigation</b>
                    Identifying potential risks to data security and implementing
                    proactive measures to mitigate them.
                  </div>
                </li>
                <li>
                  <span className="hippa-4-icon me-3">
                    <img src="/image/homesection/hippa-4.png" alt="" />
                  </span>
                  <div className="image_text">
                    <b>Training and Education</b>

                    Keeping our team updated with the latest HIPAA regulations,
                    ensuring adherence to compliance standards.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-container">
              <img
                src="/image/homesection/hippa.png"
                alt="Hippa-Compliance"
                className="shield-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHippa;
