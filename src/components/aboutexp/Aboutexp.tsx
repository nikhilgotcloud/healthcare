import React from 'react'
import './aboutexp-style.css'

const Aboutexp = () => {
    const headStyle: React.CSSProperties = {
        backgroundColor: "#004457",
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
          image: "./image/experience/group0.svg",
          
          text: "Rapid Scalability",
          description: "Our services are designed to accommodate your growing needs, ensuring seamless scalability without compromising quality or efficiency. As your practice expands, we adapt to support your increasing demands, delivering uninterrupted billing and coding solutions.",
        },
        {
          id: 2,
          image: "./image/experience/group1.svg",
        
          text: "Better Results",
          description: "We are committed to achieving exceptional results for our clients. With our expertise and industry knowledge, we optimize your revenue cycle, improve collections, and minimize denials, ultimately enhancing your financial performance and maximizing profitability.",
        },
        {
          id: 3,
          image: "./image/experience/group2.svg",
          
          text: "Transparency",
          description: "We believe in open and honest communication. We provide transparent reporting, giving you real-time insights into your revenue cycle, claims status, and financial performance. You can trust us to keep you informed and updated throughout the billing process.",
        },
        {
          id: 4,
          image: "./image/experience/group3.svg",
          
          text: "High-Quality Services",
          description: "Our team consistently delivers high-quality services. From accurate coding to timely claim submissions, we prioritize precision and compliance. You can rely on us to handle your medical billing and coding with meticulous attention to detail, ensuring the highest quality standards.",
        },
      ];
  return (
    <div>
        <div className="row">
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

        <div className="container my-2 mainexp ">
      <div className="row">
        {cardData.map((card) => (
          <div key={card.id} className="col-12 col-md-6 col-lg-3 mb-4 my-4">
            <div className="why-feature ">
              <div className="box-number text-dark">{card.id}</div>
              <div className="box-icon justify-content-center mb-3">
                <img src={card.image} alt="" className="card-image" />
              </div>
              <div className="divider mb-3 w-75 mx-4"></div>
              
              <h5 className="mb-2 text-center card-text">{card.text}</h5>
              <p className="text-muted mb-2 px-2 small text-center card-description py-2">
              {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Aboutexp