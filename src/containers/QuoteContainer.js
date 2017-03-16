import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteDetail from '../components/QuoteDetail';

class QuoteContainer extends Component {
  render() {
    return <Quote {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { authed, dispatch, quoteData, symbol } = state;
  const { symbol } = quoteData[symbol];

  return {
    authed,
    dispatch,
    quoteData,
    symbol
  };
}



export default connect(mapStateToProps)(SongContainer);
