import React, { Component } from 'react';

import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

// Components
import Header from '../header';
import RandomPlanetContainer from '../random-planet-container';
import ErrorBoundry from '../error-boundry';

// Pages

import PeoplePage from '../pages/people-page';
import PlanetPage from '../pages/planet-page';
import StarshipPage from '../pages/starship-page';

import './style.css';

export default class App extends Component {
  swapiSevice = new SwapiService();

  state = {
    displayRandomPlanet: true,
  };

  toggleRandomPlanet = () => {
    this.setState(({ displayRandomPlanet }) => ({
      displayRandomPlanet: !displayRandomPlanet,
    }));
  };

  render() {
    const { displayRandomPlanet } = this.state;

    return (
      <div className="app-container">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.swapiSevice}>
            <Header />
            {
              displayRandomPlanet && <RandomPlanetContainer />
            }

            <button
              className="btn btn-warning mb-4"
              onClick={this.toggleRandomPlanet}
            >
              Toggle random planet
            </button>

            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
