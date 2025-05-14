import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import RotatingTextButton from "../rotatebtn/RotatingTextButton";
import './contacthero-style.css';

interface HeroContent {
  image: string;
  header: string;
  detail: string;
  detail_2?: string;
  description: string;
  showBackButton?: boolean;
  slug? : string;
}

// Update RouteContentMap to exclude /services/:slug since we'll handle it dynamically
type RouteContentMap = {
  [key in "/contact" | "/about" | "/services" | "/blogdetail" | "/blog" |"/terms-and-conditions" | "/privacy-policy" | "/cookies-policy"]: HeroContent;
}

interface ContactheroProps {
  slug?: string;
}

const Contacthero: React.FC<ContactheroProps> = ({ slug }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(true);
  const [showServiceData , setShowServiceData] = useState<HeroContent  | null>(null)
  const contentMap: RouteContentMap = {
    "/contact": {
      image: "/image/contacthero.png",
      header: "Contact Us Today",
      detail: "Get in Touch With Our Experts",
      description: "We're here to help and answer any questions you might have",
    },
    "/about": {
      image: "/image/abouthero.png",
      header: "About Our Company",
      detail: "Discover Our Story",
      description: "Learn about our mission, values, and commitment to excellence",
    },
    "/services": {
      image: "/image/serviceshero.png",
      header: "Our Services",
      detail: "Comprehensive Solutions",
      description: "Explore our range of professional services tailored to your needs",
    },
    "/blogdetail": {
      image: "/image/blog-detail.png",
      header: "Blog Insights",
      detail: "Latest Updates",
      description: "Stay informed with our latest articles and industry insights",
    },
    "/blog": {
      image: "/image/blog-detail.png",
      header: "Blog Insights",
      detail: "Latest Updates",
      description: "Stay informed with our latest articles and industry insights",
    },
    "/terms-and-conditions": {
      image: "/image/blog-detail.png",
      header: "Terms and Conditions",
      detail: "Our Usage Agreement",
      description: "Review the terms governing your use of our services and website",
    },
    "/privacy-policy": {
      image: "/image/blog-detail.png",
      header: "Privacy Policy",
      detail: "Your Data, Our Commitment",
      description: "Learn how we collect, use, and protect your personal information",
    },
    "/cookies-policy": {
      image: "/image/blog-detail.png",
      header: "Cookies Policy",
      detail: "Understanding Cookie Usage",
      description: "Find out how we use cookies to enhance your browsing experience",
    },
  };

  const serviceDetailContent = [
    {
    image: "/image/service/denial_service/Denial-Management-Services-Banner.webp",
    header: "Service Details",
    detail: "Simplified Denial ",
    detail_2: "Management Services",
    description: "Optimizing Revenue Through Effective Denial Management",
    slug : 'denial-Management' ,

  },{
    image: "/image/service/health_billing/Hospital-Billing-Header.webp",
    header: "Service Details",
    detail: "Optimize Revenue with ",
    detail_2: "Expert Billing Services",
    description: "Efficient Hospital Billing Solutions for Financial Excellence",
    slug : 'hospital-billing' ,
  },{
    image: "/image/serviceshero.png",
    header: "Service Details",
    detail: "Revitalize Your Financial ",
    detail_2: "Health",
    description: "Driving Success Through Optimized Revenue Cycle in Healthcare",
    slug : "revenue-cycle-management" ,
  },{
    image: "/image/service/medical_billing/Medical-Billing-Header.webp",
    header: "Service Details",
    detail: "Transform Your Billing ",
    detail_2: "Experience",
    description: "Trustworthy Medical Billing Services for Healthcare Providers",
    slug : "medical-billing" ,
  },
  {
    image: "/image/service/medical_virtual_biling/Medical-Virtual-Assistant-Header.webp",
    header: "Service Details",
    detail: "Empowering Providers, ",
    detail_2: "Transforming Healthcare",
    description: "Unlock the Future of Healthcare with Virtual Assistant Solutions",
    slug : 'medical-virtual-assistant' ,
  },
  {
    image: "/image/service/physical_biling/Physician-Billing-Header.webp",
    header: "Service Details",
    detail: "Seamless Billing, ",
    detail_2: "Amplified Profits",
    description: "Driving Financial Excellence through Expert Physician Billing Services",
    slug : "physician-billing" ,
  }
  ,
  {
    image: "/image/service/Hme_billing/HME-Billing-Header.webp",
    header: "Service Details",
    detail: "Maximize Your HME ",
    detail_2: "Revenue Potential",
    description: "Optimize Reimbursements with Our HME Billing Services",
    slug : "hme-billing" ,
  }
  ,
  {
    image: "/image/service/dme_billing/DME-Billing-Header.webp",
    header: "Service Details",
    detail: "Simplify Your Billing ",
    detail_2: "Operations",
    description: "Seamless DME Billing Services for Healthcare Providers",
    slug : "dme-billing" ,
  }
];

  const defaultContent: HeroContent = {
    image: "/image/404hero.png",
    header: "Page Not Found",
    detail: "Oops! This page does not exist.",
    description: "The page you’re looking for might have been moved or deleted.",
    showBackButton: true,
  };

  // Check if the current path is a service detail page (e.g., /services/medical-billing)
  const isServiceDetailPage = location.pathname.startsWith("/services/") && location.pathname !== "/services";

  // Determine the current content
  // const currentContent = isServiceDetailPage
  //   ? serviceDetailContent
  //   : (location.pathname as keyof RouteContentMap) in contentMap
  //   ? contentMap[location.pathname as keyof RouteContentMap]
  //   : defaultContent;

    const currentContent =  (location.pathname as keyof RouteContentMap) in contentMap
    ? contentMap[location.pathname as keyof RouteContentMap]
    : defaultContent;


  useEffect(() => {
    console.log(location,slug);
    setAnimate(false);
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 50);
    if(isServiceDetailPage){
      let  renderData: any = serviceDetailContent.find((item : any)=> item?.slug.trim() === slug?.trim())
      setShowServiceData(renderData)
    }
    return () => clearTimeout(timeout);
  }, [location.pathname,slug]);

  const headStyle: React.CSSProperties = {
    backgroundColor: "#ab0000",
    borderRadius: "100px",
    border: "0",
    fontSize: "18px",
    lineHeight: "16px",
    fontWeight: 400,
    padding: "12px 24px",
    cursor: "pointer",
  };

  const goBackHandler = () => {
    navigate("/");
  };

  const btncolor = { backgroundColor: '#ab0000' };

  return (
    (!isServiceDetailPage ? <div className="header_containter container">
      <div className="hero-container position-relative">
        <div className="hero-wrapper">
          <div className="hero-image">
            <img src={currentContent.image} alt="Hero" />
            <div className="hero-content">
              <div className="col-lg-3">
                {isServiceDetailPage && slug ? (
                  <Link
                    to={`/services/${slug}`}
                    className="header-link"
                    style={{ textDecoration: "none" }}
                  >
                    <span
                      className={`badge mb-3 text-white crausal_lorem ${
                        animate ? "animate__animated animate__pulse" : ""
                      }`}
                      style={headStyle}
                    >
                      {currentContent.header}
                    </span>
                  </Link>
                ) : (
                  <span
                    className={`badge mb-3 text-white crausal_lorem ${
                      animate ? "animate__animated animate__pulse" : ""
                    }`}
                    style={headStyle}
                  >
                    {currentContent.header}
                  </span>
                )}
              </div>
              <h1 className={`${animate ? "animate__animated animate__fadeInRight" : ""}`}>
                <b>{currentContent.detail}</b>
              </h1>
              <div className="hero-footer">
                <div className="animate__animated animate__fadeIn">
                  <RotatingTextButton />
                </div>
                <p className={`${animate ? "animate__animated animate__fadeInUpBig" : ""}`}>
                  <b>{currentContent.description}</b>
                </p>
              </div>
            </div>
            {currentContent.showBackButton && (
              <span
                className={`badge m-5 w-50 text-white make_appoint_btn ${
                  animate ? "animate__animated animate__pulse" : ""
                }`}
                style={headStyle}
                onClick={goBackHandler}
              >
                Go Back
              </span>
            )}
          </div>
        </div>
      </div>
    </div> 
    : 
    // for the array of services
  
     <div className="header_containter container header_service_detail_cro">
      <div className="hero-container position-relative">
        <div className="hero-wrapper">
          <div className="hero-image">
            <img src={showServiceData?.image} alt="Hero" />
            <div className="hero-content">
              <div className="col-lg-3">
                {isServiceDetailPage && slug ? (
                  <Link
                    to={`/services/${slug}`}
                    className="header-link"
                    style={{ textDecoration: "none" }}
                  >
                    <span
                      className={`badge mb-3 text-white crausal_lorem ${
                        animate ? "animate__animated animate__pulse" : ""
                      }`}
                      style={headStyle}
                    >
                      {showServiceData?.header}
                    </span>
                  </Link>
                ) : (
                  <span
                    className={`badge mb-3 text-white crausal_lorem ${
                      animate ? "animate__animated animate__pulse" : ""
                    }`}
                    style={headStyle}
                  >
                    {showServiceData?.header}
                  </span>
                )}
              </div>
              <h1 className={`${animate ? "animate__animated animate__fadeInRight" : ""}`}>
                {showServiceData?.detail}
              </h1>
              <h1 className={`${animate ? "animate__animated animate__fadeInRight animate__delay-1s mt-2 margin_top_custom" : ""}`}>
                {showServiceData?.detail_2}
              </h1>
              <div className="hero-footer">
                <div className="animate__animated animate__fadeIn">
                  <RotatingTextButton />
                </div>
                <p className={`${animate ? "animate__animated animate__fadeInUpBig" : ""}`}>
                  <b>{showServiceData?.description}</b>
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div> )
   
   
  );
};

export default Contacthero;