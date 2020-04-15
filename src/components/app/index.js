import React, { Component } from 'react';

// Components
import Header from '../header';
import RandomPlanetContainer from '../random-planet-container';
import PeoplePage from '../people-page';
import ErrorBoundry from '../error-boundry';

import './style.css';

export default class App extends Component {
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

          <Header />
          {
            displayRandomPlanet && <RandomPlanetContainer/>
          }

          <button
            className="btn btn-warning mb-4"
            onClick={this.toggleRandomPlanet}
          >
            Toggle random planet
          </button>

          <PeoplePage />
        </ErrorBoundry>
      </div>
    );
  }
}
