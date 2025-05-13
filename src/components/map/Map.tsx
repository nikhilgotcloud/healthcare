import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import './map.css'

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: '3rem',
};


const center = {
  lat: 42.6437491,
  lng: -73.7466987,
};

const GoogleMapComponent: React.FC = () => {
  return (
    <>
  <div className="container">

 
      <div className="mb-5 w-100 google_map_box">
        {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" >
      <GoogleMap mapContainerStyle={containerStyle} mapContainerClassName="google_map_container" center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript> */}
        <iframe className="h-100 w-100" title="google_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.830692759013!2d-73.74669871431698!3d42.6437490968266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de098b59cce4d3%3A0x55e61a7748c24619!2s600%20Broadway%20200%205035%2C%20Albany%2C%20NY%2012207%2C%20USA!5e0!3m2!1sen!2sin!4v1747157832467!5m2!1sen!2sin" loading="lazy"></iframe>
      </div>
       </div>
    </>

  );
};

export default GoogleMapComponent;
