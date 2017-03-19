import React, { Component, PropTypes } from 'react';

class Spinner extends Component {
  render() {
    const { authed, isLoading } = this.props;

    return (
      <h1>Spinner</h1>
    );
  }
}

Spinner.propTypes = {
  authed: PropTypes.objects.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Spinner;
