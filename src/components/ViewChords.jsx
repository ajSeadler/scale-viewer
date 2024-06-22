import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { draw } from "vexchords";
import "../styles/ViewChords.css";

const chordData = [
  {
    type: "major",
    name: "Major Chords",
    chart: {
      frets: [
        [-1, 3, 2, 0, 1, 0], // C Major chord frets
      ],
      fingers: [
        [null, 3, 2, null, 1, null], // C Major chord finger positions
      ],
    },
    description:
      "Bright and happy sounding chords built from the 1st, 3rd, and 5th notes of the major scale.",
  },
  {
    type: "minor",
    name: "Minor Chords",
    chart: {
      frets: [
        [0, 0, 2, 2, 1, 0], // A Minor chord frets
      ],
      fingers: [
        [null, null, 2, 3, 1, null], // A Minor chord finger positions
      ],
    },
    description:
      "Sadder and darker sounding chords built from the 1st, flat 3rd, and 5th notes of the minor scale.",
  },
  {
    type: "dominant7",
    name: "Dominant 7th Chords",
    chart: {
      frets: [
        [3, 2, 0, 0, 0, 1], // G7 chord frets
      ],
      fingers: [
        [3, 2, null, null, null, 1], // G7 chord finger positions
      ],
    },
    description:
      "Tense and unresolved sounding chords used frequently in blues and jazz.",
  },
  {
    type: "minor7",
    name: "Minor 7th Chords",
    chart: {
      frets: [
        [null, null, 0, 2, 1, 1], // Dm7 chord frets
      ],
      fingers: [
        [null, null, null, 2, 1, 1], // Dm7 chord finger positions
      ],
    },
    description:
      "More complex minor chords that add a flat 7th to the minor triad.",
  },
];

const ViewChords = () => {
  const chordChartRefs = useRef([]);

  useEffect(() => {
    chordData.forEach((chord, index) => {
      const { chart } = chord;
      const chordBox = chordChartRefs.current[index];
      if (chordBox) {
        chordBox.innerHTML = ""; // Clear previous chord chart
        try {
          draw(
            chordBox,
            {
              chord: chart.frets.map((fret, stringIndex) => {
                const finger = chart.fingers[stringIndex];
                const stringNumber = stringIndex + 1;
                return [stringNumber, fret === null ? "x" : fret, finger];
              }),
              position: 1, // Start render at fret 1 (adjust as needed)
              tuning: ["E", "A", "D", "G", "B", "E"], // Standard guitar tuning
            },
            {
              width: 200,
              height: 240,
              dotColor: "red", // Color for finger circles
              font: "Arial", // Font for labels
              fontSize: 14, // Font size for labels
              fontWeight: "normal", // Font weight for labels
            }
          );
        } catch (error) {
          console.error(`Error drawing chord for ${chord.type}:`, error);
        }
      } else {
        console.error(`Chord box ref for ${chord.type} is not defined`);
      }
    });
  }, []);

  return (
    <div className="view-chords">
      <h2>View Chords</h2>
      <p>
        Learn about the different chords associated with each scale and their
        degrees. Understand their structures, intervals, and uses in different
        musical contexts. Chords include:
      </p>

      <div className="chord-container">
        {chordData.map((chord, index) => (
          <div key={chord.type} className="chord-info">
            <h3>{chord.name}</h3>
            <div
              ref={(ref) => (chordChartRefs.current[index] = ref)}
              className="chord-chart"
            ></div>
            <p>{chord.description}</p>
          </div>
        ))}
      </div>

      <div className="centered-button">
        <Link to="/" className="back-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ViewChords;
