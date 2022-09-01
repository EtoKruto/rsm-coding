import React from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "300px",
};

export default function GMap({ coord }: any) {
  const center = {
    lat: Number(coord.lat),
    lng: Number(coord.lng),
  };
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
      <MarkerF position={center} />{" "}
    </GoogleMap>
  );
}
