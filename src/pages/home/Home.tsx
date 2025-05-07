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
  const cardData = [
    {
      id: 1,
      staticImage: "./image/experience/group0.svg",
      gifImage: "/image/gif/time_mp4.mp4",
      title: "5+",
      text: "Years In Business",
      description: "Lorem Ipsum is simply dummy text of",
    },
    // {
    //   id: 1,
    //   staticImage: "/image/experience/group0.svg",
    //   gifImage: "/image/Time.mp4",
    //   title: "5+",
    //   text: "Years In Business",
    //   description: "Lorem Ipsum is simply dummy text of",
    // },
    {
      id: 2,
      staticImage: "/image/experience/group1.svg",
      // gifImage: "/image/experience/group1.svg",
      gifImage: "/image/gif/Project_mp4.mp4",

      title: "130+",
      text: "Total Projects",
      description: "Lorem Ipsum is simply dummy text of",
    },
    {
      id: 3,
      staticImage: "/image/experience/group2.svg",
      // gifImage: "/image/experience/group2.svg",
      gifImage: "./image/gif/HappyClients_mp4.mp4",

      title: "65+",
      text: "Happy Clients",
      description: "Lorem Ipsum is simply dummy text of",
    },
    {
      id: 4,
      staticImage: "/image/experience/google_Review_new.svg",
      // gifImage: "./image/gif/new_video_1.mp4",
      gifImage: "/image/gif/new_video_1.mp4",

      title: "45+",
      text: "Google Reviews",
      description: "Lorem Ipsum is simply dummy text of",
    },
  ];

  return (
    <div>

      <CarouselComponent />
      <div className="home_expericecard">
        <Expriencecards  getDataShare={cardData} />
      </div>
      <div className="home_home_about">
        <Homeabout />
      </div>
      <Homeservices />
      <LogoSlider />
      <div className="home_service_section">
      <Homeiso />
      </div>
      <div className="home_service_section">
      <HomeHippa />
      </div>
      <AppointmentForm />
      <Latestblog />

    </div>
  );
};

export default Home;
