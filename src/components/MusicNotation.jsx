import React, { useEffect, useRef, useState } from 'react';
import Vex from 'vexflow';
import '../styles/MusicNotation.css'; // Import the CSS file

const { Renderer, Stave, StaveNote, Accidental } = Vex.Flow;

const MusicNotation = ({ scaleNotes }) => {
  const divRef = useRef(null);
  const [hoveredNote, setHoveredNote] = useState(null);

  useEffect(() => {
    const drawStaff = () => {
      if (divRef.current && scaleNotes.length === 7) {
        divRef.current.innerHTML = '';

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

          staveNote.setAttribute('id', `note-${index}`);
          staveNote.setContext(context);

          return staveNote;
        });

        const voice = new Vex.Flow.Voice({
          num_beats: 7, // Always render 7 beats (notes)
          beat_value: 4,
        }).addTickables(notes);

        new Vex.Flow.Formatter().joinVoices([voice]).format([voice], width - 20);

        voice.draw(context, stave);

        // Add event listeners
        notes.forEach((note, index) => {
          const noteElem = document.getElementById(`vf-note-${index}`);
          if (noteElem) {
            noteElem.addEventListener('click', () => setHoveredNote(scaleNotes[index]));
          }
        });
      }
    };

    // Function to calculate width based on viewport size and fixed number of notes (7)
    const calculateStaffWidth = () => {
      const containerWidth = divRef.current.clientWidth;
      const minWidth = 250; // Minimum width of the staff
      const maxNoteWidth = 50; // Maximum width per note
      const noteCount = 7; // Fixed number of notes

      let calculatedWidth = minWidth + noteCount * maxNoteWidth;

      // Adjust width based on container width
      if (containerWidth < calculatedWidth) {
        calculatedWidth = containerWidth - -20; // Adjust for padding and margins
      }

      return calculatedWidth;
    };

    // Redraw staff whenever scaleNotes changes or on component mount
    drawStaff();

    // Redraw staff on window resize
    window.addEventListener('resize', drawStaff);
    return () => {
      window.removeEventListener('resize', drawStaff);
    };
  }, [scaleNotes]);

  return (
    <div className="music-notation">
      <p>Click or tap a note on the staff to reveal its name</p>
      <div ref={divRef} className="staff-container"></div>
      {hoveredNote && <div className="hovered-note">{hoveredNote}</div>}
    </div>
  );
};

export default MusicNotation;
