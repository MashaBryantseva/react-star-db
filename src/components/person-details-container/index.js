import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import CardWrapper from '../card-wrapper';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PersonDetails from '../person-details';

export default class PersonDetailsContainer extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.setState({
        isLoading: true,
      }, this.updatePerson);
    }
  }

  onLoaded = (person) => {
    this.setState({
      person,
      isLoading: false,
      isError: false,
    })
  };

  onError = (error) => {
    console.log('Could not fetch', error);

    this.setState({
      person: null,
      isLoading: false,
      isError: true,
    })
  };

  updatePerson() {
    const { id } = this.props;

    if (!id) {
      return;
    }

    this.swapiService.getPerson(id)
      .then(this.onLoaded)
      .catch(this.onError);
  }

  render() {
    const { id } = this.props;

    if (!id) {
      return null;
    }

    const { person, isLoading, isError } = this.state;

    if (isLoading) {
      return <Spinner />;
    } else if (isError || !person) {
      return <ErrorIndicator />;
    }

    return (
      <CardWrapper>
        <PersonDetails { ...person } />
      </CardWrapper>
    );
  }
}
