import React, { useState, useRef, useEffect } from "react";
import "./experience-style.css";


interface CardDataType {
  id: number;
  staticImage: string;
  gifImage: string;
  title: string;
  text: string;
  description: string;
}

interface Props {
  getDataShare: CardDataType[];
}
const Expriencecards = ({ getDataShare }: { getDataShare: any[] }) => {

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const cardData = [
    {
      id: 1,
      staticImage: "./image/experience/group0.svg",
      gifImage: "/image/gif/time_mp4.mp4",
      title: "5+",
      text: "Years In Business",
      description: "Lorem Ipsum is simply dummy text of",
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

      title: "130+",
      text: "Total Projects",
      description: "Lorem Ipsum is simply dummy text of",
    },
    {
      id: 3,
      staticImage: "/image/experience/group2.svg",
      // gifImage: "/image/experience/group2.svg",
      gifImage: "./image/gif/HappyClients_mp4.mp4",

      title: "65+",
      text: "Happy Clients",
      description: "Lorem Ipsum is simply dummy text of",
    },
    {
      id: 4,
      staticImage: "/image/experience/google_Review_new.svg",
      // gifImage: "./image/gif/new_video_1.mp4",
      gifImage: "/image/gif/new_video_1.mp4",

      title: "45+",
      text: "Google Reviews",
      description: "Lorem Ipsum is simply dummy text of",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredAllIndex, setHoveredAllIndex] = useState<number[]>([]);

  const [shareData, setShareData] = useState<CardDataType[]>(getDataShare);


  const handelVideoPlayAndPause = (event: any, index: number) => {
    const video: any = videoRefs.current[index];
    setHoveredIndex(index);

    setHoveredAllIndex((prev) => [...prev, index])
    video?.play();
    video.currentTime = 0
    // checkLastVideoIsCompleted(index)
    setTimeout(() => {
      video?.pause();
    }, 1000);
  }

  const checkLastVideoIsCompleted = (currentIndex: number) => {
    console.log(currentIndex, hoveredAllIndex);
    if (hoveredAllIndex.length > 0) {
      if ((currentIndex === hoveredAllIndex[hoveredAllIndex.length - 1])) {
        const video: any = videoRefs.current[currentIndex];
        console.log(currentIndex , 1111)
        setTimeout(() => {
          video?.pause();
        }, 1000);
      } else {
        const video: any = videoRefs.current[hoveredAllIndex.length - 2];
        console.log(hoveredAllIndex.length - 2 , 1111+"else")
        if( !video?.ended) video?.play();
        
      }
    } else {
      const video: any = videoRefs.current[currentIndex];
      console.log(currentIndex , 2222+"else")

      setTimeout(() => {
        video?.pause();
      }, 1000);
    }

  }



  const handelViodePlayWhenMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if(!video?.ended){
      video?.play();
    }
    

  }

  useEffect(() => {
    // console.log(hoveredAllIndex)
    setShareData(getDataShare)
    
  }, [hoveredAllIndex])

  return (
    <div className="container my-4 mainexp">
      <div className="row">
        {shareData.map((card, index) => (
          <div
            key={card.id}
            className="col-12 col-md-6 col-lg-3 mb-4 " 
            onMouseEnter={(event: any) => {
              handelVideoPlayAndPause(event, index)
            }

            }
            onMouseLeave={() => {
              handelViodePlayWhenMouseLeave(index)

            }
            }
          >
            <div className="why-feature new_feature position-relative cutPieceRight">
              <div className="box-number text-dark">{card.id}</div>
              <div className="box-icon justify-content-center mb-3">
                {/* {hoveredIndex === index ? (
                  <video autoPlay ={true} loop muted className="card-video">
                    <source src={card.gifImage} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={card.staticImage} alt="" className="card-image" />
                )} */}

                {/* <video ref={(el: any) => (videoRefs.current[index] = el)} id={`video${index}`}   muted className={hoveredIndex === index  ? ' card-video d-block' : ' card-video d-none'} poster={card.staticImage}> */}

                <video ref={(el: any) => (videoRefs.current[index] = el)} id={`video${index}`} muted className="card-video d-block" poster={card.staticImage}>

                  <source src={card.gifImage} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* <img id={`image${index}`} src={card.staticImage} alt="" className={hoveredIndex === index ? ' card-image d-none' : ' card-image d-block'} /> */}

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
                <img src="/image/bg_card.svg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expriencecards;
