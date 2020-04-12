import React from 'react';

import './style.css';

const Header = () => (
  <div className="header d-flex align-items-center">
    <h1 className="site-title">
      <a className="site-title-link text-white" href="#">Star DB</a>
    </h1>

    <nav>
      <ul className="navbar-nav flex-row">
        <li className="navigation-item nav-item">
          <a className="nav-link" href="#">People</a>
        </li>
        <li className="navigation-item nav-item">
          <a className="nav-link" href="#">Planet</a>
        </li>
        <li className="navigation-item nav-item">
          <a className="nav-link" href="#">Starship</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
