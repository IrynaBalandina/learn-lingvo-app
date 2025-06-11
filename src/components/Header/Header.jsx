import React from 'react';
import Navigation from './Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LearnLingvo</div>
      <Navigation />
    </header>
  );
};

export default Header;



