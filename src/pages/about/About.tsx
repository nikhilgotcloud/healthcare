import React from "react";
import Contacthero from "../../components/contacthero/Contacthero";
import AppointmentForm from "../../components/contactsection/AppointmentForm";

import Homeservices from "../../components/homeservcies/Homeservices";
import Aboutinfo from "../../components/aboutinfo/Aboutinfo";
import Aboutexp from "../../components/aboutexp/Aboutexp";

const About = () => {
    return (
      <div>

        <Contacthero/>
        <Aboutexp/>
        <Aboutinfo/>
        <Homeservices/>
        <AppointmentForm/>
        
      </div>
    );
  };
  
  export default About;