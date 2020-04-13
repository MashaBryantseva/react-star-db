import React from 'react';

import './style.css';

const CardWrapper = ({ children }) => (
  <div className="card-wrapper card">
    <div className="card-body">
      { children }
    </div>
  </div>
);

export default CardWrapper;
