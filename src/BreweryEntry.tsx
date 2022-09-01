import React from "react";
import GMap from "./GMap";

function removeURLWWW(str: string) {
  return str
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .replace("/", "");
}
function BreweryEntry({ brewery }: any) {
  const coordintates = {
    lat: brewery.latitude,
    lng: brewery.longitude,
  };

  return (
    <div
      className="breweryEntry"
      style={{ display: "flex", justifyContent: "space-around", margin: 100 }}
    >
      <div className="info-breweryEntry">
        <div className="title-breweryEntry">
          <h1>{brewery.name}</h1>
        </div>
        <div
          className="description-breweryEntry"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p style={{ fontWeight: "normal" }}>
            {" "}
            <strong>Type:</strong> {brewery.brewery_type}
          </p>
          <p>
            <strong>Address:</strong>{" "}
            {brewery.street +
              ", " +
              brewery.city +
              ", " +
              brewery.country +
              ", " +
              brewery.postal_code}
          </p>
          <p>
            <strong>URL: </strong>{" "}
            {brewery.website_url ? (
              <a href={brewery.website_url} target="_blank" rel="noreferrer">
                {removeURLWWW(brewery.website_url) ?? brewery.website_url}
              </a>
            ) : (
              "Not Available"
            )}
          </p>
        </div>
      </div>
      <div className="map-breweryEntry">
        <GMap coord={coordintates} />
      </div>
    </div>
  );
}

export default BreweryEntry;
// longtitude={brewery.longtitude} latitude={brewery.latitude}
