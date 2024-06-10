import React, { useState } from 'react';
import KeySelector from './components/KeySelector';
import ScaleSelector from './components/ScaleSelector';
import ScaleDisplay from './components/ScaleDisplay';
import Header from './components/Header';
import './styles/App.css';

const App = () => {
  const [selectedKey, setSelectedKey] = useState('');
  const [selectedScale, setSelectedScale] = useState('');

  return (
    <div className="app">
      <Header />
      <div className="selectors">
        <KeySelector setSelectedKey={setSelectedKey} />
        <ScaleSelector setSelectedScale={setSelectedScale} />
      </div>
      <ScaleDisplay selectedKey={selectedKey} selectedScale={selectedScale} />
    </div>
  );
};

export default App;
