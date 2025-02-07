import React, { useState } from "react";
import "./blogmid-style.css";
import { Link } from "react-router-dom";

const Blogmid = () => {
  const cardData = [
    {
      id: 1,
      image: "./image/latestblog/Vector16.png",
      title: "The 2024 Outlook: Innovations Shaping Medical Billing and ",
      name: "Sarah Miller",
      date: "January 5, 2024",
      category: "Medical Billing",
      description:
        "The landscape of medical billing and management services in the USA is undergoing a profound transformation, driven by technological....",
    },
    {
      id: 2,
      image: "./image/latestblog/Vector16.png",
      title: "The 2024 Outlook: Innovations Shaping Medical Billing and ",
      name: "Sarah Miller",
      date: "January 5, 2024",
      category: "Medical Billing",
      description:
        "The landscape of medical billing and management services in the USA is undergoing a profound transformation, driven by technological....",
    },
    {
      id: 3,
      image: "./image/latestblog/Vector16.png",
      title: "The 2024 Outlook: Innovations Shaping Medical Billing and ",
      name: "Sarah Miller",
      date: "January 5, 2024",
      category: "Medical Billing",
      description:
        "The landscape of medical billing and management services in the USA is undergoing a profound transformation, driven by technological....",
    },
    {
      id: 4,
      image: "./image/latestblog/Vector16.png",
      title: "The 2024 Outlook: Innovations Shaping Medical Billing and ",
      name: "Sarah Miller",
      date: "January 5, 2024",
      category: "Medical Billing",
      description:
        "The landscape of medical billing and management services in the USA is undergoing a profound transformation, driven by technological....",
    },
    {
      id: 5,
      image: "./image/latestblog/Vector16.png",
      title: "The 2024 Outlook: Innovations Shaping Medical Billing and ",
      name: "Sarah Miller",
      date: "January 5, 2024",
      category: "Medical Billing",
      description:
        "The landscape of medical billing and management services in the USA is undergoing a profound transformation, driven by technological....",
    },
    {
      id: 6,
      image: "./image/latestblog/Vector16.png",
      title: "The 2024 Outlook: Innovations Shaping Medical Billing and ",
      name: "Sarah Miller",
      date: "January 5, 2024",
      category: "Medical Billing",
      description:
        "The landscape of medical billing and management services in the USA is undergoing a profound transformation, driven by technological....",
    },
    {
      id: 7,
      image: "./image/latestblog/Vector16.png",
      title: "The 2024 Outlook: Innovations Shaping Medical Billing and ",
      name: "Sarah Miller",
      date: "January 5, 2024",
      category: "Medical Billing",
      description:
        "The landscape of medical billing and management services in the USA is undergoing a profound transformation, driven by technological....",
    },
    {
      id: 8,
      image: "./image/latestblog/Vector16.png",
      title: "The 2024 Outlook: Innovations Shaping Medical Billing and ",
      name: "Sarah Miller",
      date: "January 5, 2024",
      category: "Medical Billing",
      description:
        "The landscape of medical billing and management services in the USA is undergoing a profound transformation, driven by technological....",
    },
  ];
  const categories = [
    "Revenue Cycle Management",
    "Denial Management",
    "Medical Billing",
    "Physician Billing Services",
    "DME Billing",
    "Hospital Billing",
    "HME Billing",
    "Medical Virtual Assistant",
  ];
  const tags = [
    "Billing",
    "Medical Billing",
    "Hospital Billing ",
    "DME Billing",
    "Medical Billing",
    "HME Billing",
    "Medical Virtual Assistant",
  ];
  const sidecard: React.CSSProperties = { borderRadius: "20%" };
  const headstyle: React.CSSProperties = {
    backgroundColor: "#004457",
    borderRadius: "100px",
    border: "0",
    fontSize: "18px",
    lineHeight: "16px",
    fontWeight: 400,
    transition: "all 1s ease",
  };

  const fontstyle: React.CSSProperties = { fontSize: "14px" };
  const bgstyle: React.CSSProperties = { backgroundColor: "rgb(0, 73, 86)" };
  const txtstyle: React.CSSProperties = { color: "rgb(0, 73, 86)" };
  const baseStyles = {
    width: "30rem",
    border: "2px solid #004457",
    transition: "color 0.3s ease",
    cursor: "pointer",
  };

  const getStyles = (isHovered: boolean) => ({
    ...baseStyles,
    color: isHovered ? "white" : "#004457",
    backgroundColor: isHovered ? "#004457" : "white",
  });

  // Create an object to track hover state for each category
  const [hoverStates, setHoverStates] = useState<{ [key: number]: boolean }>(
    categories.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
  );

  const handleMouseEnter = (index: number) => {
    setHoverStates((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index: number) => {
    setHoverStates((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-1"></div>
        {/* <!-- Main Blog Listing Column (8 columns wide) --> */}
        <div className="col-lg-6">
          <span
            className="badge badge-white mb-3 p-3 text-white shadow-lg"
            style={headstyle}
          >
            BLOG
          </span>
          <h2 className="about-title my-3">Industry Resources</h2>
          <p className="description mb-4">
            Actionable Tips and Insights for Healthcare Providers Curated by
            Experts
          </p>
          <div className="row">
            <div className="col-lg-6"></div>
          </div>

          <div className="container">
            {Array.from(
              { length: Math.ceil(cardData.length / 2) },
              (_, index) => (
                <div className="row mb-4" key={index}>
                  {cardData.slice(index * 2, index * 2 + 2).map((card) => (
                    <div key={card.id} className="col-lg-6">
                      <div className="why-feature ">
                        <div className="box-number text-dark">
                          <svg
                            width="30"
                            height="50"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="black"
                            stroke-width="1"
                          >
                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                          </svg>
                        </div>
                        <div className="justify-content-center">
                          <img
                            src={card.image}
                            alt=""
                            className="blog-image "
                          />
                        </div>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <div className="meta-item">
                              <img
                                src="./image/latestblog/profie-icon.png"
                                alt=""
                                loading="lazy"
                                className=""
                              />
                              <span>{card.name}</span>
                            </div>
                            <div className="meta-item">
                              <img
                                src="./image/latestblog/calander-icon.png"
                                alt=""
                                loading="lazy"
                              />
                              <span>{card.date}</span>
                            </div>
                            <div className="meta-item">
                              <img
                                src="./image/latestblog/bookmark-icon.png"
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
                          <p>{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center w-100 py-4">
            {/* <!-- Pagination --> */}
            <nav aria-label="Page navigation" className="mt-3 paginatee">
              <ul className="pagination justify-content-center align-items-center gap-2 m-0">
                <li className="page-item">
                  <Link
                    className="page-link border-0 rounded-circle paginatee-text"
                    to="/"
                    aria-label="Previous"
                  >
                    <svg
                      className="w-6 h-8 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14M5 12l4-4m-4 4 4 4"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    className="page-link  border-0 rounded-circle  paginatee-text"
                    to="#"
                  >
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link border-0 rounded-circle paginatee-text" to="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link border-0 rounded-circle paginatee-text" to="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link border-0 rounded-circle paginatee-text " to="#">
                    4
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    className="page-link border-0 border-0 rounded-circle paginatee-text"
                    to="#"
                    aria-label="Next"
                  >
                    <svg
                      className="w-6 h-8 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-lg-1"></div>
        {/* <!-- Sidebar Column (4 columns wide) --> */}
        <div className="col-lg-3 mt-3">
          {/* <!-- Recent Articles Card --> */}
          <div className="card border-0 shadow-sm  mb-5">
            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center rounded-lg  mt-4">
              <h5 className="mb-0">Recent Article</h5>
              <Link to="#" className="text-decoration-none">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#004457"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3M3.22302 14C4.13247 18.008 7.71683 21 12 21c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-3.72916 0-6.92858 2.26806-8.29409 5.5M7 9H3V5"
                  />
                </svg>
              </Link>
            </div>
            <div className="card-body bg-white mb-4">
              <div className="card-body px-4 pt-2 bg-white">
                <div className="mb-3">
                  <img
                    src="./image/blog-side.png"
                    className="rounded-4 w-100 mb-3"
                    alt="Medical staff meeting"
                  />
                  <h6 className="fw-semibold mb-2 blog-recent-head">
                    Introduction: Navigating the New Era of Medical Billing and
                    Management
                  </h6>
                  <div className="text-danger" style={fontstyle}>
                    June 06, 2024
                  </div>
                </div>

                <hr className="my-4 blog-recent-divider" />

                <div>
                  <img
                    src="./image/blog-side2.png"
                    className="rounded-4 w-100 mb-3"
                    alt="Medical documentation"
                  />
                  <h6 className="fw-semibold mb-2 blog-recent-head">
                    Introduction: Navigating the New Era of Medical Billing and
                    Management
                  </h6>
                  <div className="text-danger" style={fontstyle}>
                    June 06, 2024
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Categories Card --> */}
          <div className="card border-0 shadow-sm  mb-5">
            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center rounded-lg  mt-4">
              <h5 className="mb-0">Categories</h5>
              <Link to="#" className="text-decoration-none">
                <svg
                  className="w-10 h-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#004457"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </Link>
            </div>
            <div className="card-body bg-white mb-4">
              {categories.map((category, index) => (
                <div key={index} className="d-flex mb-2">
                  <span
                    className="badge badge-pill blog-category-badge p-3 rounded-pill"
                    style={getStyles(hoverStates[index])}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    {category}{" "}
                    <img src="image/iconArrow.svg" alt="" className="ms-2" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* <!-- Tag Cloud Card --> */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center rounded-lg mt-4">
              <h5 className="mb-0">Tag Cloud</h5>
              <Link to="#" className="text-decoration-none">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#004457"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 17h6m-3 3v-6M4.857 4h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 9.143V4.857C4 4.384 4.384 4 4.857 4Zm10 0h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857h-4.286A.857.857 0 0 1 14 9.143V4.857c0-.473.384-.857.857-.857Zm-10 10h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 19.143v-4.286c0-.473.384-.857.857-.857Z"
                  />
                </svg>
              </Link>
            </div>
            <div className="card-body mb-4 bg-white">
              <div className="d-flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <Link
                    key={index}
                    to="#"
                    className="btn btn-light btn-sm px-3 py-2 blog-tag rounded-pill"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogmid;
