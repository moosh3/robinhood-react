import React, { Component, PropTypes } from 'react';

const PropTypes = {
  authed: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  ...,
}

export default class Quote extends Component {

  componentWillMount() {
    const { dispatch, symbol } = this.props;
    dispatch(getQuoteData(symbol));
  }

  render() {
    return (
      <div>
        <h1>Quote</h1>
      </div>
    )
  }
}

Quote.PropTypes = PropTypes;
