import React from "react";
import { Link } from "react-router-dom";
import "../styles/DiscoverScales.css";

const DiscoverScales = () => {
  return (
    <div className="discover-scales">
      <h2>Discover Scales</h2>
      <p>
        Explore a variety of musical scales and modes. Understand their
        structures, intervals, and uses in different musical contexts. Scales
        include:
      </p>
      <ul>
        <li>
          <strong>Major Scale:</strong> A seven-note scale with a happy and
          bright sound.
        </li>
        <li>
          <strong>Minor Scale:</strong> A seven-note scale with a sadder and
          darker tone.
        </li>
        <li>
          <strong>Pentatonic Scale:</strong> A five-note scale commonly used in
          blues and rock music.
        </li>
        <li>
          <strong>Modes:</strong> Different types of scales derived from the
          major scale, each with unique characteristics.
        </li>
      </ul>
      <div className="centered-button">
        <Link to="/" className="back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default DiscoverScales;
