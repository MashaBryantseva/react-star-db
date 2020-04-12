import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import RandomPlanet from '../random-planet';

export default class RandomPlanetContainer extends Component {
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

    return <RandomPlanet { ...planet } />;
  }
};
