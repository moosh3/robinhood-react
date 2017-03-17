import React, { Component, PropTypes } from 'react';

class Order extends Component {
  /* Quote component that is rendered when a user
  selects a singular quote to view fundamentals, basic
  info, etc. Should already have quoteData['symbol'], so
  we can use that to dispatch the data
  */

  /*
  componentWillMount() {
    const { dispatch, symbol } = this.props;
    dispatch(fetchQuote(symbol));
  }


  shouldComponentUpdate(nextProps) {
    const { dispatch, symbol, updatedAt } = this.props;
    if (nextProps.updatedAt < ) {
      dispatch(fetchSongIfNeeded(nextProps.songId));
    }
  }
  */

  render() {
    const { authed, dispatch, quoteData, symbol } = this.props;

    return (
      <div>
        <h1>Order</h1>
        <p>Shares: 12</p>
      </div>
    )
  }
}

Quote.propTypes = {
  authed: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  quoteData: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Order;
