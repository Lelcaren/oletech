import React from "react";
import Logo from "../../assets/logo.png"; // Adjust the path based on your project structure
import "./DataWaveLogo.css";

const DataWaveLogo = () => {
  return (
    <div className="logo">
      <img src={Logo} alt="OleTech Logo" className="logo-image" />
    
    </div>
  );
};

export default DataWaveLogo;
