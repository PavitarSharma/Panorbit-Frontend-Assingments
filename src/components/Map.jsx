import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GoogleMapReact from "google-map-react";

const LocationPin = ({ text }) => (
  <div className="pin">
    <LocationOnIcon />
   
    <p className="pin-text">{text}</p>
  </div>
);



const Map = ({ latitude, longitude }) => {

  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: latitude,
    lng: longitude,
  };
  return (
 
    <GoogleMapReact
      bootstrapURLKeys={{ key: import.meta.env.GOOGLE_MAP_API_KEY }}
      defaultCenter={location}
      defaultZoom={11}
    >
      <LocationPin
        lat={location.lat}
        lng={location.lng}
        text={location.address}
      />
    </GoogleMapReact>
  );
};

export default Map;






