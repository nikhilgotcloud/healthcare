import React, {  useState } from "react";
import './carousel-style.css'

const CarouselComponent: React.FC = () => {
  const images = [
    "./image/hero-slider/hero-1.jpg",
    "./image/hero-slider/hero-2.jpg",
    "./image/hero-slider/hero-1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container position-relative d-flex align-items-center py-3">
      <button
        className="carousel-control left-arrow position-absolute"
        onClick={handlePrev}
      >
       <i className="fa-solid fa-arrow-left control-icon"></i>
      </button>
      <div className="carousel-wrapper overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Best Healthcare services ${index + 1}`}
            className={`carousel-image  ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
      <button
        className="carousel-control right-arrow position-absolute"
        onClick={handleNext}
      >
        <i className="fa-solid fa-arrow-right control-icon"></i>
      </button>
    </div>
  );
};

export default CarouselComponent;
