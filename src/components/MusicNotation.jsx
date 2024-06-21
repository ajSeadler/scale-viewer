import React, { useEffect, useRef, useState } from 'react';
import Vex from 'vexflow';

const { Renderer, Stave, StaveNote, Accidental } = Vex.Flow;

const MusicNotation = ({ scaleNotes }) => {
  const divRef = useRef(null);
  const [hoveredNote, setHoveredNote] = useState(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.innerHTML = '';

      const renderer = new Renderer(divRef.current, Renderer.Backends.SVG);
      const width = 50 + scaleNotes.length * 40; // Adjust width based on the number of notes
      renderer.resize(width, 200);

      const context = renderer.getContext();
      const stave = new Stave(10, 40, width - 20);
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
        num_beats: scaleNotes.length,
        beat_value: 4,
      }).addTickables(notes);

      new Vex.Flow.Formatter().joinVoices([voice]).format([voice], width - 20);

      voice.draw(context, stave);

      // Add event listeners
      notes.forEach((note, index) => {
        const noteElem = document.getElementById(`vf-note-${index}`);
        if (noteElem) {
          noteElem.addEventListener('mouseenter', () => setHoveredNote(scaleNotes[index]));
          noteElem.addEventListener('mouseleave', () => setHoveredNote(null));
          noteElem.addEventListener('click', () => alert(`Clicked note: ${scaleNotes[index]}`));
        }
      });
    }
  }, [scaleNotes]);

  return (
    <div>
      <div ref={divRef} style={{ overflowX: 'auto' }}></div>
      {hoveredNote && <div style={{ color: 'orange', marginTop: '10px' }}>{hoveredNote}</div>}
    </div>
  );
};

export default MusicNotation;
