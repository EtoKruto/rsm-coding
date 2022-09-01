import "./App.css";
import BreweryList from "./BreweryList";
import BrewerySearch from "./BrewerySearch";
import { useState } from "react";
import { LoadScript } from "@react-google-maps/api";

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
    <div className="App">
      <header className="App-header">Brewery List</header>
      <BrewerySearch setDatabaseInfo={setDatabaseInfo} />
      <LoadScript googleMapsApiKey={GMapURL}>
        <BreweryList databaseInfo={databaseInfo} />
      </LoadScript>
    </div>
  );
}

export default App;
