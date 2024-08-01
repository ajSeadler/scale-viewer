// src/components/ScaleDisplay.js
import React, { useEffect, useRef } from "react";
import { getNoteName } from "../utils/noteMapping";
import MusicNotation from "./MusicNotation";
import "../styles/ScaleDisplay.css";
import { circleOfFifths } from "../utils/noteMapping"; // Import circleOfFifths data

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

// Utility function to get chord keys
const getChordKeys = (note, chord) => {
  switch (chord) {
    case "maj":
      return [`${note}/4`, `${note}maj/4`, `${note}5/4`];
    case "min":
      return [`${note}/4`, `${note}m/4`, `${note}5/4`];
    case "dim":
      return [`${note}/4`, `${note}dim/4`, `${note}5/4`];
    default:
      return [`${note}/4`];
  }
};

const ScaleDisplay = ({ selectedKey, selectedScale }) => {
  const scaleDisplayRef = useRef(null);

  useEffect(() => {
    if (selectedKey && selectedScale && scaleDisplayRef.current) {
      scaleDisplayRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedKey, selectedScale]);

  if (!selectedKey || !selectedScale) return null;

  const scale = scales[selectedScale];
  const notes = scale.intervals.map((interval) =>
    getNoteName(selectedKey, interval)
  );

  const chords = scale.chords.map((chord, index) => ({
    name: `${notes[index]} ${chord}`,
    keys: getChordKeys(notes[index], chord),
  }));

  const { sharps, flats } = circleOfFifths[selectedKey];
  const keySignature =
    sharps > 0
      ? `${sharps} Sharp${sharps > 1 ? "s" : ""}`
      : `${flats} Flat${flats > 1 ? "s" : ""}`;

  return (
    <div ref={scaleDisplayRef} className="scale-display">
      <h2>
        {selectedKey.replace(/([A-Z])/g, " $1").trim()}{" "}
        <span className="scale-name">
          {selectedScale.replace(/([A-Z])/g, " $1").trim()}
        </span>
      </h2>
      {/* <p className="key-signature">{keySignature}</p> */}
      <p>Scroll down to see notation and chords</p>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <span className="note">{note}</span>
            {scale.chords.length > 0 && (
              <span className="chord">{scale.chords[index]}</span>
            )}
            <span className="degree">{scale.degrees[index]}</span>
          </li>
        ))}
      </ul>
      <div className="notation-container">
        <MusicNotation scaleNotes={notes} chords={chords} />
      </div>
    </div>
  );
};

export default ScaleDisplay;
