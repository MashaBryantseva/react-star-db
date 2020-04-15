import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import Row from '../row';
import ErrorBoundry from '../error-boundry';
import { PersonList, PersonDetails } from '../sw-components';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedListItem: null,
  };

  onListItemSelect = (id) => {
    this.setState({ selectedListItem: id });
  };

  renderItem = ({ name, birthYear }) => `${name} (${birthYear})`;

  render() {
    const { selectedListItem } = this.state;

    const itemList = (
      <PersonList
        onListItemSelected={this.onListItemSelect}
        renderItem={this.renderItem}
      />
    );
    const itemDetails = <PersonDetails id={selectedListItem} />;

    return (
      <ErrorBoundry>
        <Row leftComponent={itemList} rightComponent={itemDetails}></Row>
      </ErrorBoundry>
    );
  }
};
