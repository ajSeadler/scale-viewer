import React from 'react';
import '../styles/KeySelector.css';

const keys = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

const KeySelector = ({ setSelectedKey }) => (
  <div className="key-selector">
    <h2>Select Key</h2>
    <select onChange={(e) => setSelectedKey(e.target.value)}>
      <option value="">--Choose a Key--</option>
      {keys.map((key) => (
        <option key={key} value={key}>{key}</option>
      ))}
    </select>
  </div>
);

export default KeySelector;
