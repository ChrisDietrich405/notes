import React from "react";

const Header = ({ setDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => setDarkMode((prevMode) => !prevMode)}
        className="save"
      >
        Toggle
      </button>
    </div>
  );
};

export default Header;
