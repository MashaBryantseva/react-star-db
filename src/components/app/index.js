import React, { Component } from 'react';

// Components
import Header from '../header';
import RandomPlanetContainer from '../random-planet-container';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './style.css';

export default class App extends Component {
  state = {
    displayRandomPlanet: true,
    selectedListItem: null,
  };

  toggleRandomPlanet = () => {
    this.setState(({ displayRandomPlanet }) => ({
      displayRandomPlanet: !displayRandomPlanet,
    }));
  };

  onListItemSelect = (id) => {
    this.setState({ selectedListItem: id });
  };

  render() {
    const { displayRandomPlanet, selectedListItem } = this.state;

    return (
      <div className="app-container">
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

        <div className="row">
          <div className="col">
            <ItemList onListItemSelected={this.onListItemSelect} />
          </div>
          {
            selectedListItem && (
              <div className="col">
                { selectedListItem }
                <PersonDetails id={selectedListItem} />
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
