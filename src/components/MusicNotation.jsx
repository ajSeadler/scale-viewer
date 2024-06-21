import React, { useEffect, useRef, useState } from 'react';
import Vex from 'vexflow';
import { ChordBox } from 'vexchords';
import '../styles/MusicNotation.css'; // Import the CSS file

const { Renderer, Stave, StaveNote, Accidental } = Vex.Flow;

const chordShapes = {
  'C': [
    [1, 3, 'C'],
    [2, 2, 'E'],
    [3, 0],
    [4, 1, 'C'],
    [5, 0],
    [6, 'x'],
  ],
  'D': [
    [1, 2, 'F#'],
    [2, 3, 'D'],
    [3, 2, 'A'],
    [4, 0],
    [5, 'x'],
    [6, 'x'],
  ],
  'E': [
    [1, 0],
    [2, 0],
    [3, 1, 'G#'],
    [4, 2, 'E'],
    [5, 2, 'B'],
    [6, 0],
  ],
  'F': [
    [1, 1, 'F'],
    [2, 1, 'C'],
    [3, 2, 'A'],
    [4, 3, 'F'],
    [5, 3, 'C'],
    [6, 1, 'F'],
  ],
  'G': [
    [1, 3, 'G'],
    [2, 3, 'B'],
    [3, 0],
    [4, 0],
    [5, 2, 'B'],
    [6, 3, 'G'],
  ],
  'A': [
    [1, 0],
    [2, 2, 'E'],
    [3, 2, 'A'],
    [4, 2, 'C#'],
    [5, 0],
    [6, 'x'],
  ],
  'B': [
    [1, 2, 'B'],
    [2, 4, 'F#'],
    [3, 4, 'B'],
    [4, 4, 'D#'],
    [5, 2, 'B'],
    [6, 'x'],
  ],
  // Add more chords as needed
};

const MusicNotation = ({ scaleNotes, chords }) => {
  const divRef = useRef(null);
  const chordRef = useRef(null);
  const [hoveredNote, setHoveredNote] = useState(null);

  useEffect(() => {
    const drawStaff = () => {
      if (divRef.current && scaleNotes.length === 7) {
        divRef.current.innerHTML = '';
        chordRef.current.innerHTML = '';

        const width = calculateStaffWidth(); // Calculate width dynamically

        const renderer = new Renderer(divRef.current, Renderer.Backends.SVG);
        renderer.resize(width, 200); // Adjust height as needed

        const context = renderer.getContext();
        const stave = new Stave(10, 50, width - 20);
        stave.addClef('treble').setContext(context).draw();

        const notes = scaleNotes.map((note, index) => {
          const match = note.match(/([A-Ga-g])(#|b)?/);
          const pitch = match[1];
          const accidental = match[2] || '';
          const octave = '4'; // Default to octave 4 for simplicity

          const fullNote = `${pitch}/${octave}`;

          const staveNote = new StaveNote({
            keys: [fullNote],
            duration: 'q',
          });

          if (accidental) {
            staveNote.addModifier(new Accidental(accidental));
          }

          staveNote.setAttribute('id', `vf-note-${index}`);
          staveNote.setContext(context);

          return staveNote;
        });

        const voice = new Vex.Flow.Voice({
          num_beats: 7, // Always render 7 beats (notes)
          beat_value: 4,
        }).addTickables(notes);

        new Vex.Flow.Formatter().joinVoices([voice]).format([voice], width - 65); // Reduce margin for better fit

        voice.draw(context, stave);

        // Add event listeners
        notes.forEach((note, index) => {
          const noteElem = document.querySelector(`#vf-note-${index} .vf-stavenote`);
          if (noteElem) {
            noteElem.addEventListener('click', () => setHoveredNote(scaleNotes[index]));
          }
        });

        // Draw chord diagrams
        if (chords) {
          chords.forEach((chord, index) => {
            const chordDiv = document.createElement('div');
            chordDiv.className = 'chord-diagram'; // Optional class for additional styling
            chordRef.current.appendChild(chordDiv);

            const chordBox = new ChordBox(chordDiv, {
              width: 100,
              height: 120,
              numStrings: 6,
              numFrets: 5,
              showTuning: true,
              defaultColor: '#666',
              bgColor: '#FFF',
              strokeColor: '#666',
              textColor: '#666',
              stringColor: '#666',
              fretColor: '#666',
              labelColor: '#666',
              fretWidth: 1,
              stringWidth: 1,
              fontFamily: 'Arial',
              fontSize: 12,
              fontWeight: 'normal',
              fontStyle: 'normal',
              labelWeight: 'bold',
            });

            chordBox.draw({
              chord: chordShapes[chord] || [],
              tuning: ['E', 'A', 'D', 'G', 'B', 'E'],
            });
          });
        }
      }
    };

    // Function to calculate width based on viewport size and fixed number of notes (7)
    const calculateStaffWidth = () => {
      const containerWidth = divRef.current.clientWidth;
      const noteCount = 7; // Fixed number of notes
      const minWidth = 350; // Minimum width to ensure readability on mobile devices
      const maxWidth = 800; // Maximum width to prevent excessive stretching on desktop
    
      // Calculate note spacing based on container width
      const noteSpacing = containerWidth / noteCount;
    
      // Determine the calculated width based on note count and spacing
      let calculatedWidth = noteCount * noteSpacing;
    
      // Ensure the calculated width is within defined limits
      calculatedWidth = Math.max(minWidth, calculatedWidth); // Apply minimum width
      calculatedWidth = Math.min(maxWidth, calculatedWidth); // Apply maximum width
    
      return calculatedWidth;
    };
    

    // Redraw staff whenever scaleNotes changes or on component mount
    drawStaff();

    // Redraw staff on window resize
    window.addEventListener('resize', drawStaff);
    return () => {
      window.removeEventListener('resize', drawStaff);
    };
  }, [scaleNotes, chords]);

  return (
    <div className="music-notation">
      <div ref={divRef} className="staff-container"></div>
      {hoveredNote && <div className="hovered-note">{hoveredNote}</div>}
      <div ref={chordRef} className="chord-container"></div>
    </div>
  );
};

export default MusicNotation;
