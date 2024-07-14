// src/components/NavBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <ul>
          <li>
            <Link to="Home/">Home</Link>
          </li>
          <li>
            <Link to="/">MarketPlace</Link>
          </li>
        </ul>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
