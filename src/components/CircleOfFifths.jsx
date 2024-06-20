import React from 'react';
import '../styles/CircleOfFifths.css';

const keys = [
  { name: 'C', angle: -90 },
  { name: 'G', angle: -60 },
  { name: 'D', angle: -30 },
  { name: 'A', angle: 0 },
  { name: 'E', angle: 30 },
  { name: 'B', angle: 60 },
  { name: 'F#', angle: 90 },
  { name: 'Db', angle: 120 },
  { name: 'Ab', angle: 150 },
  { name: 'Eb', angle: 180 },
  { name: 'Bb', angle: 210 },
  { name: 'F', angle: 240 },
];

const CircleOfFifths = ({ selectedKey, setSelectedKey }) => {
  return (
    <div className="circle-of-fifths">
      <div id="circle"></div>
      <svg viewBox="0 0 200 200" width="300" height="300">
        {keys.map((key) => {
          const x = 100 + 80 * Math.cos((key.angle * Math.PI) / 180);
          const y = 100 + 80 * Math.sin((key.angle * Math.PI) / 180);
          return (
            <g key={key.name} onClick={() => setSelectedKey(key.name)}>
              <circle
                cx={x}
                cy={y}
                r="15"
                className={`key-circle ${key.name === selectedKey ? 'active' : ''}`}
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                alignmentBaseline="middle"
                className="key-text"
              >
                {key.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default CircleOfFifths;
