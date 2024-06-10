import React from 'react';
import '../styles/ScaleDisplay.css';

const scales = {
  Major: { intervals: [0, 2, 4, 5, 7, 9, 11], chords: ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'], degrees: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'] },
  Minor: { intervals: [0, 2, 3, 5, 7, 8, 10], chords: ['min', 'dim', 'maj', 'min', 'min', 'maj', 'maj'], degrees: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'] },
  PentatonicMajor: { intervals: [0, 2, 4, 7, 9], chords: [], degrees: ['I', 'II', 'III', 'V', 'VI'] }, // Pentatonic scales do not form traditional triads
  PentatonicMinor: { intervals: [0, 3, 5, 7, 10], chords: [], degrees: ['I', 'III', 'IV', 'V', 'VII'] },
  Blues: { intervals: [0, 3, 5, 6, 7, 10], chords: [], degrees: ['I', 'III', 'IV', 'bV', 'V', 'VII'] },
  HarmonicMinor: { intervals: [0, 2, 3, 5, 7, 8, 11], chords: ['min', 'dim', 'aug', 'min', 'maj', 'maj', 'dim'], degrees: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'] },
  MelodicMinor: { intervals: [0, 2, 3, 5, 7, 9, 11], chords: ['min', 'min', 'aug', 'maj', 'maj', 'dim', 'dim'], degrees: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'] },
  Dorian: { intervals: [0, 2, 3, 5, 7, 9, 10], chords: ['min', 'min', 'maj', 'maj', 'min', 'dim', 'maj'], degrees: ['I', 'II', 'bIII', 'IV', 'V', 'VI', 'bVII'] },
  Phrygian: { intervals: [0, 1, 3, 5, 7, 8, 10], chords: ['min', 'maj', 'maj', 'min', 'dim', 'maj', 'min'], degrees: ['I', 'bII', 'bIII', 'IV', 'V', 'bVI', 'bVII'] },
  Lydian: { intervals: [0, 2, 4, 6, 7, 9, 11], chords: ['maj', 'maj', 'min', 'dim', 'maj', 'min', 'maj'], degrees: ['I', 'II', 'III', '#IV', 'V', 'VI', 'VII'] },
  Mixolydian: { intervals: [0, 2, 4, 5, 7, 9, 10], chords: ['maj', 'min', 'dim', 'maj', 'maj', 'min', 'maj'], degrees: ['I', 'II', 'III', 'IV', 'V', 'VI', 'bVII'] },
  Locrian: { intervals: [0, 1, 3, 5, 6, 8, 10], chords: ['dim', 'maj', 'maj', 'min', 'maj', 'min', 'dim'], degrees: ['I', 'bII', 'bIII', 'IV', 'bV', 'bVI', 'bVII'] },
};

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const enharmonics = {
  'C#': 'Db', 'D#': 'Eb', 'F#': 'Gb', 'G#': 'Ab', 'A#': 'Bb'
};

const getNoteName = (note) => enharmonics[note] || note;

const ScaleDisplay = ({ selectedKey, selectedScale }) => {
  if (!selectedKey || !selectedScale) return null;

  const scaleInfo = scales[selectedScale.replace(' ', '')];
  if (!scaleInfo) return null; // Handle the case where the scale is not found

  const keyIndex = notes.indexOf(selectedKey);
  const scaleNotes = scaleInfo.intervals.map(interval => getNoteName(notes[(keyIndex + interval) % 12]));
  const degrees = scaleInfo.degrees;

  return (
    <div className="scale-display">
      <h2>{selectedKey} {selectedScale.replace(/([A-Z])/g, ' $1').trim()} Scale</h2>
      <div className="notes">
        {scaleNotes.map((note, index) => (
          <div key={index} className="note">
            <div className="note-name">{note} {scaleInfo.chords[index]}</div>
            <div className="degree">{degrees[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScaleDisplay;
