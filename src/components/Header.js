import React from 'react';

const Header = ({ toggleView }) => (
  <header className="header">
    <nav>
      <ul>
        <li>Home</li>
        <li>Employees</li>
        <li>Reports</li>
      </ul>
    </nav>
    <button onClick={toggleView}>Toggle View</button>
  </header>
);

export default Header;
