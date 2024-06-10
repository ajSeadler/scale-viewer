// src/pages/Results.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ScaleDisplay from '../components/ScaleDisplay';

const Results = ({ selectedKey, selectedScale }) => {
  console.log("Selected Key:", selectedKey);
  console.log("Selected Scale:", selectedScale);

  return (
    <div>
      <Link to="/">Back</Link>
      <ScaleDisplay selectedKey={selectedKey} selectedScale={selectedScale} />
    </div>
  );
};

export default Results;
