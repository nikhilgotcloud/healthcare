import React, { useEffect, useState } from "react";
import "./homeservices-style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Service } from "../../types/services.interface"; // Adjust the path to your interface file

const Homeservices = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const arrowstyles = { width: "40px", height: "40px" };
  const headStyle: React.CSSProperties = {
    color: "#004457",
    borderRadius: "100px",
    border: "0",
    fontSize: "18px",
    lineHeight: "16px",
    fontWeight: 400,
    transition: "all 1s ease",
    cursor: "pointer",
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

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://trusty-amusement-fb0d575893.strapiapp.com/api/services?populate=*"
        );
        console.log(response)
        setServices(response.data.data); 
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch services");
        setLoading(false);
        console.log("my name is khan ")

      }
    };

    fetchServices();
  }, []); 
  

  const staticData = [
    {
      id : 1,
      cover_img : {url : "./image/services/Services-Denial-Management.webp"},
      title : "Denial Management",
      subtitle  :"Our team ensures efficient resolution of claim denials, minimizing revenue loss and optimizing reimbursement for healthcare providers.",
      slug : 'denial-Management' ,

    },
    {
      id : 2,
      cover_img : {url : "./image/services/Services-Hospital-Billing.webp"},
      title : "Hospital Billing",
      subtitle  :"We offer comprehensive hospital billing services, including accurate coding, claim submission, and timely follow-up, ensuring smooth financial operations.",
      slug : 'hospital-billing' ,
      
    },
    {
      id : 3,
      cover_img : {url : "./image/services/Services-Revenue-Cycle-Management.webp"},
      title : "Revenue Cycle Management",
      subtitle  :"Maximize your revenue potential with our revenue cycle management experts, covering everything from patient registration to claim submission.",
      slug : "revenue-cycle-management" ,
      
    },
    {
      id : 4,
      cover_img : {url : "./image/services/Services-Medical-Billing.webp"},
      title : "Medical Billing",
      subtitle  :"Our medical billing experts ensure timely and accurate claim submission, efficient reimbursement, and revenue optimization for healthcare providers.",
      slug : "medical-billing" ,
      
    },
  
    {
      id : 5,
      cover_img : {url : "./image/services/Services-Medical-Virtual-Assistant.webp"},
      title : "Medical Virtual Assistant",
      subtitle  :"Experience the incredible benefits of superior administrative support, accurate appointment scheduling, and flawless documentation, to streamline your practice.",
      slug : 'medical-virtual-assistant' ,
      
    },
  
    {
      id : 6,
      cover_img : {url : "./image/services/Services-Physician-Billing-Header.webp"},
      title : "Physician Billing",
      subtitle  :"Our experts are trained to handle the complexities of billing, coding, and claims management, ensuring accurate reimbursement for physicians.",
      slug : "physician-billing" ,
      
    },
    {
      id : 7,
      cover_img :  {url : "./image/services/Services-HME-Billing.webp"},
      title : "HME Billing",
      subtitle  :"Our team handles coding, claims, and collections with precision to enhance operational efficiency and financial outcomes for healthcare providers.",
      slug : "hme-billing" ,
      
    },
    {
      id : 8,
      cover_img :  {url : "./image/services/Services-DME-Billing.webp"}, 
      title : "DME Billing",
      subtitle  :"Our experts ensure accurate and prompt billing for durable medical equipment, optimizing reimbursement and compliance with billing regulations.",
      slug : "dme-billing" ,
      
    },
  ]
 

  if (loading) {
    return <div className="spinner-border text-info d-flex justify-content-center" role="status">
    <span className="sr-only">Loading...</span>
  </div>;
  }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <section className="service-section padding_section py-5 header_containter">
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
          
        {/* {staticData.map((service, index) => { */}
          {staticData.map((service, index) => {
            
            // Determine the grid classes based on position
            // First 6 cards: 3 per row (col-lg-4)
            // Last 2 cards: 2 per row (col-lg-6)
            const isExtendedCard = index <= staticData.length - 3; // Last 2 cards are extended
            const colClass = isExtendedCard
            ? " col-12  col-md-6 col-xl-4 "
            : " col-12 col-md-6 col-xl-6  ";

            const containerClass = isExtendedCard
              // ? "service-extendcard-container service-card-container"
              // : "service-card-container";
              ? "  service-card-container bottom_btn service_cutPiece_bottom"
              : " service-extendcard-container service-card-container service_cutPiece_bottom";
              

              

            return (
             
              <div key={service.id} className={colClass}  onClick={()=>navigate(`/services/${service.slug}`)}>
                <div className={containerClass}>
                  <div className="card position-relative">
                    <div className="image_box_main">
                      <img
                        src={service.cover_img.url} 
                        alt={service.title}
                        className="service-card-image"
                      />
                    </div>
                    <h2 className="card__title px-3">{service.title}</h2>

                    <div className="card__wrapper mb-2">
                      <div className="card__subtitle ms-3 w-75">
                        {service.subtitle} 
                      </div>
                      <div className="card__icon new_btn_animation" onClick={()=>navigate(`/services/${service.slug}`)}>
                        {/* <i className="fa-solid fa-arrow-up non_hover_icon"></i> */}
                        {/* <i className="fa-solid fa-arrow-up hover_icon"></i> */}
                        <i className="fa-solid fa-arrow-up "></i>

                      </div>
                    </div>
                    <img
                      className="bg_crad_img"
                      src={
                        isExtendedCard
                          ? " /image/service_cut.png"
                          : " /image/long_sub.png"
                      }
                      alt=""
                    />
                    <img
                      className="bg_crad_img mobile_view_bg d-none"
                      src="/image/service_cut.png"
                      alt=""
                    />
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