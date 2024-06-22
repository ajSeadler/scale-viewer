import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faGuitar,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import "../styles/WelcomeComponent.css";

const WelcomeComponent = () => {
  return (
    <div className="welcome-container">
      <h1>The Circle of Fifths</h1>
      <h2>visualizer</h2>
      <p>
        Click on a key on the circle of fifths{" "}
        <ScrollLink to="circle" smooth={true} duration={500}>
          below
        </ScrollLink>{" "}
        to get started.
      </p>

      <div className="features">
        <RouterLink to="/discover-scales" className="feature-link">
          <div className="feature">
            <FontAwesomeIcon icon={faMusic} className="feature-icon" />
            <h3>Discover Scales</h3>
            <p>
              Explore a variety of musical scales and modes including major,
              minor, pentatonic, and more.
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/view-chords" className="feature-link">
          <div className="feature">
            <FontAwesomeIcon icon={faGuitar} className="feature-icon" />
            <h3>View Chords</h3>
            <p>
              Learn about chords associated with each scale and their degrees.
            </p>
          </div>
        </RouterLink>
        <ScrollLink
          to="circle"
          smooth={true}
          duration={500}
          className="feature-link"
        >
          <div className="feature">
            <FontAwesomeIcon icon={faChartLine} className="feature-icon" />
            <h3>Interactive Interface</h3>
            <p>
              Click on a key to visualize the notes and chords in the selected
              scale.
            </p>
          </div>
        </ScrollLink>
      </div>

      <Element name="circle" id="circle">
        {/* Your circle of fifths component or content goes here */}
      </Element>
    </div>
  );
};

export default WelcomeComponent;
