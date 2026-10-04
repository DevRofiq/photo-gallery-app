import React from 'react';

const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card">
      <div className="image-container">
        <img src={photo.url} alt={photo.title} />
      </div>
      <div className="photo-info">
        <div className="badges">
          <span className="badge badge-id">Photo ID: {photo.id}</span>
          <span className="badge badge-album">Album ID: {photo.albumId}</span>
        </div>
        <h3 className="photo-title">{photo.title}</h3>
      </div>
    </div>
  );
};

export default PhotoCard;