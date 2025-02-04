import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "70%",
  height: "400px",
};


const center = {
  lat: 42.6526, 
  lng: -73.7562, 
};

const GoogleMapComponent: React.FC = () => {
  return (
    <div className="rounded-lg shadow-lg mx-5 mb-4">
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
