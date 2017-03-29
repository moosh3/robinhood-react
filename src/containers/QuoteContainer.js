import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import QuotePaneComponent from '../components/QuoteDetail';

const mapStateToProps = (state) => {
  const { authed, quote, account } = state;

  return {
    authed,
    account,
    quote,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
        changePrimaryColor: (color) => dispatch(changePrimaryColor(color)),
        fetchQuote: (quote) => dispatch(fetchQuote(quote))
    }
}

QuoteContainer.propTypes = {
  authed: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
  quote: PropTypes.object.isRequired,
}

const PositionPaneContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuotePaneComponent);

export default QuotePaneContainer;
