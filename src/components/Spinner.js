import React, { Component, PropTypes } from 'react';

class Spinner extends Component {
  render() {
    const { authed, isLoading } = this.props;

    /*
    if (isLoading && !data.something) {
      return <p>Loading...</p>
    }
    */

    return (
      <p>Spinner</p>
    );
  }
}

Spinner.propTypes = {
  authed: PropTypes.objects.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Spinner;
