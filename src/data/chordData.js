const chordData = {
  major: {
    name: "Major Chords",
    chart: {
      // Example chord chart data for C Major
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
  minor: {
    name: "Minor Chords",
    chart: {
      // Example chord chart data for A Minor
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
  dominant7: {
    name: "Dominant 7th Chords",
    chart: {
      // Example chord chart data for G7
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
  minor7: {
    name: "Minor 7th Chords",
    chart: {
      // Example chord chart data for Dm7
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
};
