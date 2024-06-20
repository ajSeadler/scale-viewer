import React from "react";
import "../styles/InteractiveInterface.css";

const InteractiveInterface = () => {
  return (
    <div className="interactive-interface">
      <h2>Interactive Interface</h2>
      <p>Use our interactive tool to visualize scales and chords on a virtual instrument. Features include:</p>
      <ul>
        <li><strong>Scale Visualization:</strong> See the notes of different scales on a virtual keyboard or fretboard.</li>
        <li><strong>Chord Finder:</strong> Identify chords and their positions on your instrument.</li>
        <li><strong>Interactive Learning:</strong> Learn about the relationships between different scales and chords.</li>
      </ul>
    </div>
  );
};

export default InteractiveInterface;
