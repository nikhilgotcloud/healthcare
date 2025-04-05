import React from "react";
import Contacthero from "../../components/contacthero/Contacthero";
import AppointmentForm from "../../components/contactsection/AppointmentForm";
import './about-style.css'
import Homeservices from "../../components/homeservcies/Homeservices";
import Aboutinfo from "../../components/aboutinfo/Aboutinfo";
import Aboutexp from "../../components/aboutexp/Aboutexp";
import LogoSlider from "../../components/homelogoslider/LogoSlider";

const About = () => {
  return (
    <div>

      <Contacthero />
      <Aboutexp />
      <Aboutinfo />
      <Homeservices />
      <AppointmentForm />
      <div className="logo_box_about  d-md-none">
        <LogoSlider />

      </div>

    </div>
  );
};

export default About;