import React, {Component} from 'react';

import Spinner from '../../spinner';
import ErrorIndicator from '../../error-indicator';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      isLoading: true,
      isError: false,
    };

    onLoaded = (data) => {
      this.setState({
        data,
        isLoading: false,
        isError: false,
      });
    };

    onError = (error) => {
      console.log('Could not fetch', error);

      this.setState({
        data: null,
        isLoading: false,
        isError: true,
      });
    };

    componentDidMount() {
      this.props.getData().then(this.onLoaded).catch(this.onError);
    }

    render() {
      const { isLoading, isError, data } = this.state;

      if (isLoading) {
        return <Spinner />;
      } else if (isError) {
        return <ErrorIndicator />;
      }

      return <View { ...this.props } data={data} />;
    }
  };
};

export default withData;