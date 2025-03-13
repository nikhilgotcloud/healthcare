import React from "react";

import Contacthero from "../../components/contacthero/Contacthero";
import Homeservices from "../../components/homeservcies/Homeservices";
import Latestblog from "../../components/latestblog/Latestblog";
import './service-style.css'

import Serviceinfo from "../../components/serviceinfo/Serviceinfo";

const Services = () => {
    return (
      <div >
       
       <Contacthero/>
       <div className="service_page">

       <Serviceinfo/>
       </div>
       <Homeservices/>
       <div className=" service_latest_blog"><Latestblog/></div>
       
      </div>
    );
  };
  
  export default Services;