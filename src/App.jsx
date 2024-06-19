// src/App.jsx
import React, { useState } from 'react';
import CircleOfFifths from './components/CircleOfFifths';
import ScaleSelector from './components/ScaleSelector';
import ScaleDisplay from './components/ScaleDisplay';
import Header from './components/Header';
import WelcomeComponent from './components/WelcomeComponent'
import './styles/App.css';

const App = () => {
  const [selectedKey, setSelectedKey] = useState('');
  const [selectedScale, setSelectedScale] = useState('');

  return (
    <div className="app-container">
       <WelcomeComponent />
      {/* <Header /> */}
      <div className="main-content">
       
        <CircleOfFifths selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
        <ScaleSelector setSelectedScale={setSelectedScale} />
        <ScaleDisplay selectedKey={selectedKey} selectedScale={selectedScale} />
      </div>
    </div>
  );
};

export default App;
