import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './style.css';

export default class ItemList extends Component {
  state = {
    itemList: [],
    isLoading: true,
    isError: false,
  };

  onLoaded = (itemList) => {
    this.setState({
      itemList: itemList || [],
      isLoading: false,
      isError: false,
    });
  };

  onError = (error) => {
    console.log('Could not fetch', error);

    this.setState({
      itemList: [],
      isLoading: false,
      isError: true,
    });
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then(this.onLoaded).catch(this.onError);
  }

  render() {
    const { itemList, isLoading, isError } = this.state;
    const { onListItemSelected, renderItem } = this.props;

    if (isLoading) {
      return <Spinner />;
    } else if (isError) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="item-list list-group">
        {
          itemList.map(({ id, ...item }) => (
            <li
              key={id}
              className="item-list-item list-group-item"
              onClick={() => onListItemSelected(id)}
            >
              { renderItem(item) }
            </li>
          ))
        }
      </ul>
    );
  }
}
