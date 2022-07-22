import React from 'react';
import Image from './image';

export default function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      {images.map((url, index) => (
        <Image key={index} url={url} />
      ))}
    </div>
  );
}