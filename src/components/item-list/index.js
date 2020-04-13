import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import './style.css';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: [],
    isLoading: true,
    isError: false,
  };

  onLoaded = (peopleList) => {
    this.setState({
      peopleList: peopleList || [],
      isLoading: false,
      isError: false,
    });
  };

  onError = (error) => {
    console.log('Could not fetch', error);

    this.setState({
      peopleList: [],
      isLoading: false,
      isError: true,
    });
  };

  componentDidMount() {
    this.swapiService.getAllPeople()
      .then(this.onLoaded)
      .catch(this.onError);
  }

  render() {
    const { peopleList, isLoading, isError } = this.state;
    const { onListItemSelected } = this.props;

    if (isLoading) {
      return <Spinner />;
    } else if (isError) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="item-list list-group">
        {
          peopleList.map(({ name, id }) => (
            <li
              key={id}
              className="item-list-item list-group-item"
              onClick={() => onListItemSelected(id)}
            >
              { name }
            </li>
          ))
        }
      </ul>
    );
  }
}
