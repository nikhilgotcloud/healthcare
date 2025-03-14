import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RotatingTextButton from "../rotatebtn/RotatingTextButton";
import { useState, useEffect } from "react";
import './contacthero-style.css'

interface HeroContent {
  image: string;
  header: string;
  detail: string;
  description: string;
  showBackButton?: boolean;
}

type RouteContentMap = {
  [key in "/contact" | "/about" | "/services" | "/servicedetail" | "/blogdetail"| "/blog"]: HeroContent;
}

const Contacthero: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(true);

  const contentMap: RouteContentMap = {
    "/contact": {
      image: "./image/contacthero.png",
      header: "Contact Us Today",
      detail: "Get in Touch With Our Experts",
      description: "We're here to help and answer any questions you might have"
    },
    "/about": {
      image: "./image/abouthero.png",
      header: "About Our Company",
      detail: "Discover Our Story",
      description: "Learn about our mission, values, and commitment to excellence"
    },
    "/services": {
      image: "./image/serviceshero.png",
      header: "Our Services",
      detail: "Comprehensive Solutions",
      description: "Explore our range of professional services tailored to your needs"
    },
    "/servicedetail": {
      image: "./image/serviceshero.png",
      header: "Service Details",
      detail: "In-Depth Information",
      description: "Detailed insights into our specialized services"
    },
    "/blogdetail": {
      image: "./image/blog-detail.png",
      header: "Blog Insights",
      detail: "Latest Updates",
      description: "Stay informed with our latest articles and industry insights"
    },
    "/blog": {
      image: "./image/blog-detail.png",
      header: "Blog Insights",
      detail: "Latest Updates",
      description: "Stay informed with our latest articles and industry insights"
    }
  };

  const defaultContent: HeroContent = {
    image: "./image/404hero.png",
    header: "Page Not Found",
    detail: "Oops! This page does not exist.",
    description: "The page you’re looking for might have been moved or deleted.",
    showBackButton: true
  };
  const currentContent = (location.pathname as keyof RouteContentMap) in contentMap
    ? contentMap[location.pathname as keyof RouteContentMap]
    : defaultContent;

  useEffect(() => {
    console.log(location)
    setAnimate(false);
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const headStyle: React.CSSProperties = {
    backgroundColor: "#ab0000",
    borderRadius: "100px",
    border: "0",
    fontSize: "18px",
    lineHeight: "16px",
    fontWeight: 400,
    padding: "12px 24px",
    cursor: "pointer"
  };
  const goBackHandler = () => {
    navigate("/");
  };
  const btncolor = { backgroundColor: '#ab0000' }

  return (
    <div className="header_containter container">
      <div className="hero-container  position-relative">
        <div className="hero-wrapper">
          <div className="hero-image">
            <img src={currentContent.image} alt="Hero" />
            <div className="hero-content">
              <div className="col-lg-3">
                <span
                  className={`badge mb-3 text-white  crausal_lorem ${animate ? "animate__animated animate__pulse" : ""}`}
                  style={headStyle}
                >
                  {currentContent.header}
                </span>
              </div>
              <h1 className={`${animate ? "animate__animated animate__fadeInRight" : ""}`}>
                <b>{currentContent.detail}</b>
              </h1>
              <div className="hero-footer">
                <div className="animate__animated animate__fadeIn">
                  <RotatingTextButton />
                </div>
                <p className={`${animate ? "animate__animated animate__fadeInUpBig" : ""}`}>
                  <b>{currentContent.description}</b>
                </p>
              </div>
              {/* <p className={`${animate ? "animate__animated animate__fadeInUpBig" : ""}`}>
                <b>{currentContent.description}</b>
              </p>  */}
              
            </div>
            {currentContent.showBackButton && (
              <span
                className={`badge m-5 w-50 text-white make_appoint_btn  ${animate ? "animate__animated animate__pulse" : ""}`}
                style={headStyle}
                onClick={goBackHandler}
              >
                Go Back
              </span>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacthero;