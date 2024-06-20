import React, { useEffect, useRef } from "react";
import { getNoteName } from "../utils/noteMapping";
import "../styles/ScaleDisplay.css";

// Define a constant `scales` that holds various musical scales with their intervals, chords, and degrees.
const scales = {
  Major: {
    intervals: [0, 2, 4, 5, 7, 9, 11],
    chords: ["maj", "min", "min", "maj", "maj", "min", "dim"],
    degrees: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
  },
  Minor: {
    intervals: [0, 2, 3, 5, 7, 8, 10],
    chords: ["min", "dim", "maj", "min", "min", "maj", "maj"],
    degrees: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
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
    degrees: ["i", "ii°", "III+", "iv", "V", "VI", "vii°"],
  },
  MelodicMinor: {
    intervals: [0, 2, 3, 5, 7, 9, 11],
    chords: ["min", "min", "aug", "maj", "maj", "dim", "dim"],
    degrees: ["i", "ii", "III+", "IV", "V", "vi°", "vii°"],
  },
  Dorian: {
    intervals: [0, 2, 3, 5, 7, 9, 10],
    chords: ["min", "min", "maj", "maj", "min", "dim", "maj"],
    degrees: ["i", "ii", "bIII", "IV", "v", "vi°", "bVII"],
  },
  Phrygian: {
    intervals: [0, 1, 3, 5, 7, 8, 10],
    chords: ["min", "maj", "maj", "min", "dim", "maj", "min"],
    degrees: ["i", "bII", "bIII", "iv", "v°", "bVI", "bvii"],
  },
  Lydian: {
    intervals: [0, 2, 4, 6, 7, 9, 11],
    chords: ["maj", "maj", "min", "dim", "maj", "min", "maj"],
    degrees: ["I", "II", "iii", "#IV°", "V", "vi", "VII"],
  },
  Mixolydian: {
    intervals: [0, 2, 4, 5, 7, 9, 10],
    chords: ["maj", "min", "dim", "maj", "maj", "min", "maj"],
    degrees: ["I", "ii", "iii°", "IV", "V", "vi", "bVII"],
  },
  Locrian: {
    intervals: [0, 1, 3, 5, 6, 8, 10],
    chords: ["dim", "min", "maj", "min", "maj", "maj", "maj"],
    degrees: ["i°", "bII", "bIII", "iv", "v", "bVI", "bVII"],
  },
};

// takes key and scale as props
const ScaleDisplay = ({ selectedKey, selectedScale }) => {
  const scaleDisplayRef = useRef(null);

  useEffect(() => {
    if (selectedKey && selectedScale && scaleDisplayRef.current) {
      scaleDisplayRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedKey, selectedScale]);

  if (!selectedKey || !selectedScale) return null;

  const scale = scales[selectedScale];
  const notes = scale.intervals.map(interval => getNoteName(selectedKey, interval));

  return (
    <div ref={scaleDisplayRef} className="scale-display">
      <h2>{selectedKey.replace(/([A-Z])/g, ' $1').trim()} <span className="scale-name">{selectedScale.replace(/([A-Z])/g, ' $1').trim()}</span></h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <span className="note">{note}</span>
            {scale.chords.length > 0 && <span className="chord">{scale.chords[index]}</span>}
            <span className="degree">{scale.degrees[index]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScaleDisplay;
