import React from "react";
import Marquee from "../../components/marquee/Marquee";
import HealthcareNavbar from "../../components/Navbar/Navbar";
import Contacthero from "../../components/contacthero/Contacthero";
import AppointmentForm from "../../components/contactsection/AppointmentForm";
import Footer from "../../components/Footer/Footer";
import Homeservices from "../../components/homeservcies/Homeservices";
import Aboutinfo from "../../components/aboutinfo/Aboutinfo";

const About = () => {
    return (
      <div>
        <Marquee/>
        <HealthcareNavbar/>
        <Contacthero/>
        
        <Aboutinfo/>
        <Homeservices/>
        <AppointmentForm/>
        <Footer/>
      </div>
    );
  };
  
  export default About;