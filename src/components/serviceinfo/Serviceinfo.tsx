import React from "react";
import "./serviceinfo-style.css";

const Serviceinfo: React.FC = () => {
  const btncolor= {backgroundColor:'#ab0000'}
   const headstyle: React.CSSProperties = {
        backgroundColor: "#004457",
        borderRadius: "100px",
        border: "0",
        fontSize: "18px",
        lineHeight: "16px",
        fontWeight: 400,
        transition: "all 1s ease",
      };

  return (
    <section className="healthcare-section my-4">
      <div className="section-container">
        
        <div className="image-container">
          <img
            src="./image/service-info.png"
            alt="INFHealthcare medical services"
            className="shield-image"
            loading="lazy"
          />
        </div>

        
        <div className="content-container">
          <span className="badge badge-white mb-4 text-white about-us-butn p-3 shadow-lg" style={headstyle}> 
            LOREM IPSUM
          </span>
          <h1 className="main-heading mb-5">
          Lorem Ipsum
          </h1>
          <p className="description ">
          Quis autem vel eum iure reprehenderit rui in ea volurate veli esse ruam nihil molestiae conseauatur vel illum rui dolorema eum fugiat ruo voluetas nulla pariatur.
          </p>
      
          <ul className="services-list mt-5">
            <li>
              <span className="checkmark-icon mb-1"><img src="./image/homesection/group18.png" alt="" /></span> With our in-depth knowledge of denial management, payer policies, and industry regulations.
            </li>
            <li>
              <span className="checkmark-icon mb-1"><img src="./image/homesection/group18.png" alt="" /></span>With our in-depth knowledge of denial management, payer policies, and industry regulations
              
            </li>
            <li>
              <span className="checkmark-icon mb-1"><img src="./image/homesection/group18.png" alt="" /></span>With our in-depth knowledge of denial management, payer policies, and industry regulations
            </li>
            
          </ul>
          <button className="make_appoint_btn d-flex p-2 mt-5" style={btncolor}>
                          Request Demo{" "}
                          <img src="image/iconArrow.svg" alt="Arrow Icon" loading="lazy" />
                        </button>
        </div>
      </div>
    </section>
  );
};

export default Serviceinfo;
