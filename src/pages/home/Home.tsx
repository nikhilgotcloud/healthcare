import React from "react";
import Marquee from "../../components/marquee/Marquee";
import Navbar from "../../components/Navbar/Navbar";
import CarouselComponent from "../../components/homecarousel/CarouselComponent";
import Expriencecards from "../../components/homeexperience/Experience";
import Homeabout from "../../components/homeabout/Homeabout";
import Homeservices from "../../components/homeservcies/Homeservices";
import LogoSlider from "../../components/homelogoslider/LogoSlider";
import Homeiso from "../../components/homeiso/Homeiso";
import HomeHippa from "../../components/homeHIPPA/HomeHippa";
import AppointmentForm from "../../components/contactsection/AppointmentForm";
import Latestblog from "../../components/latestblog/Latestblog";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Marquee />
      <Navbar />
      <CarouselComponent />
      <Expriencecards />
      <Homeabout />
      <Homeservices />
      <LogoSlider/>
      <Homeiso/>
      <HomeHippa/>
      <AppointmentForm/>
      <Latestblog/>
      <Footer/>
    </div>
  );
};

export default Home;
