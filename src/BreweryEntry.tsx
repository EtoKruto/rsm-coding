import React, { useState } from "react";
import GMap from "./GMap";
import BreweryDetails from "./BreweryDetails";

function removeURLWWW(str: string) {
  return str
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .replace("/", "");
}
function BreweryEntry({ brewery, index }: any) {
  const [isOpened, setIsOpened] = useState(false);

  console.log("isOpened", isOpened);
  console.log("brewery", brewery);
  console.log("index", index);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }
  const coordintates = {
    lat: brewery.latitude,
    lng: brewery.longitude,
  };

  return (
    <div
      className="breweryEntry"
      onClick={toggle}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="info-breweryEntry"
        style={{
          marginLeft: "5em",
        }}
      >
        <div
          className="Container-breweryEntry"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "3em",
          }}
        >
          <div className="number-breweryEntry">
            <h1 style={{ marginRight: "2em" }}>{index + 1}</h1>
          </div>
          <div
            className="description-breweryEntry"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                marginBottom: "1em",
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: "1.8em" }}>
                {brewery.name}
              </div>
            </div>

            <div style={{ fontWeight: "normal" }}>
              {" "}
              <strong>Type:</strong> {brewery.brewery_type}
            </div>
            <div>
              <strong>Address:</strong>{" "}
              {brewery.street +
                ", " +
                brewery.city +
                ", " +
                brewery.country +
                ", " +
                brewery.postal_code}
            </div>
            <div>
              <strong>URL: </strong>{" "}
              {brewery.website_url ? (
                <a href={brewery.website_url} target="_blank" rel="noreferrer">
                  {removeURLWWW(brewery.website_url) ?? brewery.website_url}
                </a>
              ) : (
                "Not Available"
              )}
            </div>
          </div>
        </div>
      </div>

      {isOpened ? (
        <div className="boxContent">
          <BreweryDetails brewery={brewery} coord={coordintates} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default BreweryEntry;
// longtitude={brewery.longtitude} latitude={brewery.latitude}
