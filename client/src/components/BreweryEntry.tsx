import { useState } from "react";
import BreweryDetails from "./BreweryDetails";

function removeURLWWW(str: string) {
  return str
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .replace("/", "");
}
function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function BreweryEntry({ brewery, index }: any) {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }
  const coordintates = {
    lat: brewery.latitude,
    lng: brewery.longitude,
  };

  return (
    <div className="flex-col">
      <div className="ml-20">
        <div className="flex items-center">
          <div className="text-3xl">
            <h1 className="mr-4">{index + 1}</h1>
          </div>
          <div
            className="flex-col items-start text-left border-2 border-black rounded-3xl p-4 m-4 transition-transform duration-500 hover:scale-110 active:scale-100"
            onClick={toggle}
          >
            <div className="text-3xl font-bold mb-5">
              {capitalizeFirstLetter(brewery.name)}
            </div>
            <div>
              <strong>Type:</strong>{" "}
              {capitalizeFirstLetter(brewery.brewery_type)}
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
              <strong>Website: </strong>{" "}
              {brewery.website_url ? (
                <a
                  className="text-blue-500 hover:text-sky-400"
                  href={brewery.website_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {capitalizeFirstLetter(
                    removeURLWWW(brewery.website_url) ?? brewery.website_url
                  )}
                </a>
              ) : (
                "Not Available"
              )}
            </div>
          </div>
        </div>
      </div>

      {isOpened ? (
        <div className="bg-purple-400/75 h-100 rounded-3xl ml-32 mr-24">
          <BreweryDetails
            brewery={brewery}
            coord={coordintates}
            setIsOpened={setIsOpened}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default BreweryEntry;
