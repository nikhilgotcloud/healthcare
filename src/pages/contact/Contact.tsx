import React from "react";
import Marquee from "../../components/marquee/Marquee";
import HealthcareNavbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Contactapp from "../../components/contactappointment/Contactapp";
import GoogleMapComponent from "../../components/map/Map";
import Contacthero from "../../components/contacthero/Contacthero";


const Contact = () => {
    return (
      <div>
      <Marquee/>
      <HealthcareNavbar/>
      <Contacthero/>
      <Contactapp/>
      <GoogleMapComponent/>
      <Footer/>
    </div>
    );
  };
  
  export default Contact;