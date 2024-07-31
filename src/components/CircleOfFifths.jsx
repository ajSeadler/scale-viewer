// src/components/CircleOfFifths.js
import React from "react";
import "../styles/CircleOfFifths.css";

const keys = [
  { major: "C", minor: "Am", angle: -90, sharps: 0, flats: 0 },
  { major: "G", minor: "Em", angle: -60, sharps: 1, flats: 0 },
  { major: "D", minor: "Bm", angle: -30, sharps: 2, flats: 0 },
  { major: "A", minor: "F#m", angle: 0, sharps: 3, flats: 0 },
  { major: "E", minor: "C#m", angle: 30, sharps: 4, flats: 0 },
  { major: "B", minor: "G#m", angle: 60, sharps: 5, flats: 0 },
  { major: "F#", minor: "D#m", angle: 90, sharps: 6, flats: 0 },
  { major: "Db", minor: "Bbm", angle: 120, sharps: 0, flats: 5 },
  { major: "Ab", minor: "Fm", angle: 150, sharps: 0, flats: 4 },
  { major: "Eb", minor: "Cm", angle: 180, sharps: 0, flats: 3 },
  { major: "Bb", minor: "Gm", angle: 210, sharps: 0, flats: 2 },
  { major: "F", minor: "Dm", angle: 240, sharps: 0, flats: 1 },
];

const CircleOfFifths = ({ selectedKey, setSelectedKey }) => {
  const radius = 90; // Radius of the circle
  const center = 100; // Center of the SVG viewBox
  const sliceAngle = 360 / keys.length; // Angle of each slice

  return (
    <div className="circle-of-fifths">
      <svg viewBox="0 0 200 200" className="circle-svg">
        {keys.map((key, index) => {
          // Calculate angles for pie slices
          const startAngle = (index * sliceAngle - 90) * (Math.PI / 180);
          const endAngle = ((index + 1) * sliceAngle - 90) * (Math.PI / 180);

          // Define points for the path
          const x1 = center + radius * Math.cos(startAngle);
          const y1 = center + radius * Math.sin(startAngle);
          const x2 = center + radius * Math.cos(endAngle);
          const y2 = center + radius * Math.sin(endAngle);

          // Midpoint for placing text
          const midAngle = (startAngle + endAngle) / 2;
          const textX = center + (radius - 25) * Math.cos(midAngle);
          const textY = center + (radius - 25) * Math.sin(midAngle);
          const minorTextX = center + (radius - 40) * Math.cos(midAngle);
          const minorTextY = center + (radius - 40) * Math.sin(midAngle);

          return (
            <g key={index} onClick={() => setSelectedKey(key.major)}>
              {/* Pie Slice */}
              <path
                d={`M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`}
                className={`key-slice ${
                  key.major === selectedKey ? "active" : ""
                }`}
              />

              {/* Major Key Text */}
              <text
                x={textX}
                y={textY}
                className={`key-text ${
                  key.major === selectedKey ? "active" : ""
                }`}
              >
                {key.major}
              </text>

              {/* Minor Key Text */}
              <text
                x={minorTextX}
                y={minorTextY}
                className={`key-text minor-text ${
                  key.minor === selectedKey ? "active" : ""
                }`}
              >
                {key.minor}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default CircleOfFifths;
