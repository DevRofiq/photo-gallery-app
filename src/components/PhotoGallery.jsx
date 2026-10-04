import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Axios ব্যবহার না করে fetch() দিয়ে Data আনা হচ্ছে
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        // প্রথম ১০০টি ছবি স্লাইস করে রাখা হচ্ছে
        setPhotos(data.slice(0, 100));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading photos...</div>;
  }

  return (
    <section className="gallery-section" id="gallery">
      <h2>Our Photo Collection</h2>
      <p className="subtitle">Displaying 100 Photos from API</p>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;