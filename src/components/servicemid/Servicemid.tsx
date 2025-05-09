import React, { useState, useEffect } from "react";
import axios from "axios";
import { Service } from "../../types/services.interface";
import "./servicemid-style.css";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import data from "./staticData";
type StaticService = {
  title: string;
  slug: string;
};

const Servicemid = () => {


  // static data 

  // const categories = [
  //   "Revenue Cycle Management",
  //   "Denial Management",
  //   "Medical Billing",
  //   "Physician Billing Services",
  //   "DME Billing",
  //   "Hospital Billing",
  //   "HME Billing",
  //   "Medical Virtual Assistant",
  // ];



  const staticServiceDetail: any = data

  // for static service list 
  const staticServiceList: any = [
    {
      title: 'Denial Management',
      slug: 'denial-Management',
    },
    {
      title: "Hospital Billing",
      slug: 'hospital-billing',
    }
    ,
    {
      title: "Revenue Cycle Management",
      slug: "revenue-cycle-management",
    },
    {
      title: "Medical Billing",
      slug: "medical-billing",
    },
    {
      title: "Medical Virtual Assistant",
      slug: 'medical-virtual-assistant',
    },
    {
      title: "Physician Billing",
      slug: "physician-billing",
    },
    {
      title: "HME Billing",
      slug: "hme-billing",
    },
    {
      title: "DME Billing",
      slug: "dme-billing",
    }
  ]
  // static data 

  // dynamic style

  const sidecard: React.CSSProperties = { borderRadius: '20%' }
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
    width: '30rem',
    border: '2px solid #004457',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  };

  const getStyles = (isHovered: boolean) => ({
    ...baseStyles,
    color: isHovered ? 'white' : '#004457',
    backgroundColor: isHovered ? '#004457' : 'white',
  });
  const disabledBgStyle: React.CSSProperties = { backgroundColor: "#ccc" };
  const disabledTxtStyle: React.CSSProperties = { color: "#999" };
  const disabledContainerStyle: React.CSSProperties = { cursor: "not-allowed" };
  // dynamic style


  const location = useLocation();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);

  const [servicesList, setServicesList] = useState<Service[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  const categories = servicesList.map((service) => service.title);
  const [hoverStates, setHoverStates] = useState<{ [key: number]: boolean }>(
    categories.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
  );

  const dataToshow = staticServiceDetail.find((item: any) => item?.slug === slug)

  const handleCategoryClick = (slug: string) => {
    navigate(`/services/${slug}`);
  };
  const handleMouseEnter = (index: number) => {
    setHoverStates(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleMouseLeave = (index: number) => {
    setHoverStates(prev => ({
      ...prev,
      [index]: false
    }));
  };


  useEffect(() => {

    setServicesList(staticServiceList)
    console.log(slug, location)

  }, [slug]);

  if (loading) {
    return <div className="spinner-border text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>;
  }

  // if (error || !service) {
  //   return <div>
  //     <h2 className="about-title my-3">{error}. We are facing some issue with our server . Please try again after some time</h2></div>;
  // }

  // const renderServiceDescription = () => {
  //   return service.service_description.map((item, index) => {
  //     if (item.type === "heading" && item.level === 3) {
  //       return (
  //         <h3 key={index} className="about-title my-3">
  //           {item.children.map((child) => child.text).join("")}
  //         </h3>
  //       );
  //     } else if (item.type === "paragraph") {
  //       return (
  //         <p key={index} className="denial-service-para">
  //           {item.children.map((child) => child.text).join("")}
  //         </p>
  //       );
  //     }
  //     return null;
  //   });
  // };

  const currentIndex = servicesList.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? servicesList[currentIndex - 1] : null;
  const nextService =
    currentIndex < servicesList.length - 1 ? servicesList[currentIndex + 1] : null;

  return (
    <div className="container  service_box_deail only_service_detail">
      <div className="row">
        {/* <div className="col-lg-1"></div> */}
        {/* <!-- Main Blog Listing Column (8 columns wide) --> */}
        <div className="col-lg-9">
          <div className="scroll_boz">


            <div className="row">
              <div className="upper_text col-12">
                <span className="badge service_badge badge-white mb-3 p-3 text-white shadow-lg" style={headstyle}>
                  SERVICES
                </span>
                <h2 className="about-title my-3">{dataToshow?.title}</h2>
                <p className="description mb-4">
                  {dataToshow?.subtitle}
                </p>
              </div>
            </div>

            {/* <div className="row">
            <div className="col-lg-6"></div>
          </div> */}


            <div className="row mb-4" >
              {dataToshow?.detailsList.map((card: any, index: number) => {
                return (
                  <div key={"card" + card?.id} className="col-lg-6 margin_custon_feature" >
                    <div className="why-feature new_featureService cutPieceRight">
                      <div className="box-number text-dark">{index + 1}</div>
                      <div className="box-icon justify-content-center mb-3">
                        <img src={card?.image || "/image/default.png"} alt={card?.title} className="card-image"
                          width={100} height={100} />
                      </div>
                      <div className="divider mb-3 w-75 mx-5"></div>
                      <h6 className="heading_card">{card?.title}</h6>
                      <p className="text-muted mb-2 px-2 small text-center card-description py-2">
                        {card?.description}
                      </p>
                      {/* <img className="bg_image" src="/image/bg_svg_service_Detail.svg" alt="" /> */}
                    </div>
                  </div>
                )
              })}


            </div>





            {dataToshow?.discripttionList.map((item: any, index: number) => {
              return (
                <div key={"item" + item?.id} className={index % 2 !== 0 ? ' flex-row-reverse row my-2 discription_box ' : ' row my-2 discription_box'}>
                  <div className="col-lg-8 ">
                    <h3 className="about-title my-3">
                      {item?.title}
                    </h3>
                    <p className="denial-service-para">
                      {item?.discription}
                    </p>
                  </div>

                  <div className="col-lg-4">
                    <div className="image_box w-100 h-100 overflow-hidden">
                      <img src={item?.url || "/image/default.png"} alt={item?.title} loading="lazy"
                        className="w-100 bottom_slider_image" />
                    </div>

                  </div>
                </div>
              )
            })}
            {/* have to crete new list items  */}
          <div className="list_bootom_sectoion">
            <div className="row">
              <div className="col-12">
                <h5 className="why_line about-title">
                  Why Outsource Denial Management Services to INF Healthcare?
                </h5>
                <p className="why_para">
                  Experience the benefits of seamless denial management and optimize your financial performance. Here’s what we offer:
                </p>
             
              </div>
              <div className="row hover_box">
              <div className="col-lg-7 ">
                  <ul className="hippa-list">
                    {dataToshow?.benifitsPoint[0]?.points?.map((item: any, index: number) => {
                      return (<li key={`benifit_${item?.id}`}>
                        <span className="hippa-1-icon me-3">
                          <img src="/image/tick_one.svg" alt="" />
                        </span>
                        <div className="image_text">
                          <b>{item?.title}</b>
                          {item?.discription}
                        </div>
                      </li>
                      )
                    })}


                  </ul>
                </div>
                <div className="col-lg-5 h-100">
                  <div className="image_inPara_box h-100">
                    <img src={dataToshow?.benifitsPoint[0]?.img} className="h-100 w-100" alt="" />
                  </div>
                </div>
                </div>
            </div>

          </div>
          </div>
          

          <div className="d-flex justify-content-between align-items-center w-100 py-4">
            <div className="prev_nav nav_box">
              {prevService ? (
                <Link to={`/services/${prevService.slug}`}>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-teal-800 p-3 d-flex align-items-center justify-content-center"
                      style={bgstyle}>
                      <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="ms-3">
                      <div className="text-danger mb-1" style={fontstyle}>
                        Previous
                      </div>
                    </div>
                  </div>
                  <div className="text-teal-800 fw-medium" style={txtstyle}>
                    {prevService.title}
                  </div>
                </Link>
              ) : (
                <div style={disabledContainerStyle}>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-teal-800 p-3 d-flex align-items-center justify-content-center"
                      style={disabledBgStyle}>
                      <i className="fa-solid fa-arrow-left" style={disabledTxtStyle}></i>
                    </div>
                    <div className="ms-3">
                      <div className="text-danger mb-1" style={{ ...fontstyle, ...disabledTxtStyle }}>
                        Previous
                      </div>
                    </div>
                  </div>
                  <div className="fw-medium mt-3" style={disabledTxtStyle}>
                    No Previous Service
                  </div>
                </div>
              )}
            </div>

            <div className="prev_nav nav_box">
              {nextService ? (
                <Link to={`/services/${nextService.slug}`}>
                  <div className="d-flex align-items-center justify-content-end text-end">
                    <div className="me-3">
                      <div className="text-danger mb-1" style={{ ...fontstyle, ...disabledTxtStyle }}>
                        Next
                      </div>
                    </div>
                    <div className="rounded-circle bg-teal-800 p-3 d-flex align-items-center justify-content-center"
                      style={bgstyle}>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                  <div className="text-teal-800 fw-medium" style={txtstyle}>
                    {nextService.title}
                  </div>
                </Link>
              ) : (
                <div style={disabledContainerStyle}>
                  <div className="d-flex align-items-center justify-content-end text-end">
                    <div className="me-3">
                      <div className="text-danger mb-1" style={{ ...fontstyle, ...disabledTxtStyle }}>
                        Next
                      </div>
                    </div>
                    <div className="rounded-circle bg-teal-800 p-3 d-flex align-items-center justify-content-center"
                      style={disabledBgStyle}>
                      <i className="fa-solid fa-arrow-right" style={disabledTxtStyle}></i>
                    </div>
                  </div>
                  <div className="fw-medium mt-3" style={disabledTxtStyle}>
                    No Next Service
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="col-lg-1"></div> */}
        {/* <!-- Sidebar Column (4 columns wide) --> */}
        <div className="col-lg-3 mt-3 right_section_blog ">
          {/* <!-- Recent Articles Card --> */}

          {/* <!-- Categories Card --> */}
          <div className="card border-0 shadow-sm  mb-5 w-100 cutPieceRight">
            <div className="side_up_icon rotate">
              {/* <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26 17.5346C25.8702 18.1288 25.4878 18.5591 25.078 18.9825C24.477 19.604 23.876 20.2186 23.316 20.8743C22.2984 22.0626 21.0349 22.807 19.4983 23.1075C19.2593 23.1553 19.0202 23.2236 18.7812 23.2783C18.508 23.3397 18.3236 23.2441 18.269 23.0119C18.2143 22.7865 18.3373 22.6158 18.6105 22.5475C19.0407 22.4314 19.4778 22.3289 19.9081 22.2197C20.8505 21.9806 21.6564 21.5094 22.3257 20.806C23.1931 19.8908 24.0536 18.9757 24.9004 18.0468C25.5151 17.3775 25.2214 16.3326 24.3609 16.1004C23.8965 15.9775 23.4936 16.1004 23.1589 16.4487C22.353 17.2751 21.5335 18.1015 20.7276 18.9278C20.5637 19.0986 20.3861 19.1737 20.1471 19.1737C17.5246 19.1669 14.9089 19.1669 12.2863 19.1669C12.2453 19.1669 12.2044 19.1669 12.1566 19.1669C11.8765 19.16 11.7195 19.0166 11.7195 18.7844C11.7263 18.5522 11.8834 18.4156 12.1634 18.4088C12.5117 18.402 12.8532 18.4088 13.2015 18.4088C13.7273 18.4088 14.2464 18.4088 14.7723 18.4088C14.9362 18.4088 15.0932 18.3883 15.2435 18.3405C15.8582 18.1561 16.1928 17.6985 16.1108 17.1522C16.0289 16.5512 15.544 16.1414 14.9089 16.1346C13.8639 16.1277 12.8122 16.1346 11.7673 16.1346C11.4736 16.1346 11.1731 16.1414 10.8794 16.1346C10.5175 16.1277 10.176 16.2029 9.84818 16.3531C8.95351 16.7561 8.05884 17.1453 7.171 17.5551C6.87733 17.6917 6.59049 17.7668 6.2695 17.7463C5.98949 17.7327 5.70948 17.76 5.4363 17.7395C5.21776 17.7258 5.17678 17.8078 5.17678 18.0127C5.18361 19.2625 5.18361 20.5123 5.18361 21.7621C5.18361 22.6568 5.19044 23.5514 5.17678 24.4461C5.17678 24.6305 5.2041 24.7056 5.42264 24.7056C6.69976 24.692 7.97688 24.692 9.25401 24.7056C10.094 24.7125 10.8863 24.4598 11.6853 24.2617C13.3381 23.8588 14.9908 23.4422 16.6504 23.0324C16.6845 23.0256 16.7187 23.0187 16.7528 23.0119C17.0123 22.9573 17.2036 23.0529 17.2582 23.2646C17.3197 23.49 17.2036 23.6744 16.9304 23.7427C16.3772 23.8861 15.8172 24.0227 15.264 24.1593C13.6932 24.5485 12.1156 24.9378 10.5448 25.3203C10.094 25.4296 9.62963 25.4637 9.15839 25.4637C7.91542 25.4637 6.67245 25.4637 5.42947 25.4637C5.28605 25.4637 5.16995 25.4569 5.16995 25.6618C5.16995 25.812 5.03336 25.8803 4.92409 25.9623C3.36696 25.9623 1.81665 25.9623 0.259522 25.9623C0.0614658 25.8393 0 25.6618 0 25.4296C0.0409771 22.5338 0.0341476 19.6518 0.0341476 16.7765C0.0341476 16.3804 0.15025 16.2575 0.539532 16.2575C0.846861 16.2575 1.14736 16.2507 1.45469 16.2575C1.69372 16.2643 1.8508 16.4146 1.85763 16.6263C1.86446 16.8312 1.70738 16.9951 1.46835 17.0156C1.32493 17.0292 1.18151 17.0361 1.03809 17.0156C0.833202 16.9883 0.792225 17.0702 0.792225 17.2614C0.799054 19.1054 0.799054 20.9426 0.799054 22.7865C0.799054 23.5105 0.805884 24.2412 0.792225 24.9651C0.792225 25.1427 0.840032 25.1905 1.0176 25.1905C2.08983 25.1837 3.16207 25.1837 4.23431 25.1905C4.4187 25.1905 4.45285 25.1291 4.45285 24.9583C4.44602 22.3836 4.44602 19.8089 4.45285 17.2273C4.45285 17.0497 4.39821 16.9951 4.22748 17.0019C3.94064 17.0156 3.6538 17.0087 3.36696 17.0019C3.04597 16.9951 2.87523 16.8585 2.87523 16.6126C2.87523 16.3736 3.04597 16.2438 3.3533 16.2438C3.81087 16.2438 4.26845 16.2438 4.7192 16.2438C5.088 16.2438 5.21776 16.3599 5.2041 16.7287C5.19727 16.92 5.26556 16.9541 5.44313 16.9678C6.21487 17.0292 6.91831 16.879 7.60809 16.5239C8.24324 16.196 8.91936 15.9365 9.56816 15.636C9.99159 15.4448 10.4287 15.3492 10.8931 15.3492C12.2385 15.356 13.5771 15.3492 14.9225 15.3492C15.9674 15.356 16.7597 16.0458 16.8894 17.0566C16.944 17.4732 16.8484 17.8624 16.6299 18.2176C16.5479 18.3473 16.5616 18.3815 16.7187 18.3815C17.8251 18.3747 18.9314 18.3747 20.0378 18.3815C20.1676 18.3815 20.2359 18.3132 20.3178 18.2381C21.0554 17.4868 21.8203 16.7561 22.5306 15.9707C23.6848 14.6867 25.679 15.2809 25.9659 16.8653C25.9659 16.879 25.9863 16.8926 25.9932 16.9063C26 17.1249 26 17.3297 26 17.5346Z"
                  fill="#AB0000" />
                <path
                  d="M12.457 2.69391C12.5526 2.69391 12.6414 2.74171 12.7302 2.79635C13.058 3.00124 13.3926 3.19929 13.7204 3.40418C14.0141 3.58857 14.1029 3.5476 14.1848 3.19929C14.2668 2.83733 14.3556 2.47536 14.4444 2.1134C14.5195 1.78558 14.6219 1.70363 14.9497 1.70363C15.38 1.70363 15.8103 1.71046 16.2405 1.70363C16.5069 1.6968 16.6503 1.82656 16.7049 2.07242C16.7937 2.46853 16.8893 2.85782 16.9849 3.25393C17.0464 3.52028 17.1625 3.56809 17.4015 3.42467C17.7499 3.21295 18.0913 3.00124 18.4328 2.78269C18.6514 2.6461 18.8426 2.65976 19.0201 2.84416C19.3275 3.15831 19.6416 3.46564 19.949 3.7798C20.1607 3.99152 20.1675 4.12128 20.0104 4.38763C19.7987 4.73593 19.587 5.07741 19.3753 5.42572C19.2455 5.64426 19.2933 5.76036 19.546 5.82183C19.9421 5.91744 20.3314 6.01989 20.7275 6.10184C20.9802 6.15648 21.11 6.2999 21.1031 6.55942C21.1031 7.01017 21.1031 7.45409 21.1031 7.90483C21.1031 8.1507 20.987 8.29412 20.7412 8.35558C20.3314 8.4512 19.9216 8.54681 19.5119 8.64925C19.3002 8.70389 19.2455 8.82682 19.3616 9.01805C19.5733 9.37318 19.7987 9.72149 20.0104 10.0766C20.1675 10.3361 20.1538 10.4727 19.9421 10.6845C19.6416 10.9918 19.3343 11.2923 19.027 11.5996C18.8153 11.8113 18.6718 11.825 18.4191 11.6747C18.0777 11.4698 17.743 11.2581 17.4015 11.0532C17.1352 10.8893 17.0396 10.9371 16.9645 11.2445C16.8757 11.6133 16.7937 11.9821 16.7049 12.3509C16.6298 12.6787 16.5205 12.7675 16.1722 12.7675C15.7693 12.7675 15.3595 12.7675 14.9566 12.7675C14.6151 12.7675 14.5127 12.6787 14.4307 12.344C14.3419 11.9684 14.2531 11.5859 14.1644 11.2103C14.0961 10.9371 13.9936 10.8893 13.7546 11.0396C13.4131 11.2445 13.0785 11.4562 12.737 11.6611C12.4638 11.825 12.3272 11.8113 12.1087 11.5928C11.8082 11.2991 11.5077 10.9986 11.214 10.6981C10.9886 10.4727 10.9681 10.343 11.132 10.0766C11.3301 9.74198 11.5418 9.41416 11.7399 9.08634C11.9106 8.81316 11.8696 8.71072 11.5486 8.63559C11.173 8.54681 10.7974 8.4512 10.4149 8.36924C10.1623 8.31461 10.0325 8.17119 10.0393 7.91166C10.0393 7.46092 10.0393 7.017 10.0393 6.56625C10.0393 6.32038 10.1486 6.17696 10.3945 6.12233C10.7974 6.03354 11.2003 5.9311 11.6033 5.83549C11.856 5.77402 11.9038 5.65792 11.7672 5.43938C11.5555 5.09107 11.3438 4.74959 11.132 4.40129C10.975 4.14177 10.9886 4.01201 11.2003 3.79346C11.5077 3.4793 11.8218 3.17197 12.1292 2.85782C12.2316 2.76903 12.3272 2.70757 12.457 2.69391ZM11.9106 10.2883C11.9379 10.3225 11.9652 10.3635 11.9994 10.3976C12.1292 10.5274 12.2726 10.6571 12.3887 10.7937C12.4843 10.903 12.5594 10.8893 12.6687 10.821C12.9897 10.6162 13.3175 10.4249 13.6385 10.22C13.7956 10.1176 13.9458 10.1108 14.1165 10.1859C14.779 10.4727 14.779 10.4659 14.9429 11.1762C14.9566 11.2308 14.9702 11.2923 14.9839 11.3469C15.141 12.0299 15.141 12.023 15.8308 12.0094C15.9673 12.0094 16.022 11.9684 16.0561 11.8318C16.1313 11.4767 16.2337 11.1284 16.302 10.7732C16.3498 10.5479 16.4796 10.4454 16.6708 10.3361C17.1215 10.0766 17.5108 10.1313 17.8933 10.4522C17.9411 10.4932 18.0094 10.5274 18.064 10.5615C18.665 10.9303 18.665 10.9303 19.1499 10.4181C19.2387 10.3225 19.2387 10.261 19.1704 10.1586C18.9723 9.84442 18.7879 9.52343 18.5831 9.20927C18.467 9.02488 18.4806 8.86097 18.5352 8.66291C18.665 8.16436 18.9723 7.91166 19.4777 7.87752C19.5597 7.87069 19.6416 7.83654 19.7236 7.81605C20.3519 7.6658 20.3451 7.6658 20.3451 7.01017C20.3451 6.83943 20.2836 6.77796 20.1265 6.74381C19.7714 6.66869 19.4231 6.57308 19.068 6.49795C18.8767 6.45698 18.7606 6.35453 18.6855 6.17014C18.426 5.5145 18.426 5.5145 18.7948 4.90667C18.8289 4.85204 18.8631 4.79057 18.904 4.73593C19.2592 4.16225 19.2523 4.16908 18.7743 3.69102C18.6787 3.58857 18.6104 3.56809 18.4806 3.65004C18.1733 3.85493 17.8455 4.03932 17.5381 4.23738C17.3674 4.34665 17.2103 4.32616 17.0123 4.27153C16.5 4.14177 16.2542 3.82078 16.2132 3.30856C16.2064 3.24027 16.1791 3.1788 16.1654 3.11051C16.0083 2.44804 16.0083 2.45487 15.3322 2.4617C15.1888 2.4617 15.1205 2.50268 15.0932 2.6461C15.0522 2.86465 14.9907 3.06953 14.9429 3.28808C14.779 4.00518 14.7722 3.99835 14.1165 4.27836C13.9458 4.35348 13.7956 4.33982 13.6385 4.24421C13.3243 4.04615 13.0102 3.8481 12.6892 3.6637C12.614 3.62272 12.5389 3.52028 12.4501 3.62955C12.2794 3.82761 12.0199 3.95054 11.9379 4.22372C11.9243 4.2647 11.9926 4.32616 12.0199 4.37397C12.2111 4.6813 12.4023 4.99546 12.5936 5.30279C12.6823 5.43938 12.7097 5.58963 12.6414 5.73305C12.2931 6.4638 12.5526 6.39551 11.6784 6.59357C11.5965 6.61405 11.5145 6.63454 11.4325 6.65503C10.7906 6.81211 10.7906 6.81211 10.8042 7.4814C10.8042 7.61799 10.8384 7.69312 10.9886 7.72044C11.214 7.75459 11.4325 7.82288 11.6511 7.87752C12.3409 8.04825 12.3409 8.04825 12.614 8.70389C12.6892 8.87463 12.6823 9.02488 12.5799 9.18196C12.3818 9.49611 12.1906 9.81027 11.9926 10.1313C11.9789 10.1722 11.9516 10.2269 11.9106 10.2883Z"
                  fill="#AB0000" />
                <path
                  d="M22.817 7.24244C22.8034 10.7801 20.2696 13.7783 16.7866 14.3793C12.8801 15.0554 9.13067 12.3987 8.44772 8.47175C7.72379 4.33306 10.6946 0.4334 14.8675 0.037288C16.6158 -0.13345 18.2208 0.283151 19.6755 1.2666C19.7438 1.31441 19.8189 1.36222 19.8735 1.42368C20.0033 1.5671 20.0101 1.73101 19.9008 1.88809C19.7984 2.03834 19.6481 2.08615 19.4774 2.02468C19.4023 1.99736 19.3271 1.94956 19.2589 1.90175C16.5953 0.0850947 13.0576 0.4334 10.8722 2.79642C9.12384 4.68819 8.62528 6.92145 9.47215 9.35276C10.3122 11.7704 12.0742 13.2251 14.6079 13.628C18.2003 14.2086 21.5467 11.668 22.0043 8.08247C22.2297 6.30679 21.7858 4.70185 20.7067 3.27448C20.6726 3.22668 20.6316 3.1857 20.5974 3.13789C20.4609 2.94667 20.4813 2.72129 20.6452 2.59153C20.8092 2.46177 21.0345 2.48226 21.1848 2.66666C21.5809 3.14472 21.9019 3.66377 22.1614 4.23062C22.5985 5.17992 22.8239 6.19069 22.817 7.24244Z"
                  fill="#AB0000" />
                <path
                  d="M15.5852 9.07982C14.5607 9.07982 13.7275 8.25345 13.7275 7.23585C13.7275 6.21825 14.5744 5.37822 15.5852 5.38505C16.5959 5.39188 17.4223 6.21825 17.4291 7.22902C17.436 8.24662 16.6096 9.07982 15.5852 9.07982ZM15.5715 8.32175C16.1793 8.32858 16.6711 7.84368 16.6711 7.24268C16.6711 6.64168 16.1793 6.14313 15.5783 6.14313C14.991 6.14313 14.4993 6.62802 14.4924 7.21536C14.4856 7.82319 14.9637 8.31492 15.5715 8.32175Z"
                  fill="#AB0000" />
              </svg> */}
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0052 29.9897C7.71975 29.9897 1.50982 24.7932 0.237849 17.637C0.0775595 16.7373 0 15.8945 0 15.062C0 14.6225 0.274043 14.3123 0.661841 14.302C1.07549 14.302 1.34953 14.607 1.35988 15.0569C1.49948 20 3.65564 23.8573 7.76112 26.5253C9.89659 27.9111 12.3113 28.6143 14.938 28.6143C15.2999 28.6143 15.667 28.5988 16.0341 28.5729C21.7839 28.1644 26.6598 24.1107 28.1748 18.485C29.1417 14.8914 28.5988 11.1324 26.6443 7.91106C24.6949 4.69493 21.6184 2.4819 17.9886 1.67528C16.9493 1.44778 15.91 1.32885 14.9069 1.32885C12.3992 1.32885 9.96898 2.04757 7.68873 3.46432C7.56463 3.54188 7.44571 3.62461 7.32678 3.70734C7.24923 3.75905 7.20786 3.82627 7.18718 3.86763L6.95967 4.22958L7.3423 4.40021C7.39917 4.42089 7.45088 4.44157 7.51293 4.45191L7.75078 4.49328C8.17477 4.56567 8.59876 4.63289 9.02792 4.7001C9.27094 4.7363 9.46226 4.84488 9.57601 5C9.67942 5.13961 9.71562 5.31541 9.68459 5.51189C9.63289 5.84281 9.35367 6.05998 8.97622 6.05998C8.91934 6.05998 8.86246 6.05481 8.80559 6.04447C7.53361 5.83764 6.26163 5.63599 4.98966 5.43433C4.45708 5.3516 4.25026 5.06722 4.32782 4.53981C4.5243 3.2575 4.72079 1.97518 4.92761 0.692864C4.99483 0.274043 5.25336 0.0258531 5.61531 0.0258531C5.6515 0.0258531 5.6877 0.0258531 5.72389 0.0310238C6.10135 0.0775594 6.32885 0.423992 6.27715 0.873837C6.25129 1.08583 6.2151 1.29266 6.18408 1.50465L6.1272 1.87177C6.04964 2.14581 6.09617 2.33195 6.26163 2.45605L6.35471 2.52327L6.48397 2.52844C6.62358 2.52844 6.73733 2.45605 6.84592 2.38366C8.43847 1.36505 9.94829 0.718718 11.4891 0.398139C12.7766 0.134436 14.0383 0 15.2379 0C19.7156 0 23.5729 1.89762 26.7011 5.63599C28.8573 8.21613 30 11.4478 30 14.9793C30 22.001 25.0207 28.1696 18.1593 29.6536C17.12 29.8759 16.06 29.9897 15.0052 29.9897Z" fill="#AB0000" />
                <path d="M14.9897 15.5738C14.6484 15.5738 14.3744 15.2997 14.3744 14.9584V4.74128C14.3744 4.40002 14.6484 4.12598 14.9897 4.12598C15.331 4.12598 15.605 4.40002 15.605 4.74128V14.9533C15.605 15.2997 15.331 15.5738 14.9897 15.5738Z" fill="#AB0000" />
                <path d="M20.4498 20.1757C20.2119 20.4187 19.8241 20.4239 19.5811 20.186L14.7052 15.4497C14.4622 15.2119 14.457 14.8241 14.6949 14.5811C14.9327 14.338 15.3205 14.3329 15.5635 14.5707L20.4394 19.307C20.6773 19.5397 20.6824 19.9327 20.4498 20.1757Z" fill="#AB0000" />
                <path d="M14.9897 16.0497C15.5437 16.0497 15.9928 15.6006 15.9928 15.0466C15.9928 14.4926 15.5437 14.0435 14.9897 14.0435C14.4357 14.0435 13.9866 14.4926 13.9866 15.0466C13.9866 15.6006 14.4357 16.0497 14.9897 16.0497Z" fill="#AB0000" />
              </svg>
            </div>
            <div
              className="card-header bg-white border-0 d-flex justify-content-between align-items-center rounded-lg  mt-4">
              <h5 className="mb-0">Our Service</h5>
              {/*
          <Link to="#" className="text-decoration-none">
          <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#004457" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"
              d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          </Link> */}
            </div>
            <div className="card-body bg-white mb-4">
              {servicesList.map((serviceItem, index) => (
                <div key={"serviceList" + index} className="d-flex mb-2">

                  <span className="badge badge-pill blog-category-badge p-3 rounded-pill" style={{
                    ...getStyles(hoverStates[index]), backgroundColor: serviceItem.slug === slug ? "#004457" :
                      getStyles(hoverStates[index]).backgroundColor, color: serviceItem.slug === slug ? "white" :
                        getStyles(hoverStates[index]).color,
                  }} onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onClick={() => handleCategoryClick(serviceItem.slug)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleCategoryClick(serviceItem.slug);
                      }
                    }}
                  >
                    {serviceItem.title} <i className="fa-solid fa-arrow-right-long"></i>
                  </span>

                </div>
              ))}
            </div>
            <img className="bg_image_detail" src="/image/detail_side.png" alt="" />
          </div>

          {/* <!-- Tag Cloud Card --> */}
          <div className="card second_card border-0 shadow-sm w-100 cutPieceRight">
            <div className="side_up_icon">

              {/* <img src="/image/calender_new.svg" alt="" /> */}

              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 50 50">

                <defs style={{ fill: "#ab0000" }}>
                  {/* <style>
                     .st0 {
                       fill: #ab0000;}
                   </style> */}
                </defs>
                <path className="st0" d="M11.9,33.7c.8-.2,1.4.5,1.2,1.2s0,0,0,0l-4.1,4.1s0,0,0,0c-.2,0-.5,0-.7,0-.4,0-2.1-1.8-2.2-2.2s-.2-1,.3-1.2c.9-.5,1.6.7,2.2,1.2.2,0,2.8-3.1,3.4-3.2Z" />
                <circle className="st0" cx="28.2" cy="43" r=".9" />
                <circle className="st0" cx="44.2" cy="13.9" r=".9" />
                <path className="st0" d="M44.2,5.1h-4.3v-1.2c0-1.6-1.3-2.9-2.9-2.9s-2.9,1.3-2.9,2.9v1.2h-15.4v-1.2c0-1.6-1.3-2.9-2.9-2.9s-2.9,1.3-2.9,2.9v1.2h-3.9c-2.6,0-4.8,2.1-4.8,4.8v16.3c0,.5.4.9.9.9s.9-.4.9-.9v-11.4h33.8c.5,0,.9-.4.9-.9s-.4-.9-.9-.9H6v-3c0-1.6,1.3-2.9,2.9-2.9h3.9v1c0,1.6,1.3,2.9,2.9,2.9s1.5-.3,2.1-.9c.5-.5.9-1.3.9-2.1v-1h15.4v1c0,1.6,1.3,2.9,2.9,2.9s1.5-.3,2.1-.9c.5-.5.9-1.3.9-2.1v-1h4.3c1.6,0,2.9,1.3,2.9,2.9v35.6c0,.9-.7,1.6-1.6,1.6h-.1c-1,0-1.7-.8-1.7-1.7v-2c0-.7-.6-1.3-1.3-1.3h-11.4c-.5,0-.9.4-.9.9s.4.9.9.9h10.8v1.4c0,.6.2,1.2.5,1.7H4.5c-.9,0-1.6-.7-1.6-1.6v-1.4h21c.5,0,.9-.4.9-.9s-.4-.9-.9-.9h-9.3c1.7-1.4,2.8-3.6,2.8-5.9,0-4.3-3.5-7.8-7.8-7.8s-7.8,3.5-7.8,7.8,1.1,4.5,2.8,5.9h-2.2c-.7,0-1.3.6-1.3,1.3v2c0,1.9,1.6,3.5,3.5,3.5h41s0,0,0,0h0s0,0,0,0h0c1.9,0,3.5-1.6,3.5-3.5V9.9c0-2.6-2.1-4.8-4.8-4.8ZM16.6,8c0,.5-.4.9-.9.9s-.9-.4-.9-.9V3.9c0-.5.4-.9.9-.9s.9.4.9.9v4.1ZM37.8,8c0,.5-.4.9-.9.9s-.9-.4-.9-.9V3.9c0-.5.4-.9.9-.9s.9.4.9.9v4.1ZM3.6,36.3c0-3.3,2.7-6,6-6s6,2.7,6,6-2.4,5.7-5.5,5.9h-.9c-3.1-.2-5.5-2.8-5.5-5.9Z" />
                <path className="st0" d="M12.5,26.9c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM12.5,21.4c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
                <path className="st0" d="M22.2,26.9c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM22.2,21.4c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
                <path className="st0" d="M31.9,26.9c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM31.9,21.4c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
                <path className="st0" d="M41.6,26.9c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM41.6,21.4c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
                <path className="st0" d="M22.2,36.6c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM22.2,31.1c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
                <path className="st0" d="M31.9,36.6c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM31.9,31.1c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
                <path className="st0" d="M41.6,36.6c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6,3.6,1.6,3.6,3.6-1.6,3.6-3.6,3.6ZM41.6,31.1c-1,0-1.9.8-1.9,1.9s.8,1.9,1.9,1.9,1.9-.8,1.9-1.9-.8-1.9-1.9-1.9Z" />
              </svg>

            </div>
            <div
              className="card-header bg-white border-0 d-flex justify-content-between align-items-center rounded-lg mt-4">
              <h5 className="mb-0">Book Your Free Demo</h5>
              {/*
          <Link to="#" className="text-decoration-none">
          <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#004457" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
          </svg>
          </Link> */}
            </div>
            <form className="w-100 d-block mb-4" id="appointmentForm">
              <div className="appoint_form_box">
                <div className="row p-0 m-0">
                  <div className="col-md-12  input_box">
                    <input type="text" className="form-control input form-bg" id="firstName" placeholder="First Name"
                      required />
                  </div>
                  <div className="col-md-12 input_box ">
                    <input type="text" className="form-control input form-bg" id="lastName" placeholder="Last Name" />
                  </div>
                  <div className="col-md-12 input_box">
                    <input type="tel" className="form-control input form-bg" id="phone" placeholder="Phone" required />
                  </div>
                  <div className="col-md-12 input_box">
                    <input type="email" className="form-control input form-bg" id="email" placeholder="Email" required />
                  </div>

                  <div className="col-md-12 input_box">
                    <select className=" form-control input form-bg" aria-label="Default select example" id="option">
                      <option selected >Please Choose an option</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-md-12 input_box">
                    <textarea className="form-control input form-bg" id="message" ></textarea>
                  </div>
                  <div className="col-md-12 input_box">
                    <div className="g-recaptcha" data-sitekey="6LfwvZcqAAAAAMGyPVAK9I7Lzd6is46YGys2gyJV"
                      data-callback="onRecaptchaSuccess"></div>
                  </div>
                  <div className="col-md-12  btn_box">
                    <button className="make_appoint_btn ">
                      Make an Appointment{" "}
                      <img src="image/iconArrow.svg" alt="" loading="lazy" />
                    </button>
                  </div>

                </div>
              </div>
            </form>
            <img className="bg_image_detail" src="/image/detail_side.png" alt="" />

          </div>
        </div>
      </div>
    </div >
  );
};

export default Servicemid;
