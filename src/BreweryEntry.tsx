import React, { useState, useEffect } from "react";

function BreweryEntry({ brewery }: any) {
  return (
    <div className="breweryEntry">
      <h1>{brewery.name}</h1>
      <h3>Type: {brewery.brewery_type}</h3>
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
      <a href="url">{brewery.website_url}</a>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default BreweryEntry;
