import React, { useEffect, useState } from "react";
import "./carousel-style.css";
import RotatingTextButton from "../rotatebtn/RotatingTextButton";

const CarouselComponent: React.FC = () => {
  const images = [
    {
      src: "./image/hero-slider/hero-1.jpg",
      header: "Lorem Ipsum is sumply dun",
      detail: "Lorem Ipsum is sumply dummy text",
      description:
        "Lorem Ipsum is simply dummy text of the printing  is simply dummy text of the printing",
    },
    {
      src: "./image/hero-slider/hero-2.jpg",
      header: "Lorem Ipsum is sumply dun",
      detail: "Lorem Ipsum is sumply dummy text",
      description:
        "Lorem Ipsum is simply dummy text of the printing  is simply dummy text of the printing",
    },
    {
      src: "./image/hero-slider/hero-1.jpg",
      header: "Lorem Ipsum is sumply dun",
      detail: "Lorem Ipsum is sumply dummy text",
      description:
        "Lorem Ipsum is simply dummy text of the printing  is simply dummy text of the printing",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 6000);

      return () => clearInterval(interval); 
    }
  }, [currentIndex, images.length]);
  
  // hook for reset animation when slide changes -
  useEffect(() => {
    setAnimate(false);
    // Small timeout to ensure the animation class is removed before adding it again
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const headStyle: React.CSSProperties = {
    backgroundColor: "#ab0000",
    borderRadius: "100px",
    border: "0",
    fontSize: "18px",
    lineHeight: "16px",
    fontWeight: 400,
    transition: "all 1s ease",
    cursor: "pointer",
  };
  return (
    <div className="carousel-container position-relative d-flex align-items-center py-3 m-auto">
      <button
        className="carousel-control left-arrow position-absolute d-none d-md-block"
        onClick={handlePrev}
      >
        <i className="fa-solid fa-arrow-left control-icon"></i>
      </button>
      <div className="carousel-wrapper overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={image.src} alt={`carousel-${index}`} />
            <div className="carousel-text">
              <div className="col-lg-3">
              <span
                className={`badge mb-3 text-white about-us-butn p-3 ${
                  index === currentIndex && animate ? "animate__animated animate__pulse" : ""
                }`}
                style={headStyle}
              >
                {image.header}
              </span>
              </div>
             
              <h1 className={`${index === currentIndex && animate ? "animate__animated animate__fadeInRight" : ""}`}>
                <b>{image.detail}</b>
              </h1>
              <div className="carousel-footer">
                <div className="animate__animated animated__fadeIn"> <RotatingTextButton/></div>
               
                <p className={`${index === currentIndex && animate ? "animate__animated animate__fadeInUpBig " : ""}`}>
                
                  <b>{image.description}</b>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control right-arrow position-absolute d-none d-md-block"
        onClick={handleNext}
      >
        <i className="fa-solid fa-arrow-right control-icon"></i>
      </button>
      
    </div>

  );
};

export default CarouselComponent;
