import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

// import Card from "./components/Card";
import MockData from "./MockData.json";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";

console.log("mockData: ", MockData);

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating data loading
    setData(MockData);
  }, []);

  return (
    <div className="app-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MarketPlace data={data} />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
      <Canvas></Canvas>
    </div>
  );
}

export default App;
