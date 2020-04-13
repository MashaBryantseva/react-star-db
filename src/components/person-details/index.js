import React from 'react';

import './style.css';

const PersonDetails = ({ name, birthYear, height, mass }) => (
  <div className="person-details">
    <h4>{ name }</h4>
    <ul className="list-group list-group-flush">
      <li className="person-details-item list-group-item">
        Birth year: { birthYear }
      </li>
      <li className="person-details-item list-group-item">
        Height: { height }
      </li>
      <li className="person-details-item list-group-item">
        Weight: { mass }
      </li>
    </ul>
  </div>
);

export default PersonDetails;
