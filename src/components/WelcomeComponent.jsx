import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faGuitar, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "../styles/WelcomeComponent.css";

const WelcomeComponent = () => {
  return (
    <div className="welcome-container">
      <h1>The Circle of Fifths</h1><h2>visualizer</h2>
      <p>Click on a key on the circle of fifths <a href="#circle">below</a> to get started.</p>
      
      <div className="features">
      
        <Link to="/discover-scales" className="feature-link">
          <div className="feature">
            <FontAwesomeIcon icon={faMusic} className="feature-icon" />
            <h3>Discover Scales</h3>
            <p>Explore a variety of musical scales and modes including major, minor, pentatonic, and more.</p>
          </div>
        </Link>
        <Link to="/view-chords" className="feature-link">
          <div className="feature">
            <FontAwesomeIcon icon={faGuitar} className="feature-icon" />
            <h3>View Chords</h3>
            <p>Learn about chords associated with each scale and their degrees.</p>
          </div>
        </Link>
        <Link to="/interactive-interface" className="feature-link">
          <div className="feature">
            <FontAwesomeIcon icon={faChartLine} className="feature-icon" />
            <h3>Interactive Interface</h3>
            <p>Click on a key to visualize the notes and chords in the selected scale.</p>
          </div>
        </Link>
      </div>
      

    </div>
  );
};

export default WelcomeComponent;
