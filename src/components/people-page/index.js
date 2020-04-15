import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

const Record = ({ item, label, field, classNames }) => (
  <li className={classNames}>
    { label }: { item[field] }
  </li>
);

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
    const { selectedListItem, hasError } = this.state;

    const itemList = (
      <ItemList
        onListItemSelected={this.onListItemSelect}
        getData={this.swapiService.getAllPeople}
        renderItem={this.renderItem}
      />
    );
    const itemDetails = (
      <ItemDetails
        id={selectedListItem}
        getData={this.swapiService.getPerson}
      >
        <Record label="Birth year" field="birthYear" />
        <Record label="Height" field="height" />
        <Record label="Weight" field="mass" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <Row leftComponent={itemList} rightComponent={itemDetails}></Row>
      </ErrorBoundry>
    );
  }
};
