// src/pages/Home.jsx
import React, { useState } from 'react';
import KeySelector from '../components/KeySelector';
import ScaleSelector from '../components/ScaleSelector';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedKey, setSelectedKey] = useState('');
  const [selectedScale, setSelectedScale] = useState('');

  return (
    <div>
      <Header />
      <KeySelector setSelectedKey={setSelectedKey} />
      <ScaleSelector setSelectedScale={setSelectedScale} />
      <Link to={{ pathname: '/results', state: { selectedKey, selectedScale } }}>Go to Results</Link>

    </div>
  );
};

export default Home;
