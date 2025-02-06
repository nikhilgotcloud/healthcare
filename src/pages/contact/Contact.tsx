import React from "react";
import Contactapp from "../../components/contactappointment/Contactapp";
import GoogleMapComponent from "../../components/map/Map";
import Contacthero from "../../components/contacthero/Contacthero";


const Contact = () => {
    return (
      <div>
   
      <Contacthero/>
      <Contactapp/>
      <GoogleMapComponent/>
    
    </div>
    );
  };
  
  export default Contact;