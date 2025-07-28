import React from "react";
import Lottie from "lottie-react";
import animationData from "./animation.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="brand">
        <img src="/sooru-newlogo-white.svg" alt="Spacesync Logo" className="logo" />
        <h2 className="brand-name">Spacesync.ai</h2>
      </div>
      <div className="animation-container">
        <Lottie animationData={animationData} loop={true} />
        <h1 className="title">Website Under Construction</h1>
      </div>
    </div>
  );
}

export default App;
