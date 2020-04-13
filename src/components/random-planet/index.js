import React from 'react';

import CardWrapper from '../card-wrapper';

import './style.css';

const RandomPlanet = ({ name, diameter, rotationPeriod, population }) => (
  <div className="random-planet">
    <CardWrapper>
      <h3 className="text-white">{ name }</h3>
      <ul className="list-group list-group-flush">
        <li className="planet-info-item list-group-item">Diameter: { diameter }</li>
        <li className="planet-info-item list-group-item">Rotation period: { rotationPeriod }</li>
        <li className="planet-info-item list-group-item">Population: { population }</li>
      </ul>
    </CardWrapper>
  </div>
);

export default RandomPlanet;
