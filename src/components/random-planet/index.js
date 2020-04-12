import React from 'react';

import './style.css';

const RandomPlanet = ({ name, diameter, rotationPeriod, population }) => (
  <div className="random-planet card">
    <div className="card-body">
      <h3 className="text-white">{ name }</h3>
      <ul className='list-group list-group-flush'>
        <li className="planet-info-item list-group-item">Diameter: { diameter }</li>
        <li className="planet-info-item list-group-item">Rotation period: { rotationPeriod }</li>
        <li className="planet-info-item list-group-item">Population: { population }</li>
      </ul>
    </div>
  </div>
);

export default RandomPlanet;
