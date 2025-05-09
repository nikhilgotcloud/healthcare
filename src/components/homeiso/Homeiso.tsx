import React from "react";
import "./homeiso-style.css";

const Homeiso: React.FC = () => {
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
    <section className="healthcare-section my-4">
      <div className="section-container ">
        <div className="row">
          <div className="col-md-6 ">
            <div className="image-container h-100">
              <img
                src="/image/homesection/iso_certified.png"
                alt="INFHealthcare ISO Certified"
                className="shield-image"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="content-container h-100">
              <span className="badge badge-white mb-4 bg-white about-us-butn p-3 shadow-lg" style={headstyle}>
                ISO CERTIFIED
              </span>
              <h1 className="main-heading mb-5">
                Empowering Providers,<br />Transforming Healthcare
              </h1>
              <p className="description">
                With a highly skilled and efficient team, we pride ourselves on
                delivering exceptional results. We use the latest technology
                solutions to offer a comprehensive range of services, ensuring
                accurate and timely processes that optimize your financial health.
              </p>
              <p className="description mb-3">
                As an ISO 27000-certified company, we prioritize data security and
                confidentiality. This certification demonstrates our commitment to
                implementing robust information security practices and safeguarding
                your sensitive information.
              </p>
              <p className="description mb-3">
                Rest assured, your data is protected through stringent controls and
                measures, providing you with peace of mind while maintaining the
                highest standards of service quality.
              </p>

              <h2 className="services-heading mb-2">Our Services Include</h2>
              <ul className="services-list">
                <li>
                  <span className="checkmark-icon mb-1"><img src="/image/tick_one.svg" alt="" /></span>Strong safeguards against
                  unauthorized access and cyber threats.
                </li>
                <li>
                  <span className="checkmark-icon mb-1"><img src="/image/tick_one.svg" alt="" /></span>Adherence to industry
                  regulations for data protection.
                </li>
                <li>
                  <span className="checkmark-icon mb-1"><img src="/image/tick_one.svg" alt="" /></span>Proactive measures to
                  identify and mitigate potential risks.
                </li>
                <li>
                  <span className="checkmark-icon mb-1"><img src="/image/tick_one.svg" alt="" /></span>Assured confidentiality
                  and meticulous handling of data.
                </li>
                <li>
                  <span className="checkmark-icon mb-1"><img src="/image/tick_one.svg" alt="" /></span>Setting us apart as a
                  reliable and trusted partner.
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Homeiso;
