import React, { useEffect, useRef } from "react";
import "./logoslider-style.css";

const logos = [
  { src: "./image/logo-slider/1.png", name: "Trizetto" },
  { src: "./image/logo-slider/2.png", name: "Office Ally" },
  { src: "./image/logo-slider/3.png", name: "eClinicalWorks" },
  { src: "./image/logo-slider/4.png", name: "Compass" },
  { src: "./image/logo-slider/5.png", name: "Epic" },
  { src: "./image/logo-slider/6.png", name: "Office Ally" },
  { src: "./image/logo-slider/7.png", name: "eClinicalWorks" },
  { src: "./image/logo-slider/8.png", name: "Compass" },
  { src: "./image/logo-slider/9.png", name: "Epic" },
  { src: "./image/logo-slider/10.png", name: "Office Ally" },
  { src: "./image/logo-slider/11.png", name: "eClinicalWorks" },
  { src: "./image/logo-slider/12.png", name: "Compass" },
];

const LogoSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;

    const scroll = () => {
      if (slider) {
        scrollAmount += 1;
        slider.scrollLeft = scrollAmount;

        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    intervalRef.current = setInterval(scroll, 20);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const pauseScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resumeScroll = () => {
    intervalRef.current = setInterval(() => {
      const slider = sliderRef.current;
      if (slider) {
        slider.scrollLeft += 1;
      }
    }, 20);
  };

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="slider-container" ref={sliderRef}>
            <div className="slider">
              {logos.concat(logos).map((logo, index) => (
                <div
                  key={index}
                  className="slide"
                  onMouseEnter={pauseScroll}
                  onMouseLeave={resumeScroll}
                >
                  <img src={logo.src} alt={logo.name} className="logo-img" loading="lazy" />
                  <div className="overlay">
                    <p className="brand-name">{logo.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
