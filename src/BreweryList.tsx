import React, { useState, useEffect } from "react";
import BreweryEntry from "./BreweryEntry";

function BrewerList({ databaseInfo }: any) {
  return (
    <div className="brewerList">
      {databaseInfo.length > 0 ? (
        databaseInfo.map((brewery: { id: any }) => (
          <BreweryEntry key={brewery.id} brewery={brewery} />
        ))
      ) : (
        <h1>^ Search for a Brewery ^</h1>
      )}
    </div>
  );
}

export default BrewerList;
