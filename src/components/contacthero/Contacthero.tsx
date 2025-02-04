import React from "react";
import { useLocation } from "react-router-dom";
import "./contacthero-style.css";

const Contacthero: React.FC = () => {
  const location = useLocation();

  const imageMap: Record<string, string> = {
    "/contact": "./image/contacthero.png",
    "/about": "./image/abouthero.png", 
    "/services": "./image/serviceshero.png", 
  };


  const defaultImage = "./image/defaulthero.png";
  const imageSrc = imageMap[location.pathname] || defaultImage;

  return (
    <div className="m-5 ps-2">
      <img src={imageSrc} className="" alt="Best heathcare services" />
    </div>
  );
};

export default Contacthero;
