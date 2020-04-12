import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './style.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    isLoading: true,
    false: false,
  };

  constructor() {
    super();

    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      isLoading: false,
      isError: false,
    });
  };

  onError = (error) => {
    console.log('Could not fetch', error);

    this.setState({
      planet: {},
      isLoading: false,
      isError: true,
    });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 8) + 2;

    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, isLoading, isError } = this.state;
    const { name, diameter, rotationPeriod, population } = planet;

    if (isLoading) {
      return <Spinner />;
    } else if (isError || !name && !diameter && !rotationPeriod && !population) {
      return <ErrorIndicator />;
    }

    return (
      <div className="random-planet-card card">
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
  }
}
