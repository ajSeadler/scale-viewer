import React, { useState } from "react";
import "../styles/ScaleSelector.css";

const scales = [
  "Major",
  "Minor",
  "PentatonicMajor",
  "PentatonicMinor",
  "Blues",
  "HarmonicMinor",
  "MelodicMinor",
  "Dorian",
  "Phrygian",
  "Lydian",
  "Mixolydian",
  "Locrian",
];

const ScaleSelector = ({ setSelectedScale }) => {
  const [showInstruction, setShowInstruction] = useState(false);

  const handleScaleChange = (e) => {
    setSelectedScale(e.target.value);
    setShowInstruction(true); // Show instruction after selecting a scale
  };

  return (
    <>
    <div id="circle"></div>
      <div className="scale-selector">
        <h2>Select Scale</h2>
        <select className="select-dropdown" onChange={handleScaleChange}>
          <option value="">--Choose a Scale--</option>
          {scales.map((scale) => (
            <option key={scale} value={scale}>
              {scale.replace(/([A-Z])/g, " $1").trim()}
            </option>
          ))}
        </select>
      </div>
      {showInstruction && (
        <p className="subtle-instruction animated">Choose a key from the Circle of Fifths</p>
      )}
    </>
  );
};

export default ScaleSelector;
