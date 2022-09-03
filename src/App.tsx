import BreweryList from "./BreweryList";
import BrewerySearch from "./BrewerySearch";
import { useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import logo from "./assets/Brew_logo.png";

let GMapURL: string;
if (process.env.REACT_APP_GOOGLE_MAPS_API_KEY) {
  GMapURL = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
} else {
  GMapURL = "undefined";
  throw new Error(
    "REACT_APP_GOOGLE_MAPS_API_KEY environment variable is not set"
  );
}
interface dbProps {
  name: string;
  type: string;
  adress: string;
  website: string;
}
function App() {
  const [databaseInfo, setDatabaseInfo] = useState<dbProps[]>([]);

  return (
    <div className="text-center h-100 font-default">
      <nav className="flex items-center justify-between p-20 bg-emerald-500 text-white h-1.5 text-2xl">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="object-contain h-24" />
          <h1 className="pl-10 font-bold text-4xl text-purple-700">Brewery List</h1>
        </div>
        <div>
          <BrewerySearch setDatabaseInfo={setDatabaseInfo} />
        </div>
      </nav>
      <LoadScript googleMapsApiKey={GMapURL}>
        <BreweryList databaseInfo={databaseInfo} />
      </LoadScript>
    </div>
  );
}

export default App;
