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
    isError: false,
  };

  componentDidMount() {
    this.updatePlanet();

    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onLoaded = (planet) => {
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

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 9) + 2; // there is no planet with id = 1

    this.swapiService.getPlanet(id)
      .then(this.onLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, isLoading, isError } = this.state;
    const { name, diameter, rotationPeriod, population } = planet;

    if (isLoading) {
      return <Spinner />;
    } else if (isError || (!name && !diameter && !rotationPeriod && !population)) {
      return <ErrorIndicator />;
    }

    return <RandomPlanet { ...planet } />;
  }
};
