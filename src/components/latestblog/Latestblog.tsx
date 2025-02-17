import React from "react";
import "./latestblog-style.css";
import { Link } from "react-router-dom";

const Latestblog = () => {
  const headstyle: React.CSSProperties = {
    color: "#004457",
    borderRadius: "100px",
    border: "0",
    fontSize: "18px",
    lineHeight: "16px",
    fontWeight: 400,
    transition: "all 1s ease",
  };
  const cardData = [
    {
      id: 1,
      image: "./image/latestblog/Vector16.png",
      title: "The 2024 Outlook: Innovations Shaping Medical Billing and ",
      name: "Sarah Miller",
      date: "January 5, 2024",
      category: "Medical Billing",
    },
    {
      id: 2,
      image: "./image/latestblog/Vector16.png",
      title: "The 2024 Outlook: Innovations Shaping Medical Billing and ",
      name: "Sarah Miller",
      date: "January 5, 2024",
      category: "Medical Billing",
    },
    {
      id: 3,
      image: "./image/latestblog/Vector16.png",
      title: "The 2024 Outlook: Innovations Shaping Medical Billing and ",
      name: "Sarah Miller",
      date: "January 5, 2024",
      category: "Medical Billing",
    },
  ];

  return (
    <div className="lates_bog_section">
      <div className="container">
        <div>
          <div className="badge_box d-flex justofy-content-center align-items-center">
          <span className="badge badge-white mb-2 bg-white blog-us-butn p-3 shadow-lg" style={headstyle}>
            UPDATES NEWS
          </span>
          </div>
          <h2 className="section-title mb-3">Latest Blogs & Articles</h2>

          <div className="container my-4 justify-content-center">
            <div className="row">
              {cardData.map((card) => (
                <div key={card.id} className="col-12 col-md-4 mb-4">
                  <div className="why-feature ">
                    <div className="box-number text-dark">
                      {/* <svg
                        width="30"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        stroke-width="1"
                      >
                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg> */}
                      <i className="fa-solid fa-arrow-up non_hover_icon"></i>
                      <i className="fa-solid fa-arrow-up  hover_icon"></i>
                    </div>
                    <div className="justify-content-center blog_imag_box">
                      <img src={card.image} alt="" className="blog-image " />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <div className="meta-item">
                          <img
                            src="./image/person_blog.svg"
                            alt=""
                            loading="lazy"
                            className=""
                          />
                          <span>{card.name}</span>
                        </div>
                        <div className="meta-item">
                          <img
                            src="./image/calender_blog.svg"
                            alt=""
                            loading="lazy"
                          />
                          <span>{card.date}</span>
                        </div>
                        <div className="meta-item">
                          <img
                            src="./image/bookmark_blog.svg"
                            alt=""
                            loading="lazy"
                            width="30px"
                            height="30px"
                          />
                          <span>{card.category}</span>
                        </div>
                      </div>
                      <Link to="#" className="blog-title d-block">
                        {card.title}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestblog;
