import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import DiscoverScales from './components/DiscoverScales';
import ViewChords from './components/ViewChords';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <div>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discover-scales' element={<DiscoverScales />} />
          <Route path='/view-chords' element={<ViewChords />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
