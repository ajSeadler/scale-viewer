// src/utils/noteMapping.js
const circleOfFifths = {
  C: {sharps: 0, flats: 0},
  G: {sharps: 1, flats: 0},
  D: {sharps: 2, flats: 0},
  A: {sharps: 3, flats: 0},
  E: {sharps: 4, flats: 0},
  B: {sharps: 5, flats: 0},
  'F#': {sharps: 6, flats: 0},
  'C#': {sharps: 7, flats: 0},
  F: {sharps: 0, flats: 1},
  'Bb': {sharps: 0, flats: 2},
  'Eb': {sharps: 0, flats: 3},
  'Ab': {sharps: 0, flats: 4},
  'Db': {sharps: 0, flats: 5},
  'Gb': {sharps: 0, flats: 6},
  'Cb': {sharps: 0, flats: 7},
};

const notesSharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const notesFlat = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const getNoteName = (key, interval) => {
  const { sharps, flats } = circleOfFifths[key];
  const notes = sharps > flats ? notesSharp : notesFlat;
  return notes[(notes.indexOf(key) + interval) % 12];
};

export { getNoteName };
