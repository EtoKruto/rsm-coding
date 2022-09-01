import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "300px",
};

export default function GMap({ coord }: any) {
  const center = {
    lat: Number(coord.lat),
    lng: Number(coord.lng),
  };

  let GMapURL: string;
  if (process.env.REACT_APP_GOOGLE_MAPS_API_KEY) {
    GMapURL = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  } else {
    GMapURL = "undefined";
    throw new Error(
      "REACT_APP_GOOGLE_MAPS_API_KEY environment variable is not set"
    );
  }

  return (
    <LoadScript googleMapsApiKey={GMapURL}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <MarkerF position={center} />{" "}
      </GoogleMap>
    </LoadScript>
  );
}
