import React from "react";
import "./experience-style.css";

const Expriencecards = () => {
  const cardData = [
    {
      id: 1,
      image: "./image/experience/group0.svg",
      title: "5+",
      text: "Years In Business",
      description: "Lorem Ipsum is simply dummy text of",
    },
    {
      id: 2,
      image: "./image/experience/group1.svg",
      title: "130+",
      text: "Total Projects",
      description: "Lorem Ipsum is simply dummy text of",
    },
    {
      id: 3,
      image: "./image/experience/group2.svg",
      title: "65+",
      text: "Happy Clients",
      description: "Lorem Ipsum is simply dummy text of",
    },
    {
      id: 4,
      image: "./image/experience/group3.svg",
      title: "45+",
      text: "Google Reviews",
      description: "Lorem Ipsum is simply dummy text of",
    },
  ];

  return (
    <div className="container my-4 mainexp ">
      <div className="row">
        {cardData.map((card) => (
          <div key={card.id} className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="why-feature ">
              <div className="box-number text-dark">{card.id}</div>
              <div className="box-icon justify-content-center mb-3">
                <img src={card.image} alt="" className="card-image" />
              </div>
              <div className="divider mb-3 w-75 mx-4"></div>
              <h3 className="fw-bold mb-3 count text-center card-title">{card.title}</h3>
              <h5 className="mb-2 text-center card-text">{card.text}</h5>
              <p className="text-muted mb-2 px-2 small text-center card-description">
              {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expriencecards;
