import React, { useState } from "react";
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
    <div>
      <form
        className="flex space-x-2 justify-center"
        onSubmit={handleCitySearch}
      >
        <input
          className="text-black w-full rounded-lg border-gray-300 pl-3 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-xlg"
          placeholder="Input City..."
          value={userInput}
          onChange={handleChange}
        />
        <button
          className=" rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
          type="submit"
        >
          {"Search"}
        </button>
      </form>
    </div>
  );
};

export default BrewerySearch;
