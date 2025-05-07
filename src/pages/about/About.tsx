import React from "react";
import Contacthero from "../../components/contacthero/Contacthero";
import AppointmentForm from "../../components/contactsection/AppointmentForm";
import './about-style.css'
import Homeservices from "../../components/homeservcies/Homeservices";
import Aboutinfo from "../../components/aboutinfo/Aboutinfo";
import Aboutexp from "../../components/aboutexp/Aboutexp";
import LogoSlider from "../../components/homelogoslider/LogoSlider";
import Expriencecards from "../../components/homeexperience/Experience";

const About = () => {

  const cardData = [
    {
      id: 1,
      staticImage: "./image/experience/group0.svg",
      gifImage: "/image/gif/time_mp4.mp4",
      title: "",
      text: "Rapid Scalability",
      description: "Our services are designed to accommodate your growing needs, ensuring seamless scalability without compromising quality or efficiency. As your practice expands, we adapt to support your increasing demands, delivering uninterrupted billing and coding solutions.",
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

      title: "",
      text: "Better Results",
      description: "We are committed to achieving exceptional results for our clients. With our expertise and industry knowledge, we optimize your revenue cycle, improve collections, and minimize denials, ultimately enhancing your financial performance and maximizing profitability.",
    },
    {
      id: 3,
      staticImage: "/image/experience/group2.svg",
      // gifImage: "/image/experience/group2.svg",
      gifImage: "./image/gif/HappyClients_mp4.mp4",

      title: "",
      text: "Transparency",
      description: "We believe in open and honest communication. We provide transparent reporting, giving you real-time insights into your revenue cycle, claims status, and financial performance. You can trust us to keep you informed and updated throughout the billing process.",
    },
    {
      id: 4,
      staticImage: "/image/experience/google_Review_new.svg",
      // gifImage: "./image/gif/new_video_1.mp4",
      gifImage: "/image/gif/new_video_1.mp4",

      title: "",
      text: "High-Quality Services",
      description: "Our team consistently delivers high-quality services. From accurate coding to timely claim submissions, we prioritize precision and compliance. You can rely on us to handle your medical billing and coding with meticulous attention to detail, ensuring the highest quality standards.",
    },
  ];
    const headStyle: React.CSSProperties = {
      backgroundColor: "#004457",
      borderRadius: "100px",
      border: "0",
      fontSize: "18px",
      lineHeight: "16px",
      fontWeight: 400,
      transition: "all 1s ease",
    };

  return (
    <div>

      <Contacthero />
      {/* <Aboutexp /> */}
      <div className='about_page_card_section'>
      <div className="row m-0 p-0">
        <div className="col-12 text-center mt-3">
          <span
            className="badge badge-white mb-3 p-3"
            style={headStyle}
          >
            About Us
          </span>
          <h2 className="about-us-title">INF Healthcare</h2>
          <p className="p-2 text-dark">
            Seamless Collaboration for Superior Patient Outcomes
          </p>
        </div>
      </div>
      </div>
      <div className="about_usSec_ex">
      <Expriencecards getDataShare={cardData}/>
      </div>
      <Aboutinfo />
      <Homeservices />
      <AppointmentForm />
      <div className="logo_box_about  d-md-none">
        <LogoSlider />

      </div>

    </div>
  );
};

export default About;