import React from "react";
import Marquee from "../../components/marquee/Marquee";
import HealthcareNavbar from "../../components/Navbar/Navbar";
import Contacthero from "../../components/contacthero/Contacthero";
import Homeservices from "../../components/homeservcies/Homeservices";
import Latestblog from "../../components/latestblog/Latestblog";
import Footer from "../../components/Footer/Footer";
import Serviceinfo from "../../components/serviceinfo/Serviceinfo";

const Services = () => {
    return (
      <div >
       <Marquee/>
       <HealthcareNavbar/>
       <Contacthero/>
       <Serviceinfo/>
       <Homeservices/>
       <div className="mt-4"><Latestblog/></div>
       <Footer/>
      </div>
    );
  };
  
  export default Services;