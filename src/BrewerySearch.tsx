import React, { useState, useEffect } from "react";
import axios from "axios";

function convertStringToUnderscore(str: string) {
  return str.replace(/ /g, "_").toLowerCase();
}

const BrewerySearch = ({ setDatabaseInfo }: any) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleCitySearch = (e: any) => {
    e.preventDefault();
    const city = convertStringToUnderscore(userInput);

    axios
      .get(`http://192.168.1.25:3001/breweries?city=${city}`)
      .then((response) => {
        if (response.data.length < 1) {
          alert("No breweries found, try another search");
          setDatabaseInfo([]);
        } else {
          setDatabaseInfo(response.data);
        }
        setUserInput("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="brewerySearch">
      <form className="breweryForm" onSubmit={handleCitySearch}>
        <input
          placeholder="Input City..."
          value={userInput}
          onChange={handleChange}
        />
        <button type="submit">{"Search"}</button>
      </form>
    </div>
  );
};

export default BrewerySearch;
