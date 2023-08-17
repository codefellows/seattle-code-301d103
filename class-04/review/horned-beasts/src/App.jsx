import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Gallery from './Gallery';
import SelectedBeast from './SelectedBeasts';
import Footer from './Footer';
import hornedBeastPics from '../src/assets/data.json';

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleBeastSelection = (beast) => {
    setSelectedBeast(beast);
  };

  return (
    <div className="app">
      <Header />
      <Gallery
        hornedBeasts={hornedBeastPics}
        onBeastSelection={handleBeastSelection}
      />
      <Footer />
    </div>
  );
}

export default App;
