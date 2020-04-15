import React, { Component, Children, cloneElement } from 'react';

import CardWrapper from '../card-wrapper';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './style.css';

export default class ItemDetails extends Component {
  state = {
    item: null,
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.setState({
        isLoading: true,
      }, this.updateItem);
    }
  }

  onLoaded = (item) => {
    this.setState({
      item,
      isLoading: false,
      isError: false,
    })
  };

  onError = (error) => {
    console.log('Could not fetch', error);

    this.setState({
      item: null,
      isLoading: false,
      isError: true,
    })
  };

  updateItem() {
    const { id, getData } = this.props;

    if (!id) {
      return;
    }

    getData(id).then(this.onLoaded).catch(this.onError);
  }

  render() {
    const { id, children } = this.props;

    if (!id) {
      return null;
    }

    const { item, isLoading, isError } = this.state;

    if (isLoading) {
      return <Spinner />;
    } else if (isError || !item) {
      return <ErrorIndicator />;
    }

    return (
      <CardWrapper>
        <div className="item-details">
          <h3>{ item.name }</h3>
          <ul className="list-group list-group-flush">
            {
              Children.map(children, child =>
                cloneElement(child, { item, classNames: 'item-details-item list-group-item' })
              )
            }
          </ul>
        </div>
      </CardWrapper>
    );
  }
}
