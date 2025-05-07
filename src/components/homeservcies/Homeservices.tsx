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
      cover_img : {url : "./image/services/denial-managment copy.png"},
      title : "Denial Management",
      subtitle  :"Lorem Ipsum is simply dummy text of",
      slug : 1 ,

    },
    {
      id : 2,
      cover_img : {url : "./image/services/hospital-billing.png"},
      title : "Hospital Billing",
      subtitle  :"Lorem Ipsum is simply dummy text of",
      slug : 1 ,
      
    },
    {
      id : 3,
      cover_img : {url : "./image/services/hme-billing.png"},
      title : "Revenue Cycle Management",
      subtitle  :"Lorem Ipsum is simply dummy text of",
      slug : 1 ,
      
    },
    {
      id : 4,
      cover_img : {url : "./image/services/dme-billing.png"},
      title : "Medical Billing",
      subtitle  :"Lorem Ipsum is simply dummy text of",
      slug : 1 ,
      
    },
  
    {
      id : 5,
      cover_img : {url : "./image/services/medical-virtual-assistant.png"},
      title : "Medical Virtual Assistant",
      subtitle  :"Lorem Ipsum is simply dummy text of",
      slug : 1 ,
      
    },
  
    {
      id : 6,
      cover_img : {url : "./image/services/physician Billing.png"},
      title : "Physician Billing",
      subtitle  :"Lorem Ipsum is simply dummy text of",
      slug : 1 ,
      
    },
    {
      id : 7,
      cover_img :  {url : "./image/services/hme-billing.png"},
      title : "HME Billing",
      subtitle  :"Lorem Ipsum is simply dummy text of",
      slug : 1 ,
      
    },
    {
      id : 8,
      cover_img :  {url : "./image/services/dme-billing.png"}, 
      title : "DME Billing",
      subtitle  :"Lorem Ipsum is simply dummy text of",
      slug : 1 ,
      
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
             
              <div key={service.id} className={colClass}>
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