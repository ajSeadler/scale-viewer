import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faGuitar, faChartLine } from '@fortawesome/free-solid-svg-icons';
import "../styles/WelcomeComponent.css";

const WelcomeComponent = () => {
  return (
    <div className="welcome-container">
      <h1>The circle of fifths</h1>
      <p>Click on a key on the circle of fifths <a href="#circle">below</a> to get started.</p>

      <div className="features">
        <div className="feature">
          <FontAwesomeIcon icon={faMusic} className="feature-icon" />
          <h3>Discover Scales</h3>
          <p>Explore a variety of musical scales and modes including major, minor, pentatonic, and more.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faGuitar} className="feature-icon" />
          <h3>View Chords</h3>
          <p>Learn about chords associated with each scale and their degrees.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faChartLine} className="feature-icon" />
          <h3>Interactive Interface</h3>
          <p>Click on a key to visualize the notes and chords in the selected scale.</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
