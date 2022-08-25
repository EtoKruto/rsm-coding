import "./App.css";
import BreweryList from "./BreweryList";
import BrewerySearch from "./BrewerySearch";
import React, { useState } from "react";

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
      <BreweryList databaseInfo={databaseInfo} />
    </div>
  );
}

export default App;
