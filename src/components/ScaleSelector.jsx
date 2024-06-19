// src/components/ScaleSelector.jsx
import React from "react";
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

const ScaleSelector = ({ setSelectedScale }) => (
  <div className="scale-selector">
    <h2>Select Scale</h2>
    <select onChange={(e) => setSelectedScale(e.target.value)}>
      <option value="">--Choose a Scale--</option>
      {scales.map((scale) => (
        <option key={scale} value={scale}>
          {scale.replace(/([A-Z])/g, " $1").trim()}
        </option>
      ))}
    </select>
  </div>
);

export default ScaleSelector;
