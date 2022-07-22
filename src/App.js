import React from 'react';
import './style.css';
import placeholders from './placeholders';
import ImageGallery from './ImageGallery';

export default function App() {
  return (
    <div className="App">
      <h1>Lazy Loading Image Gallery</h1>
      <ImageGallery images={placeholders} />
    </div>
  );
}

