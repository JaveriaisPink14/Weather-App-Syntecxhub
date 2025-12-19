import React from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <h1>SkyCast</h1>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;
