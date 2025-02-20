import React from "react";
import CarouselComponent from "../../components/homecarousel/CarouselComponent";
import Expriencecards from "../../components/homeexperience/Experience";
import Homeabout from "../../components/homeabout/Homeabout";
import Homeservices from "../../components/homeservcies/Homeservices";
import LogoSlider from "../../components/homelogoslider/LogoSlider";
import Homeiso from "../../components/homeiso/Homeiso";
import HomeHippa from "../../components/homeHIPPA/HomeHippa";
import AppointmentForm from "../../components/contactsection/AppointmentForm";
import Latestblog from "../../components/latestblog/Latestblog";
import './home-style.css'


const Home = () => {
  return (
    <div>

      <CarouselComponent />
      <div className="home_expericecard">
        <Expriencecards />
      </div>
      <div className="home_home_about">
        <Homeabout />
      </div>
      <Homeservices />
      <LogoSlider />
      <Homeiso />
      <HomeHippa />
      <AppointmentForm />
      <Latestblog />

    </div>
  );
};

export default Home;
