import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import Row from '../row';
import ErrorBoundry from '../error-boundry';
import { PlanetList, PlanetDetails } from '../sw-components';

export default class PlanetPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedListItem: null,
  };

  onListItemSelect = (id) => {
    this.setState({ selectedListItem: id });
  };

  renderItem = ({ name, diameter }) => `${name} (${diameter})`;

  render() {
    const { selectedListItem } = this.state;

    const itemList = (
      <PlanetList
        onListItemSelected={this.onListItemSelect}
        renderItem={this.renderItem}
      />
    );
    const itemDetails = <PlanetDetails id={selectedListItem} />;

    return (
      <ErrorBoundry>
        <Row leftComponent={itemList} rightComponent={itemDetails}></Row>
      </ErrorBoundry>
    );
  }
};
