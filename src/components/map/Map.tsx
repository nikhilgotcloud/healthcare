import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import './map.css' 

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius:'3rem',
};


const center = {
  lat: 42.6526, 
  lng: -73.7562, 
};

const GoogleMapComponent: React.FC = () => {
  return (
    <div className="mb-5 w-100 google_map_box">
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" >
      <GoogleMap mapContainerStyle={containerStyle} mapContainerClassName="google_map_container" center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
