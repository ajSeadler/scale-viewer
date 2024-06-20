// src/App.jsx
import React, { useState } from 'react';
import CircleOfFifths from './components/CircleOfFifths';
import ScaleSelector from './components/ScaleSelector';
import ScaleDisplay from './components/ScaleDisplay';
import Header from './components/Header';
import WelcomeComponent from './components/WelcomeComponent'
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [selectedKey, setSelectedKey] = useState('');
  const [selectedScale, setSelectedScale] = useState('');

  return (
    <>
    <WelcomeComponent />
    <div className="app-container">
       
      {/* <Header /> */}
      <div className="main-content">
       
        <CircleOfFifths selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
        <ScaleSelector setSelectedScale={setSelectedScale} />
        <ScaleDisplay selectedKey={selectedKey} selectedScale={selectedScale} />
        
      </div>
      
    </div>
    <Footer />
    
    </>
  );
};

export default App;
