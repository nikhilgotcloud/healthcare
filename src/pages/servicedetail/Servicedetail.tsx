import React, { useEffect } from "react";
import Latestblog from "../../components/latestblog/Latestblog";
import Contacthero from "../../components/contacthero/Contacthero";
import Servicemid from "../../components/servicemid/Servicemid";
import { useParams } from "react-router-dom";

const Servicedetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }

  useEffect(()=>{
    scrollToTop()
  },[slug])
  return (
    <div>

      <Contacthero slug={slug} />
      <Servicemid />
      <Latestblog />

    </div>
  );
};

export default Servicedetail;
