// src/components/WelcomeComponent.jsx

import React from "react";
import "../styles/WelcomeComponent.css";

const WelcomeComponent = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to Scale Viewer</h1>

      {/* <div className="features">
        <div className="feature">
          <h3>Discover Scales</h3>
          <p>Explore a variety of musical scales including major, minor, pentatonic, and more.</p>
        </div>
        <div className="feature">
          <h3>View Chords</h3>
          <p>Learn about chords associated with each scale and their degrees.</p>
        </div>
        <div className="feature">
          <h3>Interactive Interface</h3>
          <p>Click on a key to visualize the notes and chords in the selected scale.</p>
        </div>
      </div> */}

      <p className="instruction">Click on a key on the circle of fifths below to get started.</p>
    </div>
  );
};

export default WelcomeComponent;
