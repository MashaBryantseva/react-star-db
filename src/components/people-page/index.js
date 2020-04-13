import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetailsContainer from '../person-details-container';
import ErrorIndicator from '../error-indicator';

export default class PeoplePage extends Component {
  state = {
    selectedListItem: null,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onListItemSelect = (id) => {
    this.setState({ selectedListItem: id });
  };

  render() {
    const { selectedListItem, hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="row">
        <div className="col">
          <ItemList onListItemSelected={this.onListItemSelect} />
        </div>
        {
          selectedListItem && (
            <div className="col">
              <PersonDetailsContainer id={selectedListItem} />
            </div>
          )
        }
      </div>
    );
  }
};
