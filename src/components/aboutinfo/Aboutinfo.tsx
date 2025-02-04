import React from "react";
import "./aboutinfo-style.css";

const Aboutinfo: React.FC = () => {
  const headstyle = { backgroundColor: "#004457" };

  return (
    <div className="healthcare-section">
      <div className="section-container">
        <div className="content-container">
          <span
            className="badge badge-white mb-3 text-white about-us-butn p-3 shadow-lg"
            style={headstyle}
          >
            About Us
          </span>

          <p className="description mb-3">
            We are committed to providing comprehensive billing services to
            healthcare providers, enabling them to optimize their revenue cycle,
            reduce denials, and increase collections. With our support,
            healthcare providers can focus on delivering quality patient care
            while we handle the complexities of medical billing. Our dedicated
            team of experienced medical billing professionals is committed to
            optimizing your revenue cycle.
          </p>
          
          <ul className="hippa-list">
            <li>
              <span className="hippa-1-icon me-3">
                <img src="./image/homesection/hippa-1.png" alt="" />
              </span>
              <div>
                <b>Expertise</b>
                Our specialists stay up-to-date with industry changes, ensuring accurate reimbursement and timely claims submission.
              </div>
            </li>
            <li>
              <span className="hippa-2-icon me-3">
                <img src="./image/homesection/hippa-2.png" alt="" />
              </span>
              <div>
                <b>Advanced Technology</b>
                We leverage cutting-edge tools and streamlined processes for fast and accurate billing.

              </div>
            </li>
            <li>
              <span className="hippa-3-icon me-3">
                <img src="./image/homesection/hippa-3.png" alt="" />
              </span>
              <div>
                <b>Regulatory Compliance</b>
                We navigate complex regulations and reimbursement policies, keeping you in compliance.
              </div>
            </li>
            <li>
              <span className="hippa-4-icon me-3">
                <img src="./image/homesection/hippa-4.png" alt="" />
              </span>
              <div>
                <b>Customized Solutions</b>
                Tailored to the unique needs of each practice, maximizing revenue and collections.
              </div>
            </li>
            <li>
              <span className="hippa-4-icon me-3">
                <img src="./image/homesection/hippa-4.png" alt="" />
              </span>
              <div>
                <b>Reliable Support</b>
                Trust in our commitment to delivering personalized, responsive service and addressing your specific billing challenges.
              </div>
            </li>
            
          </ul>
        </div>
        <div className="image-container">
          <img
            src="./image/about-us.png"
            alt="Hippa-Compliance"
            className="shield-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutinfo;
