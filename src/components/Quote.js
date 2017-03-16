import React, { Component, PropTypes } from 'react';
import fetchQuote from '../actions/QuoteActions';

class Quote extends Component {

  componentWillMount() {
    const { dispatch, symbol } = this.props;
    dispatch(fetchQuote(symbol));
  }

  handleClick() {
    const { dispatch, symbol } = this.props;
    dispatch(fetchQuote(symbol))
  }

  /*
  shouldComponentUpdate(nextProps) {
    const { dispatch, symbol, updatedAt } = this.props;
    if (nextProps.updatedAt < ) {
      dispatch(fetchSongIfNeeded(nextProps.songId));
    }
  }
  */

  render() {
    const { authed, dispatch, symbol } = this.props;

    return (
      <div>
        <h1>Quote</h1>
        <button onClick={this.handleClick}
      </div>
    )
  }
}

Quote.propTypes = {
  authed: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired
};

export default Quote;
