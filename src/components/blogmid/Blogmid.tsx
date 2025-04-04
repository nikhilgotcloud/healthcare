import React, { useState, useEffect } from "react";
import axios from "axios";
import "./blogmid-style.css";
import { Link } from "react-router-dom";
import "../blogmid/blogmid-style.css";
import "../latestblog/latestblog-style.css";

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
  // const [cardData, setCardData] = useState:CardData([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const response = await axios.get(`${process.env.CMS_URL}/blogs`);
  //       if (response.data?.data?.length > 0) {
  //         setCardData(response.data.data);
  //       } else {
  //         setError(true);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching blogs:", error);
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);
  return (
    <div className="container service_box_deail blog_page_card">
      <div className="row">
        {/* <!-- Main Blog Listing Column (8 columns wide) --> */}
        <div className="col-lg-9 p-0">
          <div className="lates_bog_section">
            <span
              className="badge badge-white mb-3 p-3 text-white shadow-lg"
              style={headstyle}
            >
              BLOG
            </span>
            {/* {loading && (
              <div className="spinner-border text-info" role="status">
                <span className="sr-only text-bold">
                  Please Wait while we fetch blogs for you ...
                </span>
              </div>
            )} */}
            <h2 className="about-title my-3">Industry Resources</h2>
            <p className="description mb-4">
              Actionable Tips and Insights for Healthcare Providers Curated by
              Experts
            </p>

            {/* {!loading && cardData.length > 0 && (
              <> */}
                {Array.from(
                  { length: Math.ceil(cardData.length / 2) },
                  (_, index) => (
                    <div className="row mb-4" key={index}>
                      {cardData.slice(index * 2, index * 2 + 2).map((card) => (
                        <div key={card.id} className="col-lg-6">
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
                                    src="./image/blog_per_icon.svg"
                                    alt=""
                                    loading="lazy"
                                    className=""
                                  />
                                  <span>{card.name}</span>
                                </div>
                                <div className="meta-item">
                                  <img
                                    src="./image/blog_cal.svg"
                                    alt=""
                                    loading="lazy"
                                  />
                                  <span>{card.date}</span>
                                </div>
                                <div className="meta-item">
                                  <img
                                    src="./image/comment_blog.svg"
                                    alt=""
                                    loading="lazy"
                                  />
                                  <span>2 Comments</span>
                                </div>

                                <div className="meta-item">
                                  <img
                                    src="./image/bookmark_blog_new.svg"
                                    alt=""
                                    loading="lazy"
                                    width="30px"
                                    height="30px"
                                  />
                                  <span>{card.category}</span>
                                </div>
                              </div>
                              <Link
                                to="/blogdetail"
                                className="blog-title d-block"
                              >
                                {card.title}
                              </Link>
                              <p>{card.description}</p>
                            </div>
                            <img
                              className="bg_img"
                              src="./image/blog_card_bg.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                )}
              {/* </>
            )}

            {/* Show error message if no blogs available */}
            {/* {!loading && error && (
              <p className="text-danger font-semibold">
                Seems like the server is down. Please come back later.
              </p>
            )}  */}

            <div className="d-flex justify-content-between align-items-center w-100 ">
              {/* <!-- Pagination --> */}
              <nav
                aria-label="Page navigation"
                className="mt-3 paginatee w-100"
              >
                <ul className="pagination justify-content-center align-items-center gap-2 m-0">
                  <li className="page-item left_btn  pagi_btn">
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
                    <Link
                      className="page-link border-0 rounded-circle paginatee-text"
                      to="#"
                    >
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-0 rounded-circle paginatee-text"
                      to="#"
                    >
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-0 rounded-circle paginatee-text "
                      to="#"
                    >
                      4
                    </Link>
                  </li>
                  <li className="page-item pagi_btn right_btn">
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
        </div>
        {/* <!-- Sidebar Column (4 columns wide) --> */}
        <div className="col-lg-3 mt-3 right_section_blog">
          {/* <!-- Recent Articles Card --> */}
          <div className="card border-0 shadow-sm  mb-5 bhjhg">
            <div className="side_up_icon icon_one">
              {/* <svg
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
              </svg> */}
              <img src="./image/blog_clock_icon.svg" alt="" />
            </div>
            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center rounded-lg  mt-4">
              <h5 className="mb-0">Recent Article</h5>
              {/* <Link to="#" className="text-decoration-none">

              </Link> */}
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
            <img
              className="bg_image_detail"
              alt=""
              src="./image/detail_side.png"
            ></img>
          </div>

          {/* <!-- Categories Card --> */}
          <div className="card border-0 shadow-sm  mb-5">
            <div className="side_up_icon icon_two">
              {/* <svg
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
              </svg> */}
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 17.5346C25.8702 18.1288 25.4878 18.5591 25.078 18.9825C24.477 19.604 23.876 20.2186 23.316 20.8743C22.2984 22.0626 21.0349 22.807 19.4983 23.1075C19.2593 23.1553 19.0202 23.2236 18.7812 23.2783C18.508 23.3397 18.3236 23.2441 18.269 23.0119C18.2143 22.7865 18.3373 22.6158 18.6105 22.5475C19.0407 22.4314 19.4778 22.3289 19.9081 22.2197C20.8505 21.9806 21.6564 21.5094 22.3257 20.806C23.1931 19.8908 24.0536 18.9757 24.9004 18.0468C25.5151 17.3775 25.2214 16.3326 24.3609 16.1004C23.8965 15.9775 23.4936 16.1004 23.1589 16.4487C22.353 17.2751 21.5335 18.1015 20.7276 18.9278C20.5637 19.0986 20.3861 19.1737 20.1471 19.1737C17.5246 19.1669 14.9089 19.1669 12.2863 19.1669C12.2453 19.1669 12.2044 19.1669 12.1566 19.1669C11.8765 19.16 11.7195 19.0166 11.7195 18.7844C11.7263 18.5522 11.8834 18.4156 12.1634 18.4088C12.5117 18.402 12.8532 18.4088 13.2015 18.4088C13.7273 18.4088 14.2464 18.4088 14.7723 18.4088C14.9362 18.4088 15.0932 18.3883 15.2435 18.3405C15.8582 18.1561 16.1928 17.6985 16.1108 17.1522C16.0289 16.5512 15.544 16.1414 14.9089 16.1346C13.8639 16.1277 12.8122 16.1346 11.7673 16.1346C11.4736 16.1346 11.1731 16.1414 10.8794 16.1346C10.5175 16.1277 10.176 16.2029 9.84818 16.3531C8.95351 16.7561 8.05884 17.1453 7.171 17.5551C6.87733 17.6917 6.59049 17.7668 6.2695 17.7463C5.98949 17.7327 5.70948 17.76 5.4363 17.7395C5.21776 17.7258 5.17678 17.8078 5.17678 18.0127C5.18361 19.2625 5.18361 20.5123 5.18361 21.7621C5.18361 22.6568 5.19044 23.5514 5.17678 24.4461C5.17678 24.6305 5.2041 24.7056 5.42264 24.7056C6.69976 24.692 7.97688 24.692 9.25401 24.7056C10.094 24.7125 10.8863 24.4598 11.6853 24.2617C13.3381 23.8588 14.9908 23.4422 16.6504 23.0324C16.6845 23.0256 16.7187 23.0187 16.7528 23.0119C17.0123 22.9573 17.2036 23.0529 17.2582 23.2646C17.3197 23.49 17.2036 23.6744 16.9304 23.7427C16.3772 23.8861 15.8172 24.0227 15.264 24.1593C13.6932 24.5485 12.1156 24.9378 10.5448 25.3203C10.094 25.4296 9.62963 25.4637 9.15839 25.4637C7.91542 25.4637 6.67245 25.4637 5.42947 25.4637C5.28605 25.4637 5.16995 25.4569 5.16995 25.6618C5.16995 25.812 5.03336 25.8803 4.92409 25.9623C3.36696 25.9623 1.81665 25.9623 0.259522 25.9623C0.0614658 25.8393 0 25.6618 0 25.4296C0.0409771 22.5338 0.0341476 19.6518 0.0341476 16.7765C0.0341476 16.3804 0.15025 16.2575 0.539532 16.2575C0.846861 16.2575 1.14736 16.2507 1.45469 16.2575C1.69372 16.2643 1.8508 16.4146 1.85763 16.6263C1.86446 16.8312 1.70738 16.9951 1.46835 17.0156C1.32493 17.0292 1.18151 17.0361 1.03809 17.0156C0.833202 16.9883 0.792225 17.0702 0.792225 17.2614C0.799054 19.1054 0.799054 20.9426 0.799054 22.7865C0.799054 23.5105 0.805884 24.2412 0.792225 24.9651C0.792225 25.1427 0.840032 25.1905 1.0176 25.1905C2.08983 25.1837 3.16207 25.1837 4.23431 25.1905C4.4187 25.1905 4.45285 25.1291 4.45285 24.9583C4.44602 22.3836 4.44602 19.8089 4.45285 17.2273C4.45285 17.0497 4.39821 16.9951 4.22748 17.0019C3.94064 17.0156 3.6538 17.0087 3.36696 17.0019C3.04597 16.9951 2.87523 16.8585 2.87523 16.6126C2.87523 16.3736 3.04597 16.2438 3.3533 16.2438C3.81087 16.2438 4.26845 16.2438 4.7192 16.2438C5.088 16.2438 5.21776 16.3599 5.2041 16.7287C5.19727 16.92 5.26556 16.9541 5.44313 16.9678C6.21487 17.0292 6.91831 16.879 7.60809 16.5239C8.24324 16.196 8.91936 15.9365 9.56816 15.636C9.99159 15.4448 10.4287 15.3492 10.8931 15.3492C12.2385 15.356 13.5771 15.3492 14.9225 15.3492C15.9674 15.356 16.7597 16.0458 16.8894 17.0566C16.944 17.4732 16.8484 17.8624 16.6299 18.2176C16.5479 18.3473 16.5616 18.3815 16.7187 18.3815C17.8251 18.3747 18.9314 18.3747 20.0378 18.3815C20.1676 18.3815 20.2359 18.3132 20.3178 18.2381C21.0554 17.4868 21.8203 16.7561 22.5306 15.9707C23.6848 14.6867 25.679 15.2809 25.9659 16.8653C25.9659 16.879 25.9863 16.8926 25.9932 16.9063C26 17.1249 26 17.3297 26 17.5346Z"
                  fill="#AB0000"
                ></path>
                <path
                  d="M12.457 2.69391C12.5526 2.69391 12.6414 2.74171 12.7302 2.79635C13.058 3.00124 13.3926 3.19929 13.7204 3.40418C14.0141 3.58857 14.1029 3.5476 14.1848 3.19929C14.2668 2.83733 14.3556 2.47536 14.4444 2.1134C14.5195 1.78558 14.6219 1.70363 14.9497 1.70363C15.38 1.70363 15.8103 1.71046 16.2405 1.70363C16.5069 1.6968 16.6503 1.82656 16.7049 2.07242C16.7937 2.46853 16.8893 2.85782 16.9849 3.25393C17.0464 3.52028 17.1625 3.56809 17.4015 3.42467C17.7499 3.21295 18.0913 3.00124 18.4328 2.78269C18.6514 2.6461 18.8426 2.65976 19.0201 2.84416C19.3275 3.15831 19.6416 3.46564 19.949 3.7798C20.1607 3.99152 20.1675 4.12128 20.0104 4.38763C19.7987 4.73593 19.587 5.07741 19.3753 5.42572C19.2455 5.64426 19.2933 5.76036 19.546 5.82183C19.9421 5.91744 20.3314 6.01989 20.7275 6.10184C20.9802 6.15648 21.11 6.2999 21.1031 6.55942C21.1031 7.01017 21.1031 7.45409 21.1031 7.90483C21.1031 8.1507 20.987 8.29412 20.7412 8.35558C20.3314 8.4512 19.9216 8.54681 19.5119 8.64925C19.3002 8.70389 19.2455 8.82682 19.3616 9.01805C19.5733 9.37318 19.7987 9.72149 20.0104 10.0766C20.1675 10.3361 20.1538 10.4727 19.9421 10.6845C19.6416 10.9918 19.3343 11.2923 19.027 11.5996C18.8153 11.8113 18.6718 11.825 18.4191 11.6747C18.0777 11.4698 17.743 11.2581 17.4015 11.0532C17.1352 10.8893 17.0396 10.9371 16.9645 11.2445C16.8757 11.6133 16.7937 11.9821 16.7049 12.3509C16.6298 12.6787 16.5205 12.7675 16.1722 12.7675C15.7693 12.7675 15.3595 12.7675 14.9566 12.7675C14.6151 12.7675 14.5127 12.6787 14.4307 12.344C14.3419 11.9684 14.2531 11.5859 14.1644 11.2103C14.0961 10.9371 13.9936 10.8893 13.7546 11.0396C13.4131 11.2445 13.0785 11.4562 12.737 11.6611C12.4638 11.825 12.3272 11.8113 12.1087 11.5928C11.8082 11.2991 11.5077 10.9986 11.214 10.6981C10.9886 10.4727 10.9681 10.343 11.132 10.0766C11.3301 9.74198 11.5418 9.41416 11.7399 9.08634C11.9106 8.81316 11.8696 8.71072 11.5486 8.63559C11.173 8.54681 10.7974 8.4512 10.4149 8.36924C10.1623 8.31461 10.0325 8.17119 10.0393 7.91166C10.0393 7.46092 10.0393 7.017 10.0393 6.56625C10.0393 6.32038 10.1486 6.17696 10.3945 6.12233C10.7974 6.03354 11.2003 5.9311 11.6033 5.83549C11.856 5.77402 11.9038 5.65792 11.7672 5.43938C11.5555 5.09107 11.3438 4.74959 11.132 4.40129C10.975 4.14177 10.9886 4.01201 11.2003 3.79346C11.5077 3.4793 11.8218 3.17197 12.1292 2.85782C12.2316 2.76903 12.3272 2.70757 12.457 2.69391ZM11.9106 10.2883C11.9379 10.3225 11.9652 10.3635 11.9994 10.3976C12.1292 10.5274 12.2726 10.6571 12.3887 10.7937C12.4843 10.903 12.5594 10.8893 12.6687 10.821C12.9897 10.6162 13.3175 10.4249 13.6385 10.22C13.7956 10.1176 13.9458 10.1108 14.1165 10.1859C14.779 10.4727 14.779 10.4659 14.9429 11.1762C14.9566 11.2308 14.9702 11.2923 14.9839 11.3469C15.141 12.0299 15.141 12.023 15.8308 12.0094C15.9673 12.0094 16.022 11.9684 16.0561 11.8318C16.1313 11.4767 16.2337 11.1284 16.302 10.7732C16.3498 10.5479 16.4796 10.4454 16.6708 10.3361C17.1215 10.0766 17.5108 10.1313 17.8933 10.4522C17.9411 10.4932 18.0094 10.5274 18.064 10.5615C18.665 10.9303 18.665 10.9303 19.1499 10.4181C19.2387 10.3225 19.2387 10.261 19.1704 10.1586C18.9723 9.84442 18.7879 9.52343 18.5831 9.20927C18.467 9.02488 18.4806 8.86097 18.5352 8.66291C18.665 8.16436 18.9723 7.91166 19.4777 7.87752C19.5597 7.87069 19.6416 7.83654 19.7236 7.81605C20.3519 7.6658 20.3451 7.6658 20.3451 7.01017C20.3451 6.83943 20.2836 6.77796 20.1265 6.74381C19.7714 6.66869 19.4231 6.57308 19.068 6.49795C18.8767 6.45698 18.7606 6.35453 18.6855 6.17014C18.426 5.5145 18.426 5.5145 18.7948 4.90667C18.8289 4.85204 18.8631 4.79057 18.904 4.73593C19.2592 4.16225 19.2523 4.16908 18.7743 3.69102C18.6787 3.58857 18.6104 3.56809 18.4806 3.65004C18.1733 3.85493 17.8455 4.03932 17.5381 4.23738C17.3674 4.34665 17.2103 4.32616 17.0123 4.27153C16.5 4.14177 16.2542 3.82078 16.2132 3.30856C16.2064 3.24027 16.1791 3.1788 16.1654 3.11051C16.0083 2.44804 16.0083 2.45487 15.3322 2.4617C15.1888 2.4617 15.1205 2.50268 15.0932 2.6461C15.0522 2.86465 14.9907 3.06953 14.9429 3.28808C14.779 4.00518 14.7722 3.99835 14.1165 4.27836C13.9458 4.35348 13.7956 4.33982 13.6385 4.24421C13.3243 4.04615 13.0102 3.8481 12.6892 3.6637C12.614 3.62272 12.5389 3.52028 12.4501 3.62955C12.2794 3.82761 12.0199 3.95054 11.9379 4.22372C11.9243 4.2647 11.9926 4.32616 12.0199 4.37397C12.2111 4.6813 12.4023 4.99546 12.5936 5.30279C12.6823 5.43938 12.7097 5.58963 12.6414 5.73305C12.2931 6.4638 12.5526 6.39551 11.6784 6.59357C11.5965 6.61405 11.5145 6.63454 11.4325 6.65503C10.7906 6.81211 10.7906 6.81211 10.8042 7.4814C10.8042 7.61799 10.8384 7.69312 10.9886 7.72044C11.214 7.75459 11.4325 7.82288 11.6511 7.87752C12.3409 8.04825 12.3409 8.04825 12.614 8.70389C12.6892 8.87463 12.6823 9.02488 12.5799 9.18196C12.3818 9.49611 12.1906 9.81027 11.9926 10.1313C11.9789 10.1722 11.9516 10.2269 11.9106 10.2883Z"
                  fill="#AB0000"
                ></path>
                <path
                  d="M22.817 7.24244C22.8034 10.7801 20.2696 13.7783 16.7866 14.3793C12.8801 15.0554 9.13067 12.3987 8.44772 8.47175C7.72379 4.33306 10.6946 0.4334 14.8675 0.037288C16.6158 -0.13345 18.2208 0.283151 19.6755 1.2666C19.7438 1.31441 19.8189 1.36222 19.8735 1.42368C20.0033 1.5671 20.0101 1.73101 19.9008 1.88809C19.7984 2.03834 19.6481 2.08615 19.4774 2.02468C19.4023 1.99736 19.3271 1.94956 19.2589 1.90175C16.5953 0.0850947 13.0576 0.4334 10.8722 2.79642C9.12384 4.68819 8.62528 6.92145 9.47215 9.35276C10.3122 11.7704 12.0742 13.2251 14.6079 13.628C18.2003 14.2086 21.5467 11.668 22.0043 8.08247C22.2297 6.30679 21.7858 4.70185 20.7067 3.27448C20.6726 3.22668 20.6316 3.1857 20.5974 3.13789C20.4609 2.94667 20.4813 2.72129 20.6452 2.59153C20.8092 2.46177 21.0345 2.48226 21.1848 2.66666C21.5809 3.14472 21.9019 3.66377 22.1614 4.23062C22.5985 5.17992 22.8239 6.19069 22.817 7.24244Z"
                  fill="#AB0000"
                ></path>
                <path
                  d="M15.5852 9.07982C14.5607 9.07982 13.7275 8.25345 13.7275 7.23585C13.7275 6.21825 14.5744 5.37822 15.5852 5.38505C16.5959 5.39188 17.4223 6.21825 17.4291 7.22902C17.436 8.24662 16.6096 9.07982 15.5852 9.07982ZM15.5715 8.32175C16.1793 8.32858 16.6711 7.84368 16.6711 7.24268C16.6711 6.64168 16.1793 6.14313 15.5783 6.14313C14.991 6.14313 14.4993 6.62802 14.4924 7.21536C14.4856 7.82319 14.9637 8.31492 15.5715 8.32175Z"
                  fill="#AB0000"
                ></path>
              </svg>
            </div>
            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center rounded-lg  mt-4">
              <h5 className="mb-0">Categories</h5>
              {/* <Link to="#" className="text-decoration-none">
               
              </Link> */}
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
            <img
              className="bg_image_detail"
              alt=""
              src="./image/detail_side.png"
            ></img>
          </div>

          {/* <!-- Tag Cloud Card --> */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="side_up_icon icon_three">
              {/* <svg
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
              </svg> */}
              <img src="./image/menu_icon.svg" alt="" />
            </div>
            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center rounded-lg mt-4">
              <h5 className="mb-0">Tag Cloud</h5>
              {/* <Link to="#" className="text-decoration-none">
              
              </Link> */}
            </div>
            <div className="card-body mb-4 bg-white">
              <div className="d-flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <Link
                    key={index}
                    to="#"
                    className="btn btn-light btn-sm  blog-tag rounded-pill"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            <img
              className="bg_image_detail"
              src="./image/blog_small_card.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogmid;
