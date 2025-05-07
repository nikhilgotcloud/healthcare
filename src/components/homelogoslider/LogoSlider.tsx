import React, { useEffect, useRef } from "react";
import "./logoslider-style.css";

const logos = [
  {
    src: "/image/logo-slider/11.png", name: "Tebra",
    overLayImage: "./image/logo-slider/Terbra_overlay.svg"
  },
  {
    src: "/image/logo-slider/12.png", name: "Trizetto",
    overLayImage: "./image/logo-slider/trizetto_overlay.svg"
  },
  {
    src: "/image/logo-slider/4.png", name: "ChiproSpring",
    overLayImage: "./image/logo-slider/chipro_overlay.svg"
  },
  {
    src: "/image/logo-slider/1.png", name: "AdvancedMD",
    overLayImage: "./image/logo-slider/chipro_overlay.svg"
  },
  {
    src: "/image/logo-slider/8.png", name: "MDsoft",
    overLayImage: "./image/logo-slider/mds_overlay.svg"
  },
  {
    src: "/image/logo-slider/7.png", name: "Genesis",
    overLayImage: "./image/logo-slider/genesis_overlay.svg"
  },
  {
    src: "/image/logo-slider/6.png", name: "Epic",
    overLayImage: "./image/logo-slider/epic_overlay.svg"
  },
  {
    src: "/image/logo-slider/5.png", name: "ECW",
    overLayImage: "./image/logo-slider/eclinic_overlay.svg"
  },

  {
    src: "/image/logo-slider/2.png", name: "Athena",
    overLayImage: "./image/logo-slider/athenal_overlay.svg"
  },
  {
    src: "/image/logo-slider/3.png", name: "Brightree",
    overLayImage: "./image/logo-slider/bright_tree.svg"
  },
  {
    src: "/image/logo-slider/11.png", name: "Office Ally",
    overLayImage: "./image/logo-slider/officeAlly.svg"
  },
  {
    src: "/image/logo-slider/9.png", name: "Cortex EDI",
    overLayImage: "./image/logo-slider/cortex_overlay.svg"
  },









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

    intervalRef.current = setInterval(scroll, 5);

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
    <div className="slider_box">
      <div className="container-fluid py-4 ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-10 after_before_div">
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
                    <img src={logo.overLayImage} alt={logo.name} className="logo-img overLay_image" loading="lazy" />

                      <p className="brand-name">{logo.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
