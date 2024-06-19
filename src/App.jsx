import React, { useState } from 'react';
import CircleOfFifths from './components/CircleOfFifths';
import ScaleSelector from './components/ScaleSelector';
import ScaleDisplay from './components/ScaleDisplay';
import Header from './components/Header';
import './styles/App.css';

const App = () => {
  const [selectedKey, setSelectedKey] = useState('');
  const [selectedScale, setSelectedScale] = useState('');

  return (
    <div>
      <CircleOfFifths setSelectedKey={setSelectedKey} />
      <ScaleSelector setSelectedScale={setSelectedScale} />
      <ScaleDisplay selectedKey={selectedKey} selectedScale={selectedScale} />
    </div>
  );
};

export default App;
