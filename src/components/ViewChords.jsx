import React from "react";
import { Link } from "react-router-dom";
import "../styles/ViewChords.css";

const ViewChords = () => {
  return (
    <div className="view-chords">
      <h2>View Chords</h2>
      <p>Learn about the different chords associated with each scale and their degrees. Understand their structures, intervals, and uses in different musical contexts. Chords include:</p>
      <ul>
        <li><strong>Major Chords:</strong> Bright and happy sounding chords built from the 1st, 3rd, and 5th notes of the major scale.</li>
        <li><strong>Minor Chords:</strong> Sadder and darker sounding chords built from the 1st, flat 3rd, and 5th notes of the minor scale.</li>
        <li><strong>Dominant 7th Chords:</strong> Tense and unresolved sounding chords used frequently in blues and jazz.</li>
        <li><strong>Minor 7th Chords:</strong> More complex minor chords that add a flat 7th to the minor triad.</li>
      </ul>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default ViewChords;
