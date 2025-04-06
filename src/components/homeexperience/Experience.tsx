import React, { useState } from "react";
import "./experience-style.css";

const Expriencecards = () => {
  const cardData = [
    {
      id: 1,
      staticImage: "./image/experience/group0.svg",
      gifImage: "./image/Time.mp4",
      title: "5+",
      text: "Years In Business",
      description: "Lorem Ipsum is simply dummy text of",
    },
    {
      id: 2,
      staticImage: "./image/experience/group1_static.svg",
      gifImage: "./image/experience/group1.svg",
      title: "130+",
      text: "Total Projects",
      description: "Lorem Ipsum is simply dummy text of",
    },
    {
      id: 3,
      staticImage: "./image/experience/group2_static.svg",
      gifImage: "./image/experience/group2.svg",
      title: "65+",
      text: "Happy Clients",
      description: "Lorem Ipsum is simply dummy text of",
    },
    {
      id: 4,
      staticImage: "./image/experience/group3_static.svg",
      gifImage: "./image/experience/group3.svg",
      title: "45+",
      text: "Google Reviews",
      description: "Lorem Ipsum is simply dummy text of",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container my-4 mainexp">
      <div className="row">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="col-12 col-md-6 col-lg-3 mb-4"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="why-feature new_feature position-relative">
              <div className="box-number text-dark">{card.id}</div>
              <div className="box-icon justify-content-center mb-3">
                {hoveredIndex === index ? (
                  <video autoPlay loop muted className="card-video">
                    <source src={card.gifImage} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={card.staticImage} alt="" className="card-image" />
                )}
              </div>

              <div className="divider mb-3 w-100 mx-4"></div>
              <h3 className="fw-bold mb-3 count text-center card-title">
                {card.title}
              </h3>
              <h5 className="mb-2 text-center card-text">{card.text}</h5>
              <p className="text-muted mb-2 px-2 small text-center card-description pb-3">
                {card.description}
              </p>
              <div className="bg_image">
                <img src="./image/bg_card.svg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expriencecards;
