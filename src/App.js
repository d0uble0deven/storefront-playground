import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import Card from "./Card";
import MockData from "./MockData.json";

console.log("mockData: ", MockData);

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating data loading
    setData(MockData);
  }, []);

  return (
    <div className="app-container">
      <Canvas></Canvas>
      <div className="card-list">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
