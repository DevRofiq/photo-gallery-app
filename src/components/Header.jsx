import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">📸 PhotoGallery</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#gallery">Gallery</a>
      </nav>
    </header>
  );
};

export default Header;