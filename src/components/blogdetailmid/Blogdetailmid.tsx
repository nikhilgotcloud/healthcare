import React, { useState } from "react";
import "./blogdetail-style.css";
import { Link } from "react-router-dom";

const Blogdetailmid = () => {
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

  const fontstyle: React.CSSProperties = { fontSize: "16px" };
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

        <div className="col-lg-6">
          <img
            src="./image/blog-detail2.png"
            alt="New Era of Medical Billing and Management"
            loading="lazy"
            className="w-100 my-2"
          />
          <div className="blog-meta my-3">
            <div className="meta-item">
              <img
                src="./image/latestblog/profie-icon.png"
                alt=""
                loading="lazy"
              />
              <span>Sarah Miller</span>
            </div>
            <div className="meta-item">
              <img
                src="./image/latestblog/calander-icon.png"
                alt=""
                loading="lazy"
              />
              <span>January 5, 2024</span>
            </div>
            <div className="meta-item">
              <img
                src="./image/latestblog/bookmark-icon.png"
                alt=""
                loading="lazy"
                width="30px"
                height="30px"
              />
              <span>Medical Billing</span>
            </div>
          </div>

          <h4 className="blog-title d-block">
            Introduction: Navigating the New Era of Medical Billing and
            Management
          </h4>
          <p className="mb-3">
            The landscape of medical billing and management services in the
            USA is undergoing a profound transformation, driven by technological
            innovation and regulatory shifts. These changes mark an essential
            pivot from traditional practices, heralding a new era that promises
            enhanced efficiency, accuracy, and patient satisfaction. Keeping
            pace with these hospital trends is not just beneficial but essential
            for healthcare providers. It ensures compliance, optimizes revenue
            cycles, and aligns services with the evolving expectations of a
            digitally empowered patient base. This blog delves into the recent
            advancements shaping the future of medical billing and management
            services, highlighting their pivotal role in modernizing hospital
            billing systems and collections.
          </p>
          <h4 className="blog-title d-block">
            Technological Advancements: Pioneering a New Frontier in Medical
            Billing
          </h4>
          <p className="mb-3">
            The world of medical billing is on the brink of a technological
            revolution. Advancements in Augmented Reality, Edge Computing, and
            Quantum Computing are not just transforming but pioneering new
            frontiers in medical billing, redefining efficiency and accuracy in
            hospital billing systems.
          </p>
          <div className="colored-card my-3 d-flex flex-column align-items-center justify-content-center p-4 shadow-lg text-center">
            <img
              src="./image/semicolon.png"
              alt="infhealthcare"
              loading="lazy"
              className="mb-4"
            />
            <p className="my-3 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="my-3 text-white">Lorem Ipsum</p>
          </div>
          <h4 className="blog-title d-block">
            Augmented Reality and Virtual Reality: Enhancing Training and
            Accuracy
          </h4>
          <p className="mb-3">
            In the realm of medical billing and management services, Augmented
            Reality (AR) and Virtual Reality (VR) are emerging as game-changers.
            These technologies are revolutionizing training methodologies for
            professionals in hospital medical billing. By simulating complex
            billing scenarios, AR and VR offer immersive, hands-on experiences,
            allowing practitioners to hone their skills in a controlled, yet
            realistic environment. This innovative approach significantly
            improves coding accuracy and billing efficiency, ultimately reducing
            errors and enhancing the overall quality of hospital billing
            services​​.
          </p>
          <ul className="services-list mb-3">
            <li>
              <span className="checkmark-icon"><img src="./image/homesection/group18.png" alt="" /></span>Strong safeguards against
              unauthorized access and cyber threats.
            </li>
            <li>
              <span className="checkmark-icon"><img src="./image/homesection/group18.png" alt="" /></span>Adherence to industry
              regulations for data protection.
            </li>
            <li>
              <span className="checkmark-icon"><img src="./image/homesection/group18.png" alt="" /></span>Proactive measures to
              identify and mitigate potential risks.
            </li>
            <li>
              <span className="checkmark-icon"><img src="./image/homesection/group18.png" alt="" /></span>Assured confidentiality
              and meticulous handling of data.
            </li>
            <li>
              <span className="checkmark-icon"><img src="./image/homesection/group18.png" alt="" /></span>Sets us apart as a
              reliable and trusted partner.
            </li>
          </ul>
          <h4 className="blog-title d-block">
            Edge Computing: Real-time Processing for Enhanced Efficiency
          </h4>
          <p>
            Edge computing is reshaping the efficiency of hospital billing
            systems. By processing data closer to its source, edge computing
            drastically reduces latency, allowing for quicker and more accurate
            billing operations. This is especially critical in hospital billing
            collections, where prompt and accurate billing is crucial for
            maintaining cash flow and patient satisfaction. The integration of
            edge computing into hospital billing systems ensures real-time
            processing, thereby streamlining operations and enhancing the
            overall efficiency of the medical billing process​​.
          </p>
          <div className="d-flex flex-column flex-md-row gap-3 my-3">
            <img
              src="./image/blog-detail3.png"
              className="img-fluid rounded"
              alt="infhealthcare"
            />
            <img
              src="./image/blog-detail4.png"
              className="img-fluid rounded"
              alt="infhealthcare"
            />
          </div>
          <h4 className="blog-title d-block">
            Quantum Computing: Revolutionizing Medical Billing Analytics
          </h4>
          <p>
            Quantum computing’s introduction into the field of medical billing
            marks a significant leap forward. Its capability to process vast
            amounts of data at unprecedented speeds is set to revolutionize
            billing analytics. For hospital medical billing, this means more
            efficient risk assessment, optimization of billing algorithms, and
            enhanced decision-making processes. Quantum computing’s advanced
            analytical capabilities can potentially transform every aspect of
            medical billing, from patient billing inquiries to complex hospital
            billing collection strategies.
          </p>
          <h4 className="blog-title d-block">
            Security and Transparency in Billing: Safeguarding the Future of
            Medical Billing and Management
          </h4>
          <p className="mb-4">
            In the rapidly evolving landscape of medical billing services,
            cybersecurity has emerged as a cornerstone for protecting sensitive
            patient data and billing information. The increasing digitization of
            hospital billing systems has made them prime targets for cyber
            threats, underscoring the urgent need for robust security measures.
            Protecting patient information is not just a legal obligation; it is
            fundamental to maintaining trust and operational integrity in
            hospital medical billing.
          </p>
          <div className="d-flex align-items-center gap-3">
            <h5 className="mb-0">Tag Cloud</h5>
            <Link
              to="#"
              className="btn btn-light btn-sm px-3 py-2 blog-tag rounded-pill"
            >
              Billing
            </Link>
            <Link
              to="#"
              className="btn btn-light btn-sm px-3 py-2 blog-tag rounded-pill"
            >
              Medical Billing
            </Link>
          </div>

          <div className="d-flex justify-content-between align-items-center w-100 py-4">
            {/* <!-- Previous Section --> */}
            <div className="d-flex align-items-start">
              <div
                className="rounded-circle bg-teal-800 p-3 d-flex align-items-center justify-content-center"
                style={bgstyle}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="ms-3">
                <div className="text-danger prev-mb" style={fontstyle}>
                  Previous
                </div>
              </div>
            </div>
            {/* <!-- Pagination --> */}
            <nav aria-label="Page navigation" className="mt-3 paginatee">
              <ul className="pagination justify-content-center align-items-center gap-2 m-0">
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
              </ul>
            </nav>{" "}
            {/* <!-- Next Section --> */}
            <div className="d-flex align-items-end text-end">
              <div className="me-3">
                <div className="text-danger prev-mb" style={fontstyle}>
                  Next
                </div>
              </div>
              <div
                className="rounded-circle bg-teal-800 p-3 d-flex align-items-center justify-content-center"
                style={bgstyle}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
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

export default Blogdetailmid;
