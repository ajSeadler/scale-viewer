// src/components/ScaleDisplay.jsx
import React from "react";
import { getNoteName } from "../utils/noteMapping";
import "../styles/ScaleDisplay.css";

const scales = {
  Major: {
    intervals: [0, 2, 4, 5, 7, 9, 11],
    chords: ["maj", "min", "min", "maj", "maj", "min", "dim"],
    degrees: ["I", "II", "III", "IV", "V", "VI", "VII"],
  },
  Minor: {
    intervals: [0, 2, 3, 5, 7, 8, 10],
    chords: ["min", "dim", "maj", "min", "min", "maj", "maj"],
    degrees: ["I", "II", "III", "IV", "V", "VI", "VII"],
  },
  PentatonicMajor: {
    intervals: [0, 2, 4, 7, 9],
    chords: [],
    degrees: ["I", "II", "III", "V", "VI"],
  },
  PentatonicMinor: {
    intervals: [0, 3, 5, 7, 10],
    chords: [],
    degrees: ["I", "III", "IV", "V", "VII"],
  },
  Blues: {
    intervals: [0, 3, 5, 6, 7, 10],
    chords: [],
    degrees: ["I", "III", "IV", "bV", "V", "VII"],
  },
  HarmonicMinor: {
    intervals: [0, 2, 3, 5, 7, 8, 11],
    chords: ["min", "dim", "aug", "min", "maj", "maj", "dim"],
    degrees: ["I", "II", "III", "IV", "V", "VI", "VII"],
  },
  MelodicMinor: {
    intervals: [0, 2, 3, 5, 7, 9, 11],
    chords: ["min", "min", "aug", "maj", "maj", "dim", "dim"],
    degrees: ["I", "II", "III", "IV", "V", "VI", "VII"],
  },
  Dorian: {
    intervals: [0, 2, 3, 5, 7, 9, 10],
    chords: ["min", "min", "maj", "maj", "min", "dim", "maj"],
    degrees: ["I", "II", "bIII", "IV", "V", "VI", "bVII"],
  },
  Phrygian: {
    intervals: [0, 1, 3, 5, 7, 8, 10],
    chords: ["min", "maj", "maj", "min", "dim", "maj", "min"],
    degrees: ["I", "bII", "bIII", "IV", "V", "bVI", "bVII"],
  },
  Lydian: {
    intervals: [0, 2, 4, 6, 7, 9, 11],
    chords: ["maj", "maj", "min", "dim", "maj", "min", "maj"],
    degrees: ["I", "II", "III", "#IV", "V", "VI", "VII"],
  },
  Mixolydian: {
    intervals: [0, 2, 4, 5, 7, 9, 10],
    chords: ["maj", "min", "dim", "maj", "maj", "min", "maj"],
    degrees: ["I", "II", "III", "IV", "V", "VI", "bVII"],
  },
  Locrian: {
    intervals: [0, 1, 3, 5, 6, 8, 10],
    chords: ["dim", "min", "maj", "min", "maj", "maj", "maj"],
    degrees: ["I", "bII", "bIII", "IV", "bV", "bVI", "bVII"],
  },
};

const ScaleDisplay = ({ selectedKey, selectedScale }) => {
  if (!selectedKey || !selectedScale) return null;

  const scale = scales[selectedScale];
  const notes = scale.intervals.map(interval => getNoteName(selectedKey, interval));

  return (
    <div className="scale-display">
      <h2>{selectedKey} {selectedScale.replace(/([A-Z])/g, ' $1').trim()}</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note} - {scale.degrees[index]}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScaleDisplay;
