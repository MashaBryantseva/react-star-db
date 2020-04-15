import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import Row from '../row';
import ErrorBoundry from '../error-boundry';
import { StarshipList, StarshipDetails } from '../sw-components';

export default class StarshipPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedListItem: null,
  };

  onListItemSelect = (id) => {
    this.setState({ selectedListItem: id });
  };

  renderItem = ({ name, crew }) => `${name} (${crew})`;

  render() {
    const { selectedListItem } = this.state;

    const itemList = (
      <StarshipList
        onListItemSelected={this.onListItemSelect}
        renderItem={this.renderItem}
      />
    );
    const itemDetails = <StarshipDetails id={selectedListItem} />;

    return (
      <ErrorBoundry>
        <Row leftComponent={itemList} rightComponent={itemDetails}></Row>
      </ErrorBoundry>
    );
  }
};
