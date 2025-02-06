import React from "react";

import Contacthero from "../../components/contacthero/Contacthero";
import Homeservices from "../../components/homeservcies/Homeservices";
import Latestblog from "../../components/latestblog/Latestblog";

import Serviceinfo from "../../components/serviceinfo/Serviceinfo";

const Services = () => {
    return (
      <div >
       
       <Contacthero/>
       <Serviceinfo/>
       <Homeservices/>
       <div className="mt-4"><Latestblog/></div>
       
      </div>
    );
  };
  
  export default Services;