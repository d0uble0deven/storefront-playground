// src/pages/MarketPlace.js
import React from "react";

import Card from "../components/Card";

function MarketPlace({ data }) {
  console.log(" MarketPlace - data: ", data);
  return (
    <div className="card-list">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}

export default MarketPlace;
